import { useRouter } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function Page() {
  const { push } = useRouter();
  return (
    <View>
      <Text>DASHBOARD</Text>
      <Button onPress={() => push('/')} title="back" />
    </View>
  );
}
