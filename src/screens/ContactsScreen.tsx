import {View, Text} from 'react-native';
import React, {useContext} from 'react';
import {styles} from '../theme/appTheme';
import {Button} from 'react-native-paper';
import {AuthContext} from '../context/auth';

const ContactsScreen = () => {
  const {signIn, authState} = useContext(AuthContext);
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>ContactsScreen</Text>

      {!authState.isLoggedIn && (
        <Button
          onPress={() => {
            signIn();
          }}
          mode="contained">
          <Text>Sign In</Text>
        </Button>
      )}
    </View>
  );
};

export default ContactsScreen;
