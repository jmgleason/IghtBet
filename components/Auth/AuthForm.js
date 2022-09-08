import { useState } from "react";
import { StyleSheet, View } from "react-native";

import Button from "../Button";
import Input from "../Input";

function AuthForm({ isLogin, onSubmit, credentialsInvalid }) {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredConfirmEmail, setEnteredConfirmEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState("");

  const {
    email: emailIsInvalid,
    confirmEmail: emailsDontMatch,
    password: passwordIsInvalid,
    confirmPassword: passwordsDontMatch,
  } = credentialsInvalid;

  function updateInputValueHandler(inputType, enteredValue) {
    switch (inputType) {
      case "email":
        setEnteredEmail(enteredValue);
        break;
      case "confirmEmail":
        setEnteredConfirmEmail(enteredValue);
        break;
      case "password":
        setEnteredPassword(enteredValue);
        break;
      case "confirmPassword":
        setEnteredConfirmPassword(enteredValue);
        break;
    }
  }

  function submitHandler() {
    onSubmit({
      email: enteredEmail,
      confirmEmail: enteredConfirmEmail,
      password: enteredPassword,
      confirmPassword: enteredConfirmPassword,
    });
  }

  return (
    <View style={styles.form}>
      <View>
        <Input
          label="Email Address"
          keyboardType="email-address"
          invalid={emailIsInvalid}
          textInputConfig={{
            onChangeText: updateInputValueHandler.bind(this, "email"),
            value: enteredEmail,
          }}
        />
        {!isLogin && (
          <Input
            label="Confirm Email Address"
            keyboardType="email-address"
            invalid={emailsDontMatch}
            textInputConfig={{
              onChangeText: updateInputValueHandler.bind(this, "confirmEmail"),
              value: enteredConfirmEmail,
            }}
          />
        )}
        <Input
          label="Password"
          invalid={passwordIsInvalid}
          textInputConfig={{
            onChangeText: updateInputValueHandler.bind(this, "password"),
            value: enteredPassword,
            secureTextEntry: true,
          }}
        />
        {!isLogin && (
          <Input
            label="Confirm Password"
            invalid={passwordsDontMatch}
            textInputConfig={{
              onChangeText: updateInputValueHandler.bind(
                this,
                "confirmPassword"
              ),
              value: enteredConfirmPassword,
              secureTextEntry: true,
            }}
          />
        )}
        <View style={styles.buttons}>
          <Button onPress={submitHandler} color="black">
            {isLogin ? "Log In" : "Sign Up"}
          </Button>
        </View>
      </View>
    </View>
  );
}

export default AuthForm;

const styles = StyleSheet.create({
  buttons: {
    marginTop: 12,
  },
});
