import { createSlice } from "@reduxjs/toolkit";
import BETS from "../../data/dummy-data";

const betSlice = createSlice({
  name: 'bets',
  initialState: {
    allBets: BETS
  },
  reducers: {
    addBet: (state, action) => {
      state.bets.push(action.payload.bet);
    },
    deleteBet: (state, action) => {
      state.allBets = state.allBets.filter((bet) => bet.id != action.payload.id);
    }
  }
});

export const addBet = betSlice.actions.addBet;
export const deleteBet = betSlice.actions.deleteBet;
export default betSlice.reducer;