import React from 'react';
import { FlatList } from 'react-native';
import { NavigationProps } from '../navigation/NavigationProps';

import CategoryGridTile from '../components/CategoryGridTile';

import { CATEGORIES } from '../data/dummy-data';
import { Category } from '../models/category';
import { headerButton } from '../navigation/headerButton';
import { DrawerActions } from 'react-navigation-drawer';

interface Props {
  navigation: NavigationProps;
}

interface GridProps extends Props {
  item: Category;
}

const renderGridItem = <T extends GridProps>({ navigation, item }: T) => (
  <CategoryGridTile
    title={item.title}
    color={item.color}
    onSelect={() => {
      navigation.navigate({
        routeName: 'CategoryMeals',
        params: {
          categoryId: item.id,
        },
      });
    }}
  />
);

const CategoriesScreen = ({ navigation }: Props) => {
  return (
    <FlatList
      numColumns={2}
      data={CATEGORIES}
      renderItem={({ item }) => renderGridItem({ item, navigation })}
    />
  );
};

CategoriesScreen.navigationOptions = ({
  navigation,
}: {
  navigation: NavigationProps;
}) => {
  return {
    headerTitle: 'Meal Categories',
    headerLeft: () =>
      headerButton({
        onPress: () => navigation.dispatch(DrawerActions.toggleDrawer()),
      }),
  };
};

export default CategoriesScreen;
