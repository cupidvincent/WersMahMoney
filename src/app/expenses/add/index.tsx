import BackButton from '@/components/BackButton';
import ExpenseForm from '@/components/ExpenseForm';
import { Expense } from '@/types/expense.types';
import * as crypto from 'expo-crypto';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, Pressable, Text, View } from 'react-native';

const AddExpense = () => {
  const router = useRouter();

  // Keep the form's current input values here; new expenses default to Food and today.
  const [values, setValues] = useState({
    title: '',
    amount: 0,
    category: 'Food',
    date: new Date(),
    merchant: '',
  });

  // Update the changed field while preserving the other form values.
  const handleChange = (name: string, value: string | Date | number) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const { title, amount, date } = values;
    // Stop submission if the title is blank, the amount is nonpositive, or the date is missing.
    if (!title.trim()) {
      Alert.alert('Validation Error', 'Title is required');
      return;
    }

    if (!amount || Number(amount) <= 0) {
      Alert.alert('Validation Error', 'Enter a valid amount');
      return;
    }
    if (!date) {
      Alert.alert('Validation Error', 'Date is required');
      return;
    }

    // Build the expense record with a unique ID and creation/update timestamps.
    const parsedExpense: Expense = {
      id: crypto.randomUUID(),
      title: title.trim(),
      // Convert the entered peso amount to integer centavos.
      amountCentavos: Math.round(Number(amount) * 100),
      category: values.category as Expense['category'],
      // Extract the UTC date portion; this can differ from the selected local date.
      txnDate: date.toISOString().split('T')[0],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      // Omit the optional merchant when the input contains only whitespace.
      merchant: values.merchant.trim() || undefined,
    };

    // Preview the record in the console and alert; this does not persist the expense yet.
    console.log('Parsed Expense:', parsedExpense);
    Alert.alert(
      'Expense added successfully!',
      JSON.stringify(parsedExpense, null, 2),
    );
  };

  return (
    <View>
      <BackButton />
      <Text>AddExpense</Text>
      {/* The parent owns the values; the shared form reports field changes back here. */}
      <ExpenseForm mode="add" values={values} onChange={handleChange} />

      <Pressable onPress={handleSubmit}>
        <Text>Submit</Text>
      </Pressable>

      {/* Open the receipt review route, which is currently a placeholder screen. */}
      <Pressable onPress={() => router.push('/expenses/reviewreceipt')}>
        <Text>Scan Receipt</Text>
      </Pressable>
    </View>
  );
};

export default AddExpense;
