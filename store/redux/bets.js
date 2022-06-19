import { createSlice } from "@reduxjs/toolkit";

import Bet from "../../models/bet";
import BETS from "../../data/dummy-data";

const betSlice = createSlice({
  name: "bets",
  initialState: {
    allBets: BETS,
  },
  reducers: {
    addBet: (state, action) => {
      var newBet = new Bet(
        state.allBets.length + 1,
        1,
        action.payload.receivingOwner,
        action.payload.title,
        "",
        action.payload.description,
        action.payload.wager,
        action.payload.settleDate,
        0
      );
      state.allBets.push(newBet);
    },
    updateBet: (state, action) => {
      state.allBets.map((bet) => {
        if (bet.id == action.payload.id) {
          bet.receivingOwnerIds = action.payload.receivingOwner;
          bet.title = action.payload.title;
          bet.description = action.payload.description;
          bet.wager = action.payload.wager;
          bet.settleDate = action.payload.settleDate;
        }
      });
    },
    deleteBet: (state, action) => {
      state.allBets = state.allBets.filter(
        (bet) => bet.id != action.payload.id
      );
    },
  },
});

export const addBet = betSlice.actions.addBet;
export const updateBet = betSlice.actions.updateBet;
export const deleteBet = betSlice.actions.deleteBet;
export default betSlice.reducer;
