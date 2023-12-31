import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab1Screen = () => {
  useEffect(() => {
    console.log('Tab1Screen effect');
  }, []);
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Iconos</Text>

      <Text>
        <Icon name="airplane-outline" size={80} />
      </Text>
    </View>
  );
};

export default Tab1Screen;
