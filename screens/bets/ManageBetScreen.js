import { NavigationContainer } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';

import Colors from '../../constants/Colors';
import IconButton from '../../components/IconButton';
import Button from '../../components/Button';
import { deleteBet, addBet } from '../../store/redux/bets';

function ManageBetScreen({route, navigation}) {
  const dispatch = useDispatch();

  const betId = route.params?.betId;
  const isEditing = !!betId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Bet' : 'Add Bet'
    })
  }, [navigation, isEditing]);

  function deleteBetHandler() {
    dispatch(deleteBet({id: betId}));
    navigation.navigate('AllBets');
  };

  function cancelHandler() {
    navigation.goBack();
  };

  function confirmHandler() {
    if (isEditing) {
      navigation.goBack();
    } else {
      dispatch(addBet());
      navigation.navigate('AllBets');
    }
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