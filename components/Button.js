import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Button = props => {
  return (
    <TouchableOpacity style={{...styles.button, ...props.styling, backgroundColor: props.buttonColor}} onPress={props.onButtonPress}>
      <Text style={styles.buttonText}>{props.buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    alignItems: 'center',
    paddingVertical: 10,
    marginVertical: 5
  },
  buttonText: {
    color: 'white',
    fontSize: 18
  }
});

export default Button;
