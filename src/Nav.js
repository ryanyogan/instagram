import { Navigation } from 'react-native-navigation';

import { registerScreen } from './screens';
import { iconsLoaded, iconsMap } from './utils/themes';

registerScreen();

export default class Nav {
  constructor() {
    iconsLoaded.then(() => this._initApp());
  }

  _initApp() {
    Navigation.startTabBasedApp({
      tabs: [
        {
          label: `Feeds`,
          screen: 'instagram.FeedsScreen',
          title: 'Instagram',
          icon: iconsMap.home
        },
        {
          label: `Search`,
          screen: 'instagram.SearchScreen',
          title: 'Search',
          icon: iconsMap['ios-search']
        }
      ]
    });
  }
}
