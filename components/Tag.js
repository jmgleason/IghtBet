import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const Tag = props => {
  return (
    <View style={[{borderColor: props.color}, styles.tagBorder]}>
      <Icon style={styles.tagContent} name={props.icon} size={18} color={props.color} />
      <Text style={styles.tagContent}>{props.tagText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tagBorder: {
    borderWidth: 3,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 2,
    paddingHorizontal: 8
  },
  tagContent: {
    paddingHorizontal: 2
  }
});

export default Tag;
