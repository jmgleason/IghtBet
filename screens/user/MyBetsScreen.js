import React, { useEffect, useState } from 'react';
import { FlatList, Text } from 'react-native';
import { useSelector } from 'react-redux';

import BetCardDisplay from '../../components/BetCardDisplay';
import { fetchAllBets, addBet } from '../../utils/http';

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
    <FlatList
      data={fetchedBets}
      keyExtractor={item => item.id}
      renderItem={itemData => (
        <BetCardDisplay
          title={itemData.item.title}
          wager={itemData.item.wager}
          description={itemData.item.description}
          statusCd={itemData.item.statusCd}
          onViewBetDetails={() => {
            props.navigation.navigate(
              'BetDetail',
              {
                betId: itemData.item.id,
                betTitle: itemData.item.title,
                betDescription: itemData.item.description,
                betWager: itemData.item.wager,
                betExpirationDate: itemData.item.expirationDate.toString()
              }
          );}}
          onAcceptBet={() => {}}
        />
      )}
    />
  );
};

export default MyBetsScreen;
