import { Navigation } from 'react-native-navigation';

import FeedsScreen from './Feeds';
import SearchScreen from './Search';

export const registerScreen = () => {
  Navigation.registerComponent('instagram.FeedsScreen', () => FeedsScreen);
  Navigation.registerComponent('instagram.SearchScreen', () => SearchScreen);
};
