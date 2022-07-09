import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Colors from "../constants/Colors";
import LoginScreen from "../screens/user/LoginScreen";
import SignupScreen from "../screens/user/SignupScreen";

const Stack = createNativeStackNavigator();

function LoginNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS == "android" ? Colors.primary : "",
        },
        headerTintColor: Platform.OS == "android" ? "white" : Colors.primary,
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}

export default LoginNavigator;
