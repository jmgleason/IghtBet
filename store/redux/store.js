import { configureStore } from '@reduxjs/toolkit';

import allBetsReducer from './allBets';

export const store = configureStore({
  reducer: {
    allBets: allBetsReducer
  }
});
