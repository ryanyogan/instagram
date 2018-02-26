import { Navigation } from 'react-native-navigation';
import { WithProvider } from '../components/WithProvider';

import FeedsScreen from './Feeds';
import SearchScreen from './Search';

export const registerScreen = () => {
  Navigation.registerComponent('instagram.FeedsScreen', () =>
    WithProvider(FeedsScreen),
  );
  Navigation.registerComponent('instagram.SearchScreen', () =>
    WithProvider(SearchScreen),
  );
};
