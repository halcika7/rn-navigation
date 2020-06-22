export enum MealsActions {
  TOGGLE_FAVORITE = 'TOGGLE_FAVORITE',
  SET_FILTERS = 'SET_FILTERS',
}

export interface Filters {
  isGlutenFree: boolean;
  isLactoseFree: boolean;
  isVegan: boolean;
  isVegetarian: boolean;
}

interface ToggleFavorite {
  type: typeof MealsActions.TOGGLE_FAVORITE;
  payload: { id: string };
}

interface SetFilters {
  type: typeof MealsActions.SET_FILTERS;
  payload: { filters: Filters };
}

export type MealActionTypes = ToggleFavorite | SetFilters;
