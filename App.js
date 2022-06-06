import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import BetsNavigator from './navigation/BetsNavigator';
import { store } from './store/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <BetsNavigator />
      </NavigationContainer>
    </Provider>
  );
}
