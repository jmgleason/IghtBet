import React from "react";
import { useDispatch } from "react-redux";
import { View, StyleSheet } from "react-native";

import Button from "../../components/Button";
import { logout } from "../../store/redux/auth";

const DrawerFooter = (props) => {
  const dispatch = useDispatch();

  function signOutHandler() {
    console.log("Attempting to sign out");
    dispatch(logout());
  }

  return (
    <View style={styles.drawerFooter}>
      <Button
        onPress={signOutHandler}
        color="black"
        style={styles.button}
        iconName="arrow-left"
      >
        Sign Out
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 10,
  },
  drawerFooter: {
    flexDirection: "column",
    marginBottom: 50,
  },
});

export default DrawerFooter;
