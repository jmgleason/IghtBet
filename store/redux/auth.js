import AsyncStorage from "@react-native-async-storage/async-storage";

import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: "",
    isAuthenticated: false,
  },
  reducers: {
    authenticate: (state, action) => {
      let updatedState = state;

      updatedState.token = action.payload.token;
      AsyncStorage.setItem("token", updatedState.token);
      updatedState.isAuthenticated = !!updatedState.token;

      return updatedState;
    },
    logout: (state) => {
      let updatedState = state;

      updatedState.token = "";
      AsyncStorage.removeItem("token");
      updatedState.isAuthenticated = false;

      return updatedState;
    },
  },
});

export const authenticate = authSlice.actions.authenticate;
export const logout = authSlice.actions.logout;
export default authSlice.reducer;
