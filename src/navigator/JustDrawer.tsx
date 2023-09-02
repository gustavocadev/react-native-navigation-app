import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import SettingsScreen from '../screens/SettingsScreen';
import {
  Text,
  useWindowDimensions,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {styles} from '../theme/appTheme';
import Tabs from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons';

export type RootDrawerParams = {};

const Drawer = createDrawerNavigator();

const JustDrawer = () => {
  const {width, height} = useWindowDimensions();
  return (
    <Drawer.Navigator
      screenOptions={{
        // drawerPosition: 'right',
        drawerType: width > height ? 'permanent' : 'front',
      }}
      drawerContent={InternalMenu}>
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

const InternalMenu = ({navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      {/* Avatar */}
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://th.bing.com/th/id/OIP.3uTAuEJOEsiaOnuObv53SgAAAA?pid=ImgDet&rs=1',
          }}
          style={styles.avatar}
        />
      </View>

      {/* Menu Options */}
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => {
            navigation.navigate('Tabs');
          }}>
          <Icon name="logo-stackoverflow" size={22} />
          <Text style={styles.menuItem}>Navegacion</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => {
            navigation.navigate('SettingsScreen');
          }}>
          <Icon name="settings-outline" size={22} />
          <Text style={styles.menuItem}>Ajustes</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

export default JustDrawer;
