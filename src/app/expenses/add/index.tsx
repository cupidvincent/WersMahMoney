import BackButton from '@/components/BackButton';
import ExpenseForm from '@/components/ExpenseForm';
import { Expense } from '@/types/expense.types';
import * as crypto from 'expo-crypto';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, Pressable, Text, View } from 'react-native';

const AddExpense = () => {
  const router = useRouter();

  const [values, setValues] = useState({
    title: '',
    amount: 0,
    category: 'Food',
    date: new Date(),
    merchant: '',
  });

  const handleChange = (name: string, value: string | Date | number) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const { title, amount, date } = values;
    // Handle form submission logic here
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

    const parsedExpense: Expense = {
      id: crypto.randomUUID(),
      title: title.trim(),
      amountCentavos: Math.round(Number(amount) * 100),
      category: values.category as Expense['category'],
      txnDate: date.toISOString().split('T')[0],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      merchant: values.merchant.trim() || undefined,
    };

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
      <ExpenseForm mode="add" values={values} onChange={handleChange} />

      <Pressable onPress={handleSubmit}>
        <Text>Submit</Text>
      </Pressable>

      <Pressable onPress={() => router.push('/expenses/reviewreceipt')}>
        <Text>Scan Receipt</Text>
      </Pressable>
    </View>
  );
};

export default AddExpense;
