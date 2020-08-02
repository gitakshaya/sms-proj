import { combineReducers } from "redux";
import getMetalCostingReducer from "./getMetalCostingReducer";
import deleteMetalCostingReducer from "./deleteMetalCostingReducer";
export const metalCostingReducer = combineReducers({
  fetch: getMetalCostingReducer,
  delete: deleteMetalCostingReducer
});