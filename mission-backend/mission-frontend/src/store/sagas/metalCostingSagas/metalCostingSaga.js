import { all } from 'redux-saga/effects';
import getCostingSaga from './getCostingSaga';
import addCostingSaga from './addCostingSaga';

export function* metalCostingSaga() {
  yield all([getCostingSaga(), addCostingSaga()]);
}