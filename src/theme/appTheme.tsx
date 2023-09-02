import {StyleSheet} from 'react-native';

export const colors = {
  primary: '#5856D6',
};

export const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
  },

  title: {
    fontSize: 30,
    marginBottom: 10,
  },

  bigButton: {
    width: 100,
    height: 100,
    backgroundColor: 'purple',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  bigButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  avatarContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  menuContainer: {
    marginVertical: 30,
    marginHorizontal: 50,
  },
  menuItem: {
    fontSize: 20,
  },
  menuButton: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});
