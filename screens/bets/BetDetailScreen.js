import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import Button from '../../components/Button';
import Colors from '../../constants/Colors';
import dateTimeHelper from '../../utils/dateTimeHelper';
import { fetchBet } from '../../utils/http';

const BetDetailScreen = props => {
  const betId = props.route.params.betId;
  const betTitle = props.route.params.betTitle;
  const betDescription = props.route.params.betDescription;
  const betWager = props.route.params.betWager;
  const betExpirationDate = props.route.params.betExpirationDate;

  function onEditBetHandler() {
    props.navigation.navigate(
      'ManageBet'
    );
  }

  return (
    <ScrollView>
      <View style={styles.mainView}>
        <View style={styles.detailSection}>
          <Text style={styles.title}>{betTitle}</Text>
          <Text style={styles.descriptionText}>{betDescription}</Text>

          <View style={styles.labelSection}>
            <Text style={styles.labelText}>Wager:</Text>
            <Text style={styles.labelText}>${betWager}</Text>
          </View>

          <View style={styles.labelSection}>
            <Text style={styles.labelText}>Expires:</Text>
            <Text style={styles.labelText}>{dateTimeHelper.getStandardDate(new Date(betExpirationDate))}</Text>
          </View>
        </View>

        <Button buttonText="Accept Bet" buttonColor={Colors.accepted} onButtonPress={() => {}} />
        <Button buttonText="Decline Bet" buttonColor={Colors.declined} onButtonPress={() => {}} />
        <Button buttonText="Edit Bet" buttonColor={Colors.defaultButtonColor} onButtonPress={onEditBetHandler} />
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
