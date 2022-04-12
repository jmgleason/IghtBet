import { FlatList } from 'react-native';

import BetCardDisplay from './BetCardDisplay';

function renderBet(itemData) {
  return <BetCardDisplay {...itemData.item} />;
};

function BetsList({ bets }) {
  return (
    <FlatList
      data={bets}
      keyExtractor={item => item.id}
      renderItem={renderBet}
    />
  );
};

export default BetsList;
