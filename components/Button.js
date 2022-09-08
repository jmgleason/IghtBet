import { Pressable, View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import Colors from "../constants/Colors";

function Button({ children, onPress, color, style, iconName }) {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={{ ...styles.button, backgroundColor: color }}>
          {iconName && (
            <Icon style={styles.icon} color="white" size={22} name={iconName} />
          )}
          <Text style={styles.buttonText}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 15,
    marginVertical: 5,
    backgroundColor: Colors.lightGray,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  flat: {
    backgroundColor: "transparent",
  },
  buttonText: {
    color: "white",
  },
  pressed: {
    opacity: 0.7,
    borderRadius: 4,
  },
  icon: {
    paddingRight: 10,
  },
});

export default Button;
