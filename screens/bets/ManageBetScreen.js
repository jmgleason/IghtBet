import { NavigationContainer } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { Text } from 'react-native';

function ManageBetScreen({route, navigation}) {
  const betId = route.params?.betId;
  const isEditing = !!betId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Bet' : 'Add Bet'
    })
  }, [navigation, isEditing]);


  return (
    <Text>This is where you add or edit a specific bet.  Persisted?: {isEditing.toString()}</Text>
  );
};

export default ManageBetScreen;