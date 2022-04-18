import { NavigationContainer } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { View, StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';
import IconButton from '../../components/IconButton';
import Button from '../../components/Button';

function ManageBetScreen({route, navigation}) {
  const betId = route.params?.betId;
  const isEditing = !!betId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Bet' : 'Add Bet'
    })
  }, [navigation, isEditing]);

  function deleteBetHandler() {
    navigation.goBack();
  };

  function cancelHandler() {
    navigation.goBack();
  };

  function confirmHandler() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button onPress={cancelHandler} color={Colors.pending} style={styles.button}>Cancel</Button>
        <Button onPress={confirmHandler} color={Colors.accepted} style={styles.button}>{isEditing ? 'Update' : 'Add'}</Button>
      </View>
      {
        isEditing &&
        <View style={styles.deleteContainer}>
          <IconButton
            iconName="trash-o"
            size={36}
            color={Colors.declined}
            onPress={deleteBetHandler}
          />
        </View>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    alignItems: 'center'
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default ManageBetScreen;