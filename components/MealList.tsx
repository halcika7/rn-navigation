import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { NavigationProps } from '../navigation/NavigationProps';
import { Meal } from '../models/meal';

import MealItem from './MealItem';
import { useSelector } from 'react-redux';
import { AppState } from '../store/reducers';

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

interface Props {
  navigation: NavigationProps;
  data: Meal[];
}

const renderMealItem = (
  item: Meal,
  navigation: NavigationProps,
  favMeals: Meal[]
) => {
  const isCurrentFav = favMeals.some(meal => meal.id === item.id)
  return (
    <MealItem
      item={item}
      onSelect={() => {
        navigation.navigate({
          routeName: 'MealDetail',
          params: {
            mealId: item.id,
            mealTitle: item.title,
            isFav: isCurrentFav,
          },
        });
      }}
    />
  );
};

const MealList = ({ data, navigation }: Props) => {
  const favoriteMeals = useSelector(
    (state: AppState) => state.meals.favoriteMeals
  );
  return (
    <View style={styles.list}>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return renderMealItem(item, navigation, favoriteMeals);
        }}
        style={{ width: '100%' }}
      />
    </View>
  );
};

export default MealList;
