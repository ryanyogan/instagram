import { Navigation } from 'react-native-navigation';

import { registerScreen } from './screens';

registerScreen();

export default class Nav {
  constructor() {
    this._initApp();
  }

  _initApp() {
    Navigation.startTabBasedApp({
      tabs: [
        {
          label: `Feeds`,
          screen: 'instagram.FeedsScreen',
          title: 'Instagram'
        },
        {
          label: `Search`,
          screen: 'instagram.SearchScreen',
          title: 'Search'
        }
      ]
    });
  }
}
