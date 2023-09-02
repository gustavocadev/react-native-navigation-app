import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import StackNavigator from './src/navigator/StackNavigator';
// import DrawerNavigator from './src/navigator/DrawerNavigator';
import JustDrawer from './src/navigator/JustDrawer';
// import Tabs from './src/navigator/Tabs';

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      {/* <DrawerNavigator /> */}
      <JustDrawer />
      {/* <Tabs /> */}
    </NavigationContainer>
  );
};

export default App;
