import { createStackNavigator } from 'react-navigation-stack';
import FiltersScreen from '../../screens/FiltersScreen';

import { defaultNavigationOptions } from './defaultNavigationOptions';

export const FiltersNavigator = createStackNavigator(
  {
    Filters: FiltersScreen,
  },
  {
    defaultNavigationOptions,
  }
);
