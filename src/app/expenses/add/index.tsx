import BackButton from '@/components/BackButton';
import ExpenseForm from '@/components/ExpenseForm';
import { useRouter } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

const AddExpense = () => {
  const router = useRouter();
  return (
    <View>
      <BackButton />
      <Text>AddExpense</Text>
      <ExpenseForm mode="add" />

      <Pressable onPress={() => router.push('/expenses/reviewreceipt')}>
        <Text>Scan Receipt</Text>
      </Pressable>
    </View>
  );
};

export default AddExpense;
