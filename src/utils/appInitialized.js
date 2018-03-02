import { AsyncStorage } from 'react-native';
import { iconsLoaded } from '../utils/themes';
import { authToken } from '../utils/constants';
import { startLogin, startMainApp } from '../Nav';

const appInitialized = async () => {
  await iconsLoaded();

  const token = await AsyncStorage.getItem(authToken);
  // const token = await AsyncStorage.removeItem(authToken);

  if (!token) {
    startLogin();
  } else {
    startMainApp();
  }
};

export default appInitialized;
