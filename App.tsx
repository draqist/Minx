import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import { SafeAreaProvider } from "react-native-safe-area-context";
import BottomNavigator from "./utils/BottomNavigator";
const Stack = createStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    Logo: require("./assets/fonts/MonumentExtended-Black.otf"),
    text: require("./assets/fonts/roboto-cyrillic-300-normal.ttf"),
  });
  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
