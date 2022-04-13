import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Tag from "./Tag";
import Colors from "../constants/Colors";
import betHelper from "../utils/betHelper";

function BetCardDisplay({id, title, wager, description, statusCd, expirationDate}) {
  const navigation = useNavigation();

  function betPressHandler() {
    navigation.navigate(
      'BetDetail',
      {
        betId: id,
        betTitle: title,
        betWager: wager,
        betDescription: description,
        betExpirationDate: expirationDate.toString()
      }
    );
  }

  return (
    <TouchableOpacity onPress={betPressHandler}>
      <View style={styles.betCard}>
        <View style={styles.header}>
          <Text style={styles.titleText}>{title}</Text>
        </View>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.actions}>
          <View>
            <Text style={styles.wagerText}>${wager}</Text>
          </View>
          <Tag
            color={betHelper.getBetStateColor(statusCd)}
            tagText={betHelper.getBetStateText(statusCd)}
            icon={betHelper.getBetIcon(statusCd)}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  betCard: {
    flex: 1,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    margin: 20,
    padding: 10
  },
  header: {
    paddingBottom: 3
  },
  titleView: {
    flex: 1
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  wagerText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  description: {
    fontSize: 14,
    paddingLeft: 10
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: Colors.lightGray
  }
});

export default BetCardDisplay;
