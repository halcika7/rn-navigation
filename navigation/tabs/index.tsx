import React from 'react';
import { Platform, Text } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import { FavoritesNavigator, MealsNavigator } from '../stacks';

import { Ionicons } from '@expo/vector-icons';

import colors from '../../constants/colors';

const renderIcon = (name: string, color: string | undefined) => {
  return <Ionicons name={name} size={25} color={color} />;
};

const customBarLabel = (text: string) =>
  Platform.OS === 'android' ? (
    <Text style={{ fontFamily: 'open-sans-bold' }}>{text}</Text>
  ) : (
    text
  );

interface TabInfo {
  focused: boolean;
  tintColor?: string | undefined;
  horizontal?: boolean | undefined;
}

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo: TabInfo) =>
        renderIcon('ios-restaurant', tabInfo.tintColor),
      tabBarColor: colors.primary,
      tabBarLabel: customBarLabel('Meals'),
    },
  },
  Favorites: {
    screen: FavoritesNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo: TabInfo) =>
        renderIcon('ios-star', tabInfo.tintColor),
      tabBarColor: colors.accent,
      tabBarLabel: customBarLabel('Favorites'),
    },
  },
};

export const MealsFavTabNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: 'white',
        shifting: true,
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          labelStyle: {
            fontFamily: 'open-sans',
          },
          activeTintColor: colors.accent,
        },
      });
