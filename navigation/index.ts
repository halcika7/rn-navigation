import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import { FiltersNavigator } from './stacks';

import { MealsFavTabNavigator } from './tabs';
import colors from '../constants/colors';

const MainNavigator = createDrawerNavigator(
  {
    MealsFavs: {
      screen: MealsFavTabNavigator,
      navigationOptions: {
        drawerLabel: 'Meals',
      },
    },
    Filters: FiltersNavigator,
  },
  {
    contentOptions: {
      activeTintColor: colors.accent,
      labelStyle: {
        fontFamily: 'open-sans-bold',
      },
    },
  }
);

export default createAppContainer(MainNavigator);
