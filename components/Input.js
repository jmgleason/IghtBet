import { Text, View, TextInput, StyleSheet } from "react-native";

function Input({ label, invalid, style, textInputConfig }) {
  let inputStyles = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiline);
  }

  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[inputStyles, invalid && styles.invalidInput]}
        {...textInputConfig}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 12,
  },
  label: {
    fontSize: 14,
  },
  input: {
    padding: 6,
    marginTop: 2,
    fontSize: 18,
    borderBottomColor: "gray",
    borderBottomWidth: 2,
  },
  inputMultiline: {
    textAlignVertical: "top",
  },
  invalidInput: {
    borderWidth: 2,
    borderColor: "red",
    backgroundColor: "#ffd6da",
  },
});

export default Input;
