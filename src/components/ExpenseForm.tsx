import { CATEGORIES } from '@/constants/categories';
import { Text, View } from 'react-native';
import DatePicker from './ui/DatePicker';
import Select from './ui/Select';
import TextInput from './ui/TextInput';

const ExpenseForm = ({
  mode,
  expenseId,
  values,
  onChange,
}: {
  mode: 'add' | 'edit';
  expenseId?: string;
  values: {
    title: string;
    amount: number;
    category: string;
    date: Date;
    merchant: string;
  };
  onChange: (name: string, value: string | Date | number) => void;
}) => {
  return (
    <View>
      <Text>ExpenseForm</Text>

      <TextInput
        placeholder="Title"
        value={values.title}
        onChangeText={(value) => onChange('title', value)}
      />
      <TextInput
        placeholder="Amount"
        inputMode="decimal"
        value={values.amount.toString()}
        onChangeText={(value) => {
          const cleaned = value.replace(/[^0-9.]/g, '');
          onChange('amount', parseFloat(cleaned) || 0);
        }}
      />

      <Select
        value={values.category}
        onChange={(value) => onChange('category', value)}
        options={CATEGORIES}
      />
      <DatePicker
        value={values.date}
        onChange={(date) => onChange('date', date)}
      />
      <TextInput
        placeholder="Merchant"
        value={values.merchant}
        onChangeText={(value) => onChange('merchant', value)}
      />
    </View>
  );
};

export default ExpenseForm;
