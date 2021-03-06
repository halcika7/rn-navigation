import { applyMiddleware, compose, createStore, Middleware } from 'redux';
import thunk from 'redux-thunk';

// reducer
import { rootReducer } from './reducers';

const middlewares: Middleware[] = [thunk];

const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middlewares), compose)
);

export default store;
