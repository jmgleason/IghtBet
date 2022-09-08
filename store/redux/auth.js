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
      updatedState.isAuthenticated = !!updatedState.token;

      return updatedState;
    },
    logout: (state) => {
      let updatedState = state;
      updatedState.token = "";
      updatedState.isAuthenticated = false;
    },
  },
});

export const authenticate = authSlice.actions.authenticate;
export const logout = authSlice.actions.logout;
export default authSlice.reducer;
