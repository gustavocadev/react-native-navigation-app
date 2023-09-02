import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from '../theme/appTheme';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigator/StackNavigator';

// type RouteParams = {
//   id: number;
//   nombre: string;
// };

type Props = StackScreenProps<RootStackParams, 'PersonaScreen'> & {};

const PersonaScreen = ({route, navigation}: Props) => {
  const params = route.params;
  // const params = route.params as RouteParams;
  useEffect(() => {
    navigation.setOptions({
      title: params.nombre,
    });
  }, [navigation, params.nombre]);
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>{JSON.stringify(params, null, 2)}</Text>
    </View>
  );
};

export default PersonaScreen;
