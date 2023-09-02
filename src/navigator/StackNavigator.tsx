import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';
import PersonaScreen from '../screens/PersonaScreen';

export type RootStackParams = {
  HomeScreen: undefined;
  AboutScreen: undefined;
  PersonaScreen: {id: number; nombre: string};
};

const Stack = createStackNavigator<RootStackParams>();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: 'white',
        },
        headerStyle: {
          // for android
          elevation: 0,
          // for ios
          shadowColor: 'transparent',
        },
      }}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Home 🌱',
        }}
      />
      <Stack.Screen
        name="AboutScreen"
        component={AboutScreen}
        options={{
          title: 'About',
        }}
      />

      <Stack.Screen
        name="PersonaScreen"
        component={PersonaScreen}
        options={{
          title: 'Personas',
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
