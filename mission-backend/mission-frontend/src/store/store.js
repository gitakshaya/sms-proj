import { combineReducers, applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware, routerReducer } from '../router/router';
import { sagaMiddleware } from './sagas/saga';

import appConfig from '../appConfig';
import { identity } from 'lodash';
import { metalCostingReducer } from './reducers/metalCostingReducer/metalCostingReducer';
import commonReducer from './reducers/commonReducer';

const configureStore = (initialState = {}) => {
  const rootReducer = combineReducers({
    router: routerReducer,
    metalCosting: metalCostingReducer,
    common: commonReducer
  });

  // Create the store
  const compose = appConfig.enableReduxDevTools ? composeWithDevTools : identity;

  return createStore(rootReducer, initialState, compose(applyMiddleware(sagaMiddleware, routerMiddleware)));
};

export { configureStore };
