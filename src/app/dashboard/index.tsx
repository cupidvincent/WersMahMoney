import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useRouter } from 'expo-router';
import { Button } from 'react-native';

type Props = {};

export default function Dashboard({}: Props) {
  const router = useRouter();
  return (
    <ThemedView
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
    >
      <ThemedText type="title" themeColor="text">
        Dashboard
      </ThemedText>

      <Button
        onPress={() => router.push('/expenses')}
        title="View Expenses"
        accessibilityLabel="View expenses"
      />

      <Button
        onPress={() => router.push('/expenses/add')}
        title="Add Expense"
        accessibilityLabel="Add new expense"
      />
    </ThemedView>
  );
}
