import createFetchSaga from '../createFetchSaga';
import { getMetalCostingApi } from '../../../api/metalCostingApis';
import { addMetalCostingActions } from '../../actions/metalCostingActions';

function* addCostingSaga() {
  const doAddCostingSaga = createFetchSaga(addMetalCostingActions, getMetalCostingApi);
  yield* doAddCostingSaga();
}

export default addCostingSaga;
