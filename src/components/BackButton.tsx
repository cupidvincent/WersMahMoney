import { Pressable, Text } from 'react-native';

import { useRouter } from 'expo-router';

const BackButton = () => {
  const router = useRouter();
  return (
    <Pressable onPress={() => router.back()}>
      <Text>← Back</Text>
    </Pressable>
  );
};

export default BackButton;
