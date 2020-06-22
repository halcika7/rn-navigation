import { createStackNavigator } from 'react-navigation-stack';

import CategoriesScreen from '../../screens/CategoriesScreen';
import CategorieyMealsScreen from '../../screens/CategoryMealsScreen';
import MealDetailScreen from '../../screens/MealDetailScreen';

import { defaultNavigationOptions } from './defaultNavigationOptions';

export const MealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeals: {
      screen: CategorieyMealsScreen,
    },
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions,
  }
);
