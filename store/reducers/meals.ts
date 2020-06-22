import { MEALS } from '../../data/dummy-data';
import { Meal } from '../../models/meal';
import { MealActionTypes, MealsActions } from '../types/meals';

export interface MealsState {
  meals: Meal[];
  filteredMeals: Meal[];
  favoriteMeals: Meal[];
}

const INITIAL_STATE: MealsState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

export const MealsReducer = (
  state = INITIAL_STATE,
  action: MealActionTypes
) => {
  switch (action.type) {
    case MealsActions.TOGGLE_FAVORITE: {
      const index = state.favoriteMeals.findIndex(
        meal => meal.id === action.payload.id
      );

      if (index >= 0) {
        return {
          ...state,
          favoriteMeals: [...state.favoriteMeals.filter((_, i) => i !== index)],
        };
      }

      const myMeal = state.meals.find(
        meal => meal.id === action.payload.id
      ) as Meal;

      return {
        ...state,
        favoriteMeals: [...state.favoriteMeals.concat(myMeal)],
      };
    }
    case MealsActions.SET_FILTERS: {
      const {
        isGlutenFree,
        isLactoseFree,
        isVegan,
        isVegetarian,
      } = action.payload.filters;

      const filteredMeals = state.meals.filter(
        meal =>
          meal.isGlutenFree === isGlutenFree &&
          meal.isLactoseFree === isLactoseFree &&
          meal.isVegan === isVegan &&
          meal.isVegetarian === isVegetarian
      );

      return { ...state, filteredMeals: [...filteredMeals] };
    }
    default:
      return state;
  }
};
