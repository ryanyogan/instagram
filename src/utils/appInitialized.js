import { AsyncStorage } from 'react-native';
import { iconsLoaded } from '../utils/themes';
import { startLogin, startMainApp } from '../Nav';

const appInitialized = async () => {
  await iconsLoaded();

  const token = await AsyncStorage.getItem('@instagram/token');

  if (!token) {
    startLogin();
  } else {
    startMainApp();
  }
};

export default appInitialized;
