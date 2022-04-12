import React from 'react';
import { FlatList } from 'react-native';

import BetCardDisplay from './BetCardDisplay';

function renderBet(itemData) {
  return <BetCardDisplay
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
};

const BetsList = props => {
  return (
    <FlatList
      data={props.bets}
      keyExtractor={item => item.id}
      renderItem={renderBet}
    />
  );
};

export default BetsList;
