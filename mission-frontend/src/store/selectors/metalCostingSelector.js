import { createSelector } from 'reselect';

const metalCostingSelector = state => state.metalCosting;

const getCostingSelector = createSelector(metalCostingSelector, costing => costing.fetch.apiResponse);

export { metalCostingSelector, getCostingSelector };
