import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import Button from '../../components/Button';
import Colors from '../../constants/Colors';
import dateTimeHelper from '../../utils/dateTimeHelper';

const BetDetailScreen = props => {
  const betId = props.route.params.betId;
  const selectedBet = useSelector(state => state.bets.allBets.find(prod => prod.id == betId));

  return (
    <ScrollView>
      <View style={styles.mainView}>
        <View style={styles.detailSection}>
          <Text style={styles.title}>{selectedBet.title}</Text>
          <Text style={styles.descriptionText}>{selectedBet.description}</Text>

          <View style={styles.labelSection}>
            <Text style={styles.labelText}>Wager:</Text>
            <Text style={styles.labelText}>${selectedBet.wager}</Text>
          </View>

          <View style={styles.labelSection}>
            <Text style={styles.labelText}>Expires:</Text>
            <Text style={styles.labelText}>{dateTimeHelper.getStandardDate(selectedBet.expirationDate)}</Text>
          </View>
        </View>

        <Button buttonText="Accept Bet" buttonColor={Colors.accepted} onButtonPress={() => {}} />
        <Button buttonText="Decline Bet" buttonColor={Colors.declined} onButtonPress={() => {}} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainView: {
    marginHorizontal: 20
  },
  detailSection: {
    marginBottom: 15
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10
  },
  descriptionText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10
  },
  labelSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5
  },
  labelText: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default BetDetailScreen;
