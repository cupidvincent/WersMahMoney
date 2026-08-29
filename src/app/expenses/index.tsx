import BackButton from '@/components/BackButton';
import { ThemedView } from '@/components/themed-view';
import { DATA } from '@/constants/expenses';
import { useRouter } from 'expo-router';
import { FlatList, Pressable, Text, View } from 'react-native';

type ItemProps = { title: string };

const Item = ({ title }: ItemProps) => (
  <ThemedView>
    <Text>{title}</Text>
  </ThemedView>
);

const List = () => {
  const router = useRouter();
  const handlePress = (item: (typeof DATA)[number]) => {
    console.log('Clicked: item', item);
    router.push({
      pathname: '/expenses/[id]',
      params: { id: item.id },
    });
  };
  return (
    <View>
      <BackButton />
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable onPress={() => handlePress(item)}>
            <ThemedView>
              <Text
                style={{
                  padding: 10,
                  borderBottomWidth: 1,
                  borderBottomColor: '#ccc',
                }}
              >
                {item.title}
              </Text>
            </ThemedView>
          </Pressable>
        )}
      />
    </View>
  );
};

export default List;
