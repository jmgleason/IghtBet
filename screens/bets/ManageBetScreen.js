import { NavigationContainer } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { View, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import Colors from "../../constants/Colors";
import IconButton from "../../components/IconButton";
import BetForm from "../../components/ManageBet/BetForm";
import { addBet, updateBet, deleteBet } from "../../store/redux/bets";

function ManageBetScreen({ route, navigation }) {
  const dispatch = useDispatch();

  const betId = route.params?.betId;
  const selectedBet = useSelector((state) =>
    state.bets.allBets.find((bet) => bet.id == betId)
  );
  const isEditing = !!betId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Bet" : "Add Bet",
    });
  }, [navigation, isEditing]);

  function deleteBetHandler() {
    dispatch(deleteBet({ id: betId }));
    navigation.navigate("AllBets");
  }

  function cancelHandler() {
    navigation.goBack();
  }

  function submitHandler(betData) {
    if (isEditing) {
      dispatch(updateBet(betData));
      navigation.goBack();
    } else {
      dispatch(addBet(betData));
      navigation.navigate("AllBets");
    }
  }

  return (
    <View style={styles.container}>
      <BetForm
        submitButtonLabel={isEditing ? "Update" : "Create"}
        onCancel={cancelHandler}
        onSubmit={submitHandler}
        defaultValues={selectedBet}
      />

      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            iconName="trash-o"
            size={36}
            color={Colors.declined}
            onPress={deleteBetHandler}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: "gray",
    alignItems: "center",
  },
});

export default ManageBetScreen;
