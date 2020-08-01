import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { metalCostingSaga } from './metalCostingSagas/metalCostingSaga';

const sagaMiddleware = createSagaMiddleware();

const configureSaga = () => {
  function* rootSaga() {
    yield all([metalCostingSaga()]);
  }

  sagaMiddleware.run(rootSaga);
};

export { sagaMiddleware, configureSaga };
