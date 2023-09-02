import {View, Text, Button} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from '../theme/appTheme';
import type {StackScreenProps} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';

type Props = StackScreenProps<any, any> & {};

const AboutScreen = ({navigation}: Props) => {
  const navigator = useNavigation();

  useEffect(() => {
    navigator.setOptions({
      title: 'About !!! :D',

      // for ios
      headerBackTitle: '',
    });
  }, [navigator]);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>AboutScreen</Text>

      <Button
        title="Go to Home"
        onPress={() => {
          navigation.navigate('HomeScreen');
        }}
      />
    </View>
  );
};

export default AboutScreen;
