import { ScrollView, View, Text, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import Button from "../../components/Button";
import Colors from "../../constants/Colors";
import dateTimeHelper from "../../utils/dateTimeHelper";
import currencyHelper from "../../utils/currencyHelper";

const BetDetailScreen = (props) => {
  const betId = props.route.params.betId;
  const bet = useSelector((state) =>
    state.bets.allBets.find((bet) => bet.id == betId)
  );
  const dispatch = useDispatch();

  function onAcceptBetHandler() {}

  function onDeclineBetHandler() {}

  function onEditBetHandler() {
    props.navigation.navigate("ManageBet", {
      betId: bet.id,
    });
  }

  return (
    <ScrollView>
      <View style={styles.mainView}>
        <View style={styles.detailSection}>
          <Text style={styles.title}>{bet.title}</Text>
          <Text style={styles.descriptionText}>{bet.description}</Text>

          <View style={styles.labelSection}>
            <Text style={styles.labelText}>Wager:</Text>
            <Text style={styles.labelText}>
              {currencyHelper.penniesToFormattedDollars(bet.wager)}
            </Text>
          </View>

          <View style={styles.labelSection}>
            <Text style={styles.labelText}>Expires:</Text>
            <Text style={styles.labelText}>
              {dateTimeHelper.getStandardDate(bet.settleDate)}
            </Text>
          </View>
        </View>

        <Button color={Colors.accepted} onPress={onAcceptBetHandler}>
          Accept Bet
        </Button>
        <Button color={Colors.declined} onPress={onDeclineBetHandler}>
          Decline Bet
        </Button>
        <Button color={Colors.defaultButtonColor} onPress={onEditBetHandler}>
          Edit Bet
        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainView: {
    marginHorizontal: 20,
  },
  detailSection: {
    marginBottom: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 10,
  },
  labelSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
  },
  labelText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default BetDetailScreen;
