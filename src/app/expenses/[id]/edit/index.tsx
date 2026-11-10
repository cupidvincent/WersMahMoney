import BackButton from '@/components/BackButton';
import ExpenseForm from '@/components/ExpenseForm';
import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

const EditExpense = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <View>
      <BackButton />
      <Text>EditExpense</Text>
      {/* This edit screen is a scaffold: the form still requires values and onChange props. */}
      <ExpenseForm mode="edit" expenseId={id} />
    </View>
  );
};

export default EditExpense;
