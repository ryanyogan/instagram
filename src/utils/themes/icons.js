import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Platform, PixelRatio } from 'react-native';

const NAV_ICON_SIZE =
  __DEV__ === false && Platform.OS === 'android'
    ? PixelRatio.getPixelSizeForLayoutSize(25)
    : 25;

const replaceSuffixPattern = /--(active|big|small|very-big)/g;

const icons = {
  home: [NAV_ICON_SIZE, Entypo],
  'ios-search': [NAV_ICON_SIZE, Ionicons],
};

// Creating a hash mapping for our RTC Nav bridge to iOS 11 on iPhone X
const iconsMap = {};

const iconsLoaded = () =>
  new Promise(resolve => {
    new Promise.all( // eslint-disable-line
      Object.keys(icons).map(iconName => {
        const Provider = icons[iconName][1];
        return Provider.getImageSource(
          iconName.replace(replaceSuffixPattern, ''),
          icons[iconName][0],
        );
      }),
    )
      .then(sources => {
        Object.keys(icons).forEach(
          (iconName, i) => (iconsMap[iconName] = sources[i]),
        );
        resolve(true);
      })
      .catch(error => reject(error));
  });

export { iconsMap, iconsLoaded };
