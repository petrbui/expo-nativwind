import { useRouter } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function Page() {
  const { push } = useRouter();

  return (
    <View>
      <Text className="bg-red-200 text-blue-600">INDEX</Text>
      <Button onPress={() => push('/dashboard')} title="dashboard" color="red" />
    </View>
  );
}
