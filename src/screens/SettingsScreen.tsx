import {View, Text} from 'react-native';
import React, {useContext} from 'react';
import {AuthContext} from '../context/auth';

const SettingsScreen = () => {
  const {authState, signIn} = useContext(AuthContext);
  return (
    <View>
      <Text>SettingsScreen</Text>
      <Text>{JSON.stringify(authState, null, 2)}</Text>
    </View>
  );
};

export default SettingsScreen;
