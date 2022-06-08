import { createSlice } from "@reduxjs/toolkit";

import Bet from "../../models/bet";
import BETS from "../../data/dummy-data";

const betSlice = createSlice({
  name: 'bets',
  initialState: {
    allBets: BETS
  },
  reducers: {
    addBet: (state, action) => {
      var newBet = new Bet(
        100,
        1,
        [2],
        "Test Bet",
        "",
        "I bet this is a test",
        "100",
        "2021-06-08",
        1
      )
      state.bets.push(newBet);
    },
    deleteBet: (state, action) => {
      state.allBets = state.allBets.filter((bet) => bet.id != action.payload.id);
    }
  }
});

export const addBet = betSlice.actions.addBet;
export const deleteBet = betSlice.actions.deleteBet;
export default betSlice.reducer;