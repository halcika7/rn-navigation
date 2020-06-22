import React, { FC, useEffect, useCallback } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { NavigationProps } from '../navigation/NavigationProps';

import { useSelector } from 'react-redux';
import { AppState } from '../store/reducers';

import { Meal } from '../models/meal';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { ScrollView } from 'react-native-gesture-handler';
import DefaultText from '../components/DefaultText';
import { useThunkDispatch } from '../store/AppThunkDispatch';
import { toggleFavorite } from '../store/actions/meals';

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'center',
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
  },
});

interface Props {
  navigation: NavigationProps;
}

const ListItem: FC<{}> = ({ children }) => (
  <View style={styles.listItem}>
    <DefaultText>{children}</DefaultText>
  </View>
);

const MealDetailScreen = ({ navigation }: Props) => {
  const id = navigation.getParam('mealId');
  const meals = useSelector((state: AppState) => state.meals.meals);
  const isCurrentFav = useSelector((state: AppState) =>
    state.meals.favoriteMeals.some(meal => meal.id === id)
  );
  const selectedMeal = meals.find(meal => meal.id === id) as Meal;
  const dispatch = useThunkDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(id));
  }, [dispatch, id]);

  useEffect(() => {
    navigation.setParams({ toggleFav: toggleFavoriteHandler });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toggleFavoriteHandler]);

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <DefaultText>{selectedMeal.durration}m</DefaultText>
        <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map(ingredient => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map(step => (
        <ListItem key={step}>{step}</ListItem>
      ))}
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = ({
  navigation,
}: {
  navigation: NavigationProps;
}) => {
  const title = navigation.getParam('mealTitle');
  const toggleFavoriteFn = navigation.getParam('toggleFav');
  const isFav = navigation.getParam('isFav');

  return {
    headerTitle: title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName={isFav ? 'ios-star' : 'ios-star-outline'}
          onPress={toggleFavoriteFn}
        />
      </HeaderButtons>
    ),
  };
};

export default MealDetailScreen;
