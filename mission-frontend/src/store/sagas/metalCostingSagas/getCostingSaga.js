import createFetchSaga from '../createFetchSaga';
import { getMetalCostingApi } from '../../../api/metalCostingApis';
import { getMetalCostingActions } from '../../actions/metalCostingActions';

function* getCostingSaga() {
  const doGetCostingSaga = createFetchSaga(getMetalCostingActions, getMetalCostingApi);
  yield* doGetCostingSaga();
}

export default getCostingSaga;
