import { Navigation } from 'react-native-navigation';
import { WithProvider } from '../components/WithProvider';

import FeedsScreen from './Feeds';
import SearchScreen from './Search';
import LoginScreen from './Login';

export const registerScreen = () => {
  Navigation.registerComponent('instagram.FeedsScreen', () =>
    WithProvider(FeedsScreen),
  );
  Navigation.registerComponent('instagram.SearchScreen', () =>
    WithProvider(SearchScreen),
  );
  Navigation.registerComponent('instagram.LoginScreen', () =>
    WithProvider(LoginScreen),
  );
};
