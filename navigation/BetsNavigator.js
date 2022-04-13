import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../constants/Colors';

import AllBetsScreen from '../screens/bets/AllBetsScreen';
import ActiveBetsScreen from '../screens/bets/ActiveBetsScreen';
import SettledBetsScreen from '../screens/bets/SettledBetsScreen';
import BetDetailScreen from '../screens/bets/BetDetailScreen';
import ManageBetScreen from '../screens/bets/ManageBetScreen';
import IconButton from '../components/IconButton';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function BetsOverview() {
  return (
    <BottomTabs.Navigator
      screenOptions={({navigation}) => ({
        headerRight: ({tintColor}) => (
          <IconButton
            iconName="plus"
            size={24}
            color={tintColor}
            onPress={() => {
              navigation.navigate('ManageBet');
            }}
          />
        )
      })}
    >
      <BottomTabs.Screen
        name="AllBets"
        component={AllBetsScreen}
        options={{
          title: "All Bets",
          tabBarLabel: "All",
          tabBarIcon: ({color, size}) => <Icon name="th-list" size={size} color={color} />
        }}
      />
      <BottomTabs.Screen
        name="ActiveBets"
        component={ActiveBetsScreen}
        options={{
          title: "Active Bets",
          tabBarLabel: "Active",
          tabBarIcon: ({color, size}) => <Icon name="spinner" size={size} color={color} />
        }}
      />
      <BottomTabs.Screen
        name="SettledBets"
        component={SettledBetsScreen}
        options={{
          title: "Settled Bets",
          tabBarLabel: "Settled",
            tabBarIcon: ({color, size}) => <Icon name="flag-checkered" size={size} color={color} />
        }}
      />
    </BottomTabs.Navigator>
  );
}

function BetsNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="BetsOverview"
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS == 'android' ? Colors.primary : ''
        },
        headerTintColor: Platform.OS == 'android' ? 'white' : Colors.primary
      }}
    >
      <Stack.Screen
        name="BetsOverview"
        component={BetsOverview}
        options={{
          title: "My Bets",
          headerShown: false
        }}
      />
      <Stack.Screen
        name="BetDetail"
        component={BetDetailScreen}
        options={{
          title: "View Bet"
        }}
      />
      <Stack.Screen
        name="ManageBet"
        component={ManageBetScreen}
        options={{
          presentation: 'modal'
        }}
      />
    </Stack.Navigator>
  )
}

export default BetsNavigator;