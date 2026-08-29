import { Text, View } from 'react-native';

const ExpenseForm = ({
  mode,
  expenseId,
}: {
  mode: 'add' | 'edit';
  expenseId?: string;
}) => {
  return (
    <View>
      <Text>ExpenseForm</Text>
      <Text>mode: {mode}</Text>
      <Text>expenseId: {expenseId}</Text>
    </View>
  );
};

export default ExpenseForm;
