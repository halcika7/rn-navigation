import { MealActionTypes, MealsActions, Filters } from '../types/meals';

export const toggleFavorite = (id: string): MealActionTypes => ({
  type: MealsActions.TOGGLE_FAVORITE,
  payload: { id },
});

export const setFilters = (filters: Filters): MealActionTypes => ({
  type: MealsActions.SET_FILTERS,
  payload: { filters },
});
