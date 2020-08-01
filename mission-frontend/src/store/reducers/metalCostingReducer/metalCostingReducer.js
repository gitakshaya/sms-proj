import { combineReducers } from "redux";
import getMetalCostingReducer from "./getMetalCostingReducer";
export const metalCostingReducer = combineReducers({
  fetch: getMetalCostingReducer
});