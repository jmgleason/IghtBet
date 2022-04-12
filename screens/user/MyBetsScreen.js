import React, { useEffect, useState } from 'react';

import BetsList from '../../components/BetsList';
import { fetchAllBets } from '../../utils/http';

const MyBetsScreen = props => {
  // This is grabbing the bets directly from the dummy data, which is set in state
  // const bets = useSelector(state => state.bets.userBets);

  const [fetchedBets, setFetchedBets] = useState([]);

  useEffect(() => {
    async function getBets() {
      const bets = await fetchAllBets();
      setFetchedBets(bets);
    };

    getBets();
  }, []);

  return (
    <BetsList bets={fetchedBets} />
  );
};

export default MyBetsScreen;
