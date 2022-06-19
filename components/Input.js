import { Text, View, TextInput, StyleSheet } from "react-native";

function Input({ label, style, textInputConfig }) {
  let inputStyles = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiline);
  }

  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={inputStyles} {...textInputConfig} />
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
    fontSize: 18,
    borderBottomColor: "gray",
    borderBottomWidth: 2,
  },
  inputMultiline: {
    textAlignVertical: "top",
  },
});

export default Input;
