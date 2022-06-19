import { NavigationContainer } from "@react-navigation/native";
import { useLayoutEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import Colors from "../../constants/Colors";
import IconButton from "../../components/IconButton";
import LoadingOverlay from "../../components/UI/LoadingOverlay";
import ErrorOverlay from "../../components/UI/ErrorOverlay";
import BetForm from "../../components/ManageBet/BetForm";
import { addBet, updateBet, deleteBet } from "../../store/redux/bets";
import { axiosAddBet, axiosUpdateBet, axiosDeleteBet } from "../../utils/http";

function ManageBetScreen({ route, navigation }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState();
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

  async function deleteBetHandler() {
    setIsSubmitting(true);

    try {
      await axiosDeleteBet(betId);
      dispatch(deleteBet({ id: betId }));
      navigation.navigate("AllBets");
    } catch (error) {
      setError("Could not delete bet.  Please try again.");
      setIsSubmitting(false);
    }
  }

  function cancelHandler() {
    navigation.goBack();
  }

  async function submitHandler(betData) {
    setIsSubmitting(true);

    try {
      if (isEditing) {
        await axiosUpdateBet(betId, betData);
        dispatch(updateBet({ id: betId, data: betData }));
        navigation.goBack();
      } else {
        const id = await axiosAddBet(betData);
        dispatch(addBet({ ...betData, id: id }));

        navigation.navigate("AllBets");
      }
    } catch (error) {
      setError("Could not save bet.  Please try again");
      isSubmitting(false);
    }
  }

  function errorHandler() {
    setError(null);
  }

  if (error && !isSubmitting) {
    return <ErrorOverlay message={error} onConfirm={errorHandler} />;
  }

  if (isSubmitting) {
    return <LoadingOverlay />;
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
