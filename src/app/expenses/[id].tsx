import BackButton from '@/components/BackButton';
import { DATA } from '@/constants/expenses';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

const ViewExpense = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const { title, amount } = DATA.find((item) => item.id === id) || {
    title: 'Not found',
    amount: 0,
  };

  return (
    <View>
      <BackButton />
      <Text>id: {id}</Text>
      <Text>title: {title}</Text>
      <Text>amount: {amount}</Text>
      <Pressable onPress={() => router.push(`/expenses/${id}/edit`)}>
        <Text>Edit</Text>
      </Pressable>
    </View>
  );
};

export default ViewExpense;
