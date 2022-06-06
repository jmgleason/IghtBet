import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import BetsList from '../../components/BetsList';
import { fetchAllBets } from '../../utils/http';

const AllBetsScreen = props => {
  // This is grabbing the bets directly from the dummy data, which is set in state
  const fetchedBets = useSelector((state) => state.allBets.userBets);

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
