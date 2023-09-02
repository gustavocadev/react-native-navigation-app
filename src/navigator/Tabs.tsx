import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Tab1Screen from './Tab1Screen';
// import Tab2Screen from './Tab2Screen';
// import Tab3Screen from './Tab3Screen';
import TopTabNav from './TopTabNav';
import Icon from 'react-native-vector-icons/Ionicons';
import StackNavigator from './StackNavigator';

const Tab = createMaterialBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          let iconName: string;

          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'american-football-outline';
              break;

            case 'Tab2Screen':
              iconName = 'baseball-outline';
              break;

            case 'HomeScreen':
              iconName = 'football-outline';
              break;

            default:
              break;
          }
          return <Icon name={iconName} color={color} size={22} />;
        },
      })}
      activeColor="purple"
      style={{}}>
      <Tab.Screen name="Tab1Screen" component={Tab1Screen} />
      <Tab.Screen name="Tab2Screen" component={TopTabNav} />
      <Tab.Screen name="HomeScreen" component={StackNavigator} />
    </Tab.Navigator>
  );
};

export default Tabs;
