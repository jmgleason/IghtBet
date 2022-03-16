import React from 'react';
import { FlatList, Text } from 'react-native';
import { useSelector } from 'react-redux';

import BetCardDisplay from '../../components/BetCardDisplay';

const MyBetsScreen = props => {
  const bets = useSelector(state => state.bets.userBets);
  return (
    <FlatList
      data={bets}
      keyExtractor={item => item.id}
      renderItem={itemData => (
        <BetCardDisplay
          title={itemData.item.title}
          wager={itemData.item.wager}
          description={itemData.item.description}
          onViewBetDetails={() => {
            props.navigation.navigate(
              'BetDetail',
              {
                betId: itemData.item.id,
                betTitle: itemData.item.title
              }
          );
          }}
          onAcceptBet={() => {}}
        />
      )}
    />
  );
};

export default MyBetsScreen;