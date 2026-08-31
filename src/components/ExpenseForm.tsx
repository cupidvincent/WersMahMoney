import { CATEGORIES } from '@/constants/categories';
import { useState } from 'react';
import { Text, View } from 'react-native';
import DatePicker from './ui/DatePicker';
import Select from './ui/Select';
import TextInput from './ui/TextInput';

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
    category: 'Food',
    date: new Date(),
    merchant: '',
  });

  const handleChange = (name: string, value: string | Date) => {
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

      <Select
        value={values.category}
        onChange={(value) => handleChange('category', value)}
        options={CATEGORIES}
      />
      <DatePicker
        value={values.date}
        onChange={(date) => handleChange('date', date)}
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
