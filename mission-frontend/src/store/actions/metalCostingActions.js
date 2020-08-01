import createFetchActions from './createFetchActions';

const getMetalCostingActions = createFetchActions('GET_METAL_COSTING');
const addMetalCostingActions = createFetchActions('ADD_METAL_COSTING');

export { getMetalCostingActions, addMetalCostingActions };
