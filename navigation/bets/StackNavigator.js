import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Platform } from "react-native";

import BetDetailScreen from "../../screens/bets/BetDetailScreen";
import ManageBetScreen from "../../screens/bets/ManageBetScreen";
import BottomTabNavigator from "./BottomTabNavigator";
import Colors from "../../constants/Colors";

const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="BetsOverview"
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS == "android" ? Colors.primary : "",
        },
        headerTintColor: Platform.OS == "android" ? "white" : Colors.primary,
      }}
    >
      <Stack.Screen
        name="BetsOverview"
        component={BottomTabNavigator}
        options={{
          title: "My Bets",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="BetDetail"
        component={BetDetailScreen}
        options={{
          title: "View Bet",
        }}
      />
      <Stack.Screen
        name="ManageBet"
        component={ManageBetScreen}
        options={{
          presentation: "modal",
        }}
      />
    </Stack.Navigator>
  );
}

export default StackNavigator;
