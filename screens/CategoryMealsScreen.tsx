import React from 'react';
import { NavigationProps } from '../navigation/NavigationProps';

import { CATEGORIES } from '../data/dummy-data';
import { Category } from '../models/category';
import MealList from '../components/MealList';

import { useSelector } from 'react-redux';
import { AppState } from '../store/reducers';
import { View, StyleSheet } from 'react-native';
import DefaultText from '../components/DefaultText';

const getSelectedCategory = (navigation: NavigationProps): Category => {
  const id = navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(cat => cat.id === id) as Category;

  return selectedCategory;
};

interface Props {
  navigation: NavigationProps;
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const CategorieyMealsScreen = ({ navigation }: Props) => {
  const { id } = getSelectedCategory(navigation);
  const availableMeals = useSelector(
    (state: AppState) => state.meals.filteredMeals
  );
  const filtered = availableMeals.filter(meal => meal.categoryIds.includes(id));

  if (filtered.length === 0 || !filtered) {
    return (
      <View style={styles.content}>
        <DefaultText>No meals found, maybe check your filters?</DefaultText>
      </View>
    );
  }

  return <MealList data={filtered} navigation={navigation} />;
};

CategorieyMealsScreen.navigationOptions = ({
  navigation,
}: {
  navigation: NavigationProps;
}) => {
  const { title } = getSelectedCategory(navigation);

  return {
    headerTitle: title,
  };
};

export default CategorieyMealsScreen;
