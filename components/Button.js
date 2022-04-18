import { Pressable, View, Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

function Button({children, onPress, color, style}) {
  return (
    <View style={style}>
      <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed}>
        <View style={{...styles.button, backgroundColor: color}}>
          <Text style={styles.buttonText}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 15,
    marginVertical: 5,
    backgroundColor: Colors.lightGray
  },
  flat: {
    backgroundColor: 'transparent'
  },
  buttonText: {
    color: 'white',
    textAlign: 'center'
  },
  pressed: {
    opacity: 0.7,
    borderRadius: 4
  }
});

export default Button;
