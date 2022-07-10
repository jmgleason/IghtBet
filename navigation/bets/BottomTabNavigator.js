import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";

import AllBetsScreen from "../../screens/bets/AllBetsScreen";
import ActiveBetsScreen from "../../screens/bets/ActiveBetsScreen";
import SettledBetsScreen from "../../screens/bets/SettledBetsScreen";
import IconButton from "../../components/IconButton";

const BottomTabs = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerRight: ({ tintColor }) => (
          <IconButton
            iconName="plus"
            size={24}
            color={tintColor}
            onPress={() => {
              navigation.navigate("ManageBet");
            }}
          />
        ),
      })}
    >
      <BottomTabs.Screen
        name="AllBets"
        component={AllBetsScreen}
        options={{
          title: "All Bets",
          tabBarLabel: "All",
          tabBarIcon: ({ color, size }) => (
            <Icon name="th-list" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="ActiveBets"
        component={ActiveBetsScreen}
        options={{
          title: "Active Bets",
          tabBarLabel: "Active",
          tabBarIcon: ({ color, size }) => (
            <Icon name="spinner" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="SettledBets"
        component={SettledBetsScreen}
        options={{
          title: "Settled Bets",
          tabBarLabel: "Settled",
          tabBarIcon: ({ color, size }) => (
            <Icon name="flag-checkered" size={size} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}

export default BottomTabNavigator;
