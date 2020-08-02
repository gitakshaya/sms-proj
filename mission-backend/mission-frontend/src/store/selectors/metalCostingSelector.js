import { createSelector } from 'reselect';
import isEmpty from 'lodash/isEmpty';
import { getFormatedDate } from '../../util/date';

const metalCostingSelector = state => state.metalCosting;
const deleteMetalCostingSelector = state => state.metalCosting;
const getCostingSelector = createSelector(metalCostingSelector, costing => {
  let result = [];
  if (!isEmpty(costing.fetch.apiResponse)) {
    result = costing.fetch.apiResponse.map(record => ({
      ...record,
      startDate: getFormatedDate(record.startDate),
      endDate: getFormatedDate(record.endDate)
    }))
  }
  return result;
});
export { metalCostingSelector, getCostingSelector, deleteMetalCostingSelector };
