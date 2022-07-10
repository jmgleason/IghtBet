import React from "react";
import { useSelector } from "react-redux";

import BetsList from "../../components/BetsList";

const ActiveBetsScreen = (props) => {
  const fetchedBets = useSelector((state) =>
    state.bets.allBets.filter((bet) => bet.ownerId == 1 && bet.statusCd == 1)
  );

  return <BetsList bets={fetchedBets} />;
};

export default ActiveBetsScreen;
