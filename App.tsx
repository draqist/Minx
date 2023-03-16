import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles from './styles/styles';

export default function App() {
  const {container} = styles;
  return (
    <View style={container}>
      <Text>This is my current application</Text>
      <StatusBar style="auto" />
    </View>
  );
}


