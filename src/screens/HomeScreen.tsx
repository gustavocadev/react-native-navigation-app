import {View, Text, Button} from 'react-native';
import React from 'react';
import type {StackScreenProps} from '@react-navigation/stack';
import {styles} from '../theme/appTheme';
import {TouchableOpacity} from 'react-native-gesture-handler';

type Props = StackScreenProps<any, any> & {};

const HomeScreen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>HomeScreen</Text>

      <Button
        title="Ir a About"
        onPress={() => {
          navigation.navigate('AboutScreen');
        }}
      />

      <Text>Navegar con argumentos</Text>

      <View style={{flexDirection: 'row', gap: 10}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('PersonaScreen', {
              id: 1,
              nombre: 'Pedro',
            });
          }}
          style={{
            ...styles.bigButton,
            backgroundColor: '#5856D6',
          }}>
          <Text style={styles.bigButtonText}>Pedro</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('PersonaScreen', {
              id: 2,
              nombre: 'Sara',
            });
          }}
          style={{
            ...styles.bigButton,
            backgroundColor: '#5856D6',
          }}>
          <Text style={styles.bigButtonText}>Sara</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
