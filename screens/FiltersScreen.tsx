import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationProps } from '../navigation/NavigationProps';
import { headerButton } from '../navigation/headerButton';
import { DrawerActions } from 'react-navigation-drawer';
import FilterSwitch from '../components/FilterSwitch';
import { useThunkDispatch } from '../store/AppThunkDispatch';
import { setFilters } from '../store/actions/meals';
import { Filters } from '../store/types/meals';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    margin: 20,
    textAlign: 'center',
  },
});

interface Props {
  navigation: NavigationProps;
}

const FiltersScreen = ({ navigation }: Props) => {
  const [isGlutenFree, setIsGlutenFree] = useState<boolean>(false);
  const [isLactoseFree, setIsLactoseFree] = useState<boolean>(false);
  const [isVegan, setIsVegan] = useState<boolean>(false);
  const [isVegetarian, setIsVegetarian] = useState<boolean>(false);

  const dispatch = useThunkDispatch();

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      isGlutenFree,
      isLactoseFree,
      isVegan,
      isVegetarian,
    } as Filters;

    dispatch(setFilters(appliedFilters));
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian, dispatch]);

  useEffect(() => {
    navigation.setParams({ save: saveFilters });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FilterSwitch
        label="Gluten-free"
        value={isGlutenFree}
        setValue={setIsGlutenFree}
      />
      <FilterSwitch
        label="Lactose-free"
        value={isLactoseFree}
        setValue={setIsLactoseFree}
      />
      <FilterSwitch label="Vegan" value={isVegan} setValue={setIsVegan} />
      <FilterSwitch
        label="Vegetarian"
        value={isVegetarian}
        setValue={setIsVegetarian}
      />
    </View>
  );
};

FiltersScreen.navigationOptions = ({
  navigation,
}: {
  navigation: NavigationProps;
}) => {
  return {
    headerTitle: 'Filter Meals',
    headerLeft: () =>
      headerButton({
        onPress: () => navigation.dispatch(DrawerActions.toggleDrawer()),
      }),
    headerRight: () =>
      headerButton({
        title: 'Save',
        iconName: 'ios-save',
        onPress: navigation.getParam('save'),
      }),
  };
};

export default FiltersScreen;
