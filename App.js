import "react-native-gesture-handler"; // Has to be at the top, don't put anything above this!
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch, Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";

import DrawerNavigator from "./navigation/bets/DrawerNavigator";
import LoginNavigator from "./navigation/LoginNavigator";
import { store } from "./store/redux/store";
import { authenticate } from "./store/redux/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

function MainNavigation() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <NavigationContainer>
      {isAuthenticated ? <DrawerNavigator /> : <LoginNavigator />}
    </NavigationContainer>
  );
}

function Root() {
  const [isAttemptingLogin, setIsAttemptingLogin] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchToken() {
      let storedToken = "";

      try {
        storedToken = await AsyncStorage.getItem("token");
      } catch (error) {
        // Error fetching stored token
        // Return initial state of empty string
        setIsAttemptingLogin(false);
      }

      if (storedToken) {
        dispatch(authenticate({ token: storedToken }));
      }

      setIsAttemptingLogin(false);
    }

    fetchToken();
  }, []);

  if (!isAttemptingLogin) {
    SplashScreen.hideAsync();
  }

  return <MainNavigation />;
}

export default function App() {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
}
