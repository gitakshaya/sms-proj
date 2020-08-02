import { all } from 'redux-saga/effects';
import getCostingSaga from './getCostingSaga';
import addCostingSaga from './addCostingSaga';
import deleteCostingSaga from './deleteCostingSaga';

export function* metalCostingSaga() {
  yield all([getCostingSaga(), addCostingSaga(), deleteCostingSaga()]);
}