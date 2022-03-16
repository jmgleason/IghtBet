import React from 'react';
import { ScrollView, View, Text, StyleSheet, Button } from 'react-native';
import { useSelector } from 'react-redux';

const BetDetailScreen = props => {
  const betId = props.route.params.betId;
  const selectedBet = useSelector(state => state.bets.allBets.find(prod => prod.id == betId));

  return (
    <View>
      <Text>Bet Title: {selectedBet.title}</Text>
    </View>
  );
};

BetDetailScreen.navigationOptions = navData => {
  return {
    headerTitle: navData.navigation.getParam('betTitle')
  };
};

const styles = StyleSheet.create({

});

export default BetDetailScreen;
