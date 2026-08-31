import { useState } from 'react';
import { Text, View } from 'react-native';
import TextInput from './TextInput';

const ExpenseForm = ({
  mode,
  expenseId,
}: {
  mode: 'add' | 'edit';
  expenseId?: string;
}) => {
  const [values, setValues] = useState({
    title: '',
    amount: '',
    category: '',
    date: '',
    merchant: '',
  });

  const handleChange = (name: string, value: string) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <View>
      <Text>ExpenseForm</Text>

      <TextInput
        placeholder="Title"
        value={values.title}
        onChangeText={(value) => handleChange('title', value)}
      />
      <TextInput
        placeholder="Amount"
        keyboardType="numeric"
        value={values.amount}
        onChangeText={(value) => handleChange('amount', value)}
      />
      <TextInput
        placeholder="Category"
        value={values.category}
        onChangeText={(value) => handleChange('category', value)}
      />
      <TextInput
        placeholder="Date"
        value={values.date}
        onChangeText={(value) => handleChange('date', value)}
      />
      <TextInput
        placeholder="Merchant"
        value={values.merchant}
        onChangeText={(value) => handleChange('merchant', value)}
      />
    </View>
  );
};

export default ExpenseForm;
