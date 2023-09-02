import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import ChatScreen from '../screens/ChatScreen';
import ContactsScreen from '../screens/ContactsScreen';
import AlbumsScreen from '../screens/AlbumsScreen';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

const TopTabNav = () => {
  const {top} = useSafeAreaInsets();
  return (
    <Tab.Navigator
      style={{
        paddingTop: top,
      }}
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={({route}) => ({
        tabBarShowIcon: true,
        tabBarIndicatorStyle: {
          backgroundColor: 'purple',
        },
        tabBarIcon: ({color}) => {
          let iconName: string;

          switch (route.name) {
            case 'ChatScreen':
              iconName = 'chatbox-ellipses-outline';
              break;

            case 'ContactsScreen':
              iconName = 'people-outline';
              break;

            case 'AlbumsScreen':
              iconName = 'albums-outline';
              break;

            default:
              break;
          }
          return <Icon name={iconName} size={22} />;
        },
      })}>
      <Tab.Screen name="ChatScreen" component={ChatScreen} />
      <Tab.Screen name="ContactsScreen" component={ContactsScreen} />
      <Tab.Screen name="AlbumsScreen" component={AlbumsScreen} />
    </Tab.Navigator>
  );
};

export default TopTabNav;
