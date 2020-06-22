import React from 'react';
import MealList from '../components/MealList';

import { useSelector } from 'react-redux';
import { AppState } from '../store/reducers';

import { NavigationProps } from '../navigation/NavigationProps';
import { headerButton } from '../navigation/headerButton';
import { DrawerActions } from 'react-navigation-drawer';
import { View, StyleSheet } from 'react-native';
import DefaultText from '../components/DefaultText';

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

const FavoritesScreen = ({ navigation }: Props) => {
  const meals = useSelector((state: AppState) => state.meals.favoriteMeals);

  if (meals.length === 0 || !meals) {
    return (
      <View style={styles.content}>
        <DefaultText>No favorite meals found. Start adding some!</DefaultText>
      </View>
    );
  }

  return <MealList data={meals} navigation={navigation} />;
};

FavoritesScreen.navigationOptions = ({
  navigation,
}: {
  navigation: NavigationProps;
}) => {
  return {
    headerTitle: 'Your Favorites',
    headerLeft: () =>
      headerButton({
        onPress: () => navigation.dispatch(DrawerActions.toggleDrawer()),
      }),
  };
};

export default FavoritesScreen;
