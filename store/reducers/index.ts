import { combineReducers, Reducer } from 'redux';
import { MealsReducer as meals, MealsState } from './meals';

export interface AppState {
  meals: MealsState;
}

export const rootReducer: Reducer<AppState> = combineReducers<AppState>({
  meals,
});
