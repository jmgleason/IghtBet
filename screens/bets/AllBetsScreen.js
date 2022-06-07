import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import BetsList from '../../components/BetsList';
import { fetchAllBets } from '../../utils/http';

const AllBetsScreen = props => {
  // This is grabbing the bets directly from the dummy data, which is set in state
  const fetchedBets = useSelector((state) => state.bets.userBets.filter(bet => bet.ownerId == 1));

  //const [fetchedBets, setFetchedBets] = useState([]);

  //useEffect(() => {
  //  async function getBets() {
  //    const bets = await fetchAllBets();
  //    setFetchedBets(bets);
  //  };

  //  getBets();
  //}, []);

  return (
    <BetsList bets={fetchedBets} />
  );
};

export default AllBetsScreen;
