import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import Button from '../../components/Button';
import Colors from '../../constants/Colors';
import dateTimeHelper from '../../utils/dateTimeHelper';
import { fetchBet } from '../../utils/http';

const BetDetailScreen = props => {
  function onEditBetHandler() {
    props.navigation.navigate(
      'ManageBet',
      {
        betId: props.route.params.betId
      }
    );
  }

  return (
    <ScrollView>
      <View style={styles.mainView}>
        <View style={styles.detailSection}>
          <Text style={styles.title}>{props.route.params.betTitle}</Text>
          <Text style={styles.descriptionText}>{props.route.params.betDescription}</Text>

          <View style={styles.labelSection}>
            <Text style={styles.labelText}>Wager:</Text>
            <Text style={styles.labelText}>${props.route.params.betWager}</Text>
          </View>

          <View style={styles.labelSection}>
            <Text style={styles.labelText}>Expires:</Text>
            <Text style={styles.labelText}>{dateTimeHelper.getStandardDate(new Date(props.route.params.betExpirationDate))}</Text>
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
