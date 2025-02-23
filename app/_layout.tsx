import { Stack } from 'expo-router';
import { StatusBar, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import '../global.css';

export default function Layout() {
  return (
    <SafeAreaProvider>
      <View className="p-safe flex flex-1">
        <StatusBar translucent />
        <Stack screenOptions={{ headerShown: false }} />
      </View>
    </SafeAreaProvider>
  );
}
