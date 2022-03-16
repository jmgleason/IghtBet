import { createStackNavigator } from '@react-navigation/stack';
import { Platform } from 'react-native';
import Colors from '../constants/Colors';

import MyBetsScreen from '../screens/user/MyBetsScreen';
import BetDetailScreen from '../screens/bets/BetDetailScreen';

const Stack = createStackNavigator();

function BetsNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="MyBets"
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS == 'android' ? Colors.primary : ''
        },
        headerTintColor: Platform.OS == 'android' ? 'white' : Colors.primary
      }}
    >
      <Stack.Screen
        name="MyBets"
        component={MyBetsScreen}
        options={{
          title: "My Bets"
        }}
      />
      <Stack.Screen
        name="BetDetail"
        component={BetDetailScreen}
        options={({route}) => ({
          title: route.params.betTitle
        })}
      />
    </Stack.Navigator>
  )
}

export default BetsNavigator;