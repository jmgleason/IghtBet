import React from "react";
import { useSelector } from "react-redux";

import BetsList from "../../components/BetsList";

const SettledBetsScreen = (props) => {
  const fetchedBets = useSelector((state) =>
    state.bets.allBets.filter((bet) => bet.ownerId == 1 && bet.statusCd == 4)
  );

  return <BetsList bets={fetchedBets} />;
};

export default SettledBetsScreen;
