import { CATEGORIES } from '@/constants/categories';
import { Text, View } from 'react-native';
import DatePicker from './ui/DatePicker';
import Select from './ui/Select';
import TextInput from './ui/TextInput';

// Controlled form: values come from the parent, and edits are sent through onChange.
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
  // Report the field name and its new value to the parent screen.
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
          // Keep digits and decimal points, then convert to a number with a zero fallback.
          // This also removes a trailing decimal point and accepts partial numbers.
          const cleaned = value.replace(/[^0-9.]/g, '');
          onChange('amount', parseFloat(cleaned) || 0);
        }}
      />

      {/* Category choices come from the shared category list. */}
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
