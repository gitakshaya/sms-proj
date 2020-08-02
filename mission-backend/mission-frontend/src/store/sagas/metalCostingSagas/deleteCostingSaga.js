import createFetchSagaWithLoader from '../createFetchSagaWithLoader';
import { deleteMetalCostingApi } from '../../../api/metalCostingApis';
import { deleteMetalCostingActions } from '../../actions/metalCostingActions';

function* deleteCostingSaga() {
  const doDeleteCostingSaga = createFetchSagaWithLoader(deleteMetalCostingActions, deleteMetalCostingApi);
  yield* doDeleteCostingSaga();
}

export default deleteCostingSaga;
