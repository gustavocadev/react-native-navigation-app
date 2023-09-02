import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import StackNavigator from './StackNavigator';
import SettingsScreen from '../screens/SettingsScreen';
import {useWindowDimensions} from 'react-native';

export type RootDrawerParams = {};

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const {width, height} = useWindowDimensions();
  return (
    <Drawer.Navigator
      screenOptions={{
        // drawerPosition: 'right',
        drawerType: width > height ? 'permanent' : 'front',
      }}>
      <Drawer.Screen
        name="StackNavigator"
        component={StackNavigator}
        options={{
          title: 'Home',
        }}
      />
      <Drawer.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          title: 'Settings',
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
