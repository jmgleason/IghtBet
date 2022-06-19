import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import Colors from "../../constants/Colors";
import dateTimeHelper from "../../utils/dateTimeHelper";
import Button from "../Button";
import Input from "../Input";

function BetForm({ submitButtonLabel, onCancel, onSubmit, defaultValues }) {
  const [inputs, setInputs] = useState({
    title: {
      value: defaultValues ? defaultValues.title : "",
      isValid: true,
    },
    description: {
      value: defaultValues ? defaultValues.description : "",
      isValid: true,
    },
    receivingOwnerId: {
      value: defaultValues ? defaultValues.receivingOwnerId.toString() : "",
      isValid: true,
    },
    wager: {
      value: defaultValues ? (defaultValues.wager / 100).toString() : "",
      isValid: true,
    },
    settleDate: {
      value: defaultValues
        ? dateTimeHelper.getStandardDate(defaultValues.settleDate)
        : "",
      isValid: true,
    },
  });

  function inputChangedHandler(inputValue, enteredValue) {
    setInputs((currentInputs) => {
      return {
        ...currentInputs,
        [inputValue]: { value: enteredValue, isValid: true },
      };
    });
  }

  function submitHandler() {
    const betData = {
      title: inputs.title.value.trim(),
      description: inputs.description.value.trim(),
      receivingOwnerId: +inputs.receivingOwnerId.value,
      wager: +inputs.wager.value * 100,
      settleDate: new Date(inputs.settleDate.value),
      ownerId: 1,
      statusCd: 0,
    };

    // Validation
    const titleIsValid = betData.title.length > 0;
    const receivingOwnerIdIsValid = betData.receivingOwnerId > 0;
    const wagerIsValid = !isNaN(betData.wager) && betData.wager > 0;
    const settleDateIsValid = betData.settleDate.toString() !== "Invalid Date";

    if (
      !titleIsValid ||
      !receivingOwnerIdIsValid ||
      !wagerIsValid ||
      !settleDateIsValid
    ) {
      setInputs((currentInputs) => {
        return {
          title: {
            value: currentInputs.title.value,
            isValid: titleIsValid,
          },
          description: {
            value: currentInputs.description.value,
            isValid: currentInputs.description.isValid,
          },
          receivingOwnerId: {
            value: currentInputs.receivingOwnerId.value,
            isValid: receivingOwnerIdIsValid,
          },
          wager: {
            value: currentInputs.wager.value,
            isValid: wagerIsValid,
          },
          settleDate: {
            value: currentInputs.settleDate.value,
            isValid: settleDateIsValid,
          },
        };
      });

      return;
    }

    onSubmit(betData);
  }

  const formIsInvalid =
    !inputs.title.isValid ||
    !inputs.receivingOwnerId.isValid ||
    !inputs.wager.isValid ||
    !inputs.settleDate.isValid;

  return (
    <View style={styles.form}>
      <Input
        label="Title"
        invalid={!inputs.title.isValid}
        textInputConfig={{
          onChangeText: inputChangedHandler.bind(this, "title"),
          value: inputs.title.value,
        }}
      />
      <Input
        label="Description"
        invalid={!inputs.description.isValid}
        textInputConfig={{
          multiline: true,
          onChangeText: inputChangedHandler.bind(this, "description"),
          value: inputs.description.value,
        }}
      />
      <Input
        label="Who are you betting?"
        invalid={!inputs.receivingOwnerId.isValid}
        textInputConfig={{
          onChangeText: inputChangedHandler.bind(this, "receivingOwnerId"),
          value: inputs.receivingOwnerId.value,
        }}
      />
      <View style={styles.inputsRow}>
        <Input
          label="Wager"
          invalid={!inputs.wager.isValid}
          style={styles.rowInput}
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangedHandler.bind(this, "wager"),
            value: inputs.wager.value,
          }}
        />
        <Input
          label="When will this bet settle?"
          invalid={!inputs.settleDate.isValid}
          style={styles.rowInput}
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputChangedHandler.bind(this, "settleDate"),
            value: inputs.settleDate.value,
          }}
        />
      </View>

      {formIsInvalid && (
        <Text style={styles.errorText}>
          Invalid input values. Please check the fields above.
        </Text>
      )}

      <View style={styles.buttonContainer}>
        <Button onPress={onCancel} color={Colors.pending} style={styles.button}>
          Cancel
        </Button>
        <Button
          onPress={submitHandler}
          color={Colors.accepted}
          style={styles.button}
        >
          {submitButtonLabel}
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    marginTop: 10,
  },
  inputsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    textAlign: "center",
    margin: 8,
    padding: 3,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "red",
    backgroundColor: "#ffd6da",
  },
});

export default BetForm;
