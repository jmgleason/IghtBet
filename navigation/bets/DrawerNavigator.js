import { createDrawerNavigator } from "@react-navigation/drawer";

import StackNavigator from "./StackNavigator";
import SettingsScreen from "../../screens/user/SettingsScreen";

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        options={{ headerShown: false }}
        name="Bets"
        component={StackNavigator}
      />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
