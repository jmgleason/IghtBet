import { configureStore } from '@reduxjs/toolkit';

import betsReducer from './bets';

export const store = configureStore({
  reducer: {
    bets: betsReducer
  }
});
