import { takeLatest, call, put, all } from 'redux-saga/effects';
import { showSpinner, hideSpinner } from '../actions/commonActions';

function createFetchSagaWithLoader(fetchActions, fetchApi) {
  function* fetchRequestedSaga({ payload }) {
    yield all([put(fetchActions.triggered(payload)), put(showSpinner(payload))]);
    try {
      const response = yield call(fetchApi, payload);
      yield all([put(fetchActions.succeeded(response)), put(hideSpinner(payload))]);
    } catch (e) {
      yield all([put(fetchActions.failed(e)), put(hideSpinner(payload))]);
    }
  }

  function* fetchSaga() {
    yield takeLatest(fetchActions.request, fetchRequestedSaga);
  }

  return fetchSaga;
}

export default createFetchSagaWithLoader;
