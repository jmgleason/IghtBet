import { configureStore } from "@reduxjs/toolkit";

import betsReducer from "./bets";
import authReducer from "./auth";

export const store = configureStore({
  reducer: {
    bets: betsReducer,
    auth: authReducer,
  },
});
