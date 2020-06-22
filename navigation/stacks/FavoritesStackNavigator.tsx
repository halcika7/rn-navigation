import { createStackNavigator } from 'react-navigation-stack';
import FavoritesScreen from '../../screens/FavoritesScreen';
import MealDetailScreen from '../../screens/MealDetailScreen';

import { defaultNavigationOptions } from './defaultNavigationOptions';

export const FavoritesNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions,
  }
);
