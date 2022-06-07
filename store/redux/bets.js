import { createSlice } from "@reduxjs/toolkit";
import BETS from "../../data/dummy-data";

const betSlice = createSlice({
  name: 'bets',
  initialState: {
    allBets: BETS,
    userBets: BETS.filter(bet => bet.ownerId == 1)
  },
  reducers: {
    addBet: (state, action) => {
      state.bets.push(action.payload.bet);
    },
    deleteBet: (state, action) => {
      console.log(`************* Number of bets: ${state.userBets.length} *************`);
      console.log(`************** ID to delete: ${action.payload.id} *************`);
      state.userBets = state.userBets.filter((bet) => bet.id != action.payload.id);
      state.allBets = state.allBets.filter((bet) => bet.id != action.payload.id);
      console.log(`************* Number of bets after deletion: ${state.userBets.length} *************`);
    }
  }
});

export const addBet = betSlice.actions.addBet;
export const deleteBet = betSlice.actions.deleteBet;
export default betSlice.reducer;