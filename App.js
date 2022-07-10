import React from "react";
import { useSelector, Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";

import StackNavigator from "./navigation/bets/StackNavigator";
import LoginNavigator from "./navigation/LoginNavigator";
import { store } from "./store/redux/store";

function MainNavigation() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <NavigationContainer>
      {!isAuthenticated && <LoginNavigator />}
      {isAuthenticated && <StackNavigator />}
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
