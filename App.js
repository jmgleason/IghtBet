import React from "react";
import { useSelector, Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";

import BetsNavigator from "./navigation/BetsNavigator";
import LoginNavigator from "./navigation/LoginNavigator";
import { store } from "./store/redux/store";

function MainNavigation() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <NavigationContainer>
      {!isAuthenticated && <LoginNavigator />}
      {isAuthenticated && <BetsNavigator />}
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
