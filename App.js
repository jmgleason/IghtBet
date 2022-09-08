import "react-native-gesture-handler"; // Has to be at the top, don't put anything above this!
import React from "react";
import { useSelector, Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";

import StackNavigator from "./navigation/bets/StackNavigator";
import DrawerNavigator from "./navigation/bets/DrawerNavigator";
import LoginNavigator from "./navigation/LoginNavigator";
import { store } from "./store/redux/store";

function MainNavigation() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <NavigationContainer>
      {isAuthenticated ? <DrawerNavigator /> : <LoginNavigator />}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
}
