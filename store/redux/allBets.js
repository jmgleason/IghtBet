import { createSlice } from "@reduxjs/toolkit";
import BETS from "../../data/dummy-data";

const allBetsSlice = createSlice({
  name: 'allBets',
  initialState: {
    allBets: BETS,
    userBets: BETS.filter(bet => bet.ownerId == 1)
  },
  reducers: {
    addBet: (state, action) => {
      state.bets.push(action.payload.bet);
    },
    deleteBet: (state, action) => {
      state.bets.splice(state.bets.indexOf(action.payload.id), 1);
    }
  }
});

export const addBet = allBetsSlice.actions.addBet;
export const deleteBet = allBetsSlice.actions.deleteBet;
export default allBetsSlice.reducer;