import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import betsReducer from './store/reducers/bets';
import BetsNavigator from './navigation/BetsNavigator';

const rootReducer = combineReducers({
  bets: betsReducer
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <BetsNavigator />
      </NavigationContainer>
    </Provider>
  );
}
