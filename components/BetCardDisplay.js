import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";

const BetCardDisplay = props => {
  return (
    <TouchableOpacity onPress={props.onViewBetDetails}>
      <View style={styles.betCard}>
        <View style={styles.header}>
          <View style={styles.titleView}>
            <Text style={styles.titleText}>{props.title}</Text>
          </View>
          <View style={styles.wagerView}>
            <Text style={styles.wagerText}>${props.wager}</Text>
          </View>
        </View>
        <Text style={styles.description}>{props.description}</Text>
        <View style={styles.actions}>
          <Button color={Colors.primary} title="Accept Bet" onPress={props.onAcceptBet} />
          <Button color={Colors.primary} title="View Details" onPress={props.onViewBetDetails} />
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
    flexDirection: 'row',
    paddingBottom: 3
  },
  titleView: {
    flex: 1
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  wagerView: {
    paddingLeft: 5
  },
  wagerText: {
    fontSize: 18
  },
  description: {
    fontSize: 14,
    paddingLeft: 10
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});

export default BetCardDisplay;