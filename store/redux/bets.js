import { createSlice } from "@reduxjs/toolkit";

const betSlice = createSlice({
  name: "bets",
  initialState: {
    allBets: [],
  },
  reducers: {
    setBets: (state, action) => {
      state.allBets = action.payload;
    },
    addBet: (state, action) => {
      var newBet = {
        ...action.payload,
      };
      state.allBets.push(newBet);
    },
    updateBet: (state, action) => {
      const updatableBetIndex = state.allBets.findIndex(
        (bet) => bet.id == action.payload.id
      );
      const updatableBet = state.allBets[updatableBetIndex];
      const updatedBet = { ...updatableBet, ...action.payload.data };

      const updatedBets = [...state.allBets];
      updatedBets[updatableBetIndex] = updatedBet;

      state.allBets = updatedBets;
    },
    deleteBet: (state, action) => {
      const bets = state.allBets;
      const updatedBets = bets.filter((bet) => bet.id != action.payload.id);
      state.allBets = updatedBets;
    },
  },
});

export const setBets = betSlice.actions.setBets;
export const addBet = betSlice.actions.addBet;
export const updateBet = betSlice.actions.updateBet;
export const deleteBet = betSlice.actions.deleteBet;
export default betSlice.reducer;
