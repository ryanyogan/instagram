import { Navigation } from 'react-native-navigation';

import { registerScreen } from './screens';
import { iconsMap } from './utils/themes';
import appInitialized from './utils/appInitialized';

registerScreen();

export const startLogin = () =>
  Navigation.startSingleScreenApp({
    screen: {
      screen: 'instagram.LoginScreen',
      navigatorStyle: {
        navBarHidden: true,
      },
    },
  });

export const startMainApp = () =>
  Navigation.startTabBasedApp({
    tabs: [
      {
        screen: 'instagram.FeedsScreen',
        title: 'Doggy Duty',
        icon: iconsMap.home,
      },
      {
        screen: 'instagram.SearchScreen',
        title: 'Search',
        icon: iconsMap['ios-search'],
      },
    ],
  });

export const init = () => appInitialized();
