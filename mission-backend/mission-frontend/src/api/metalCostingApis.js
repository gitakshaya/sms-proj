import { get, post, del } from '../util/request';

async function saveMetalCostingApi(apiOptions) {
  const url = `/costing/`;
  return post(url)(apiOptions).then(({ body } = {}) => ({ ...body }));
}
async function getMetalCostingApi(apiOptions) {
  const url = `/costing/`;
  return get(url)(apiOptions).then(({ body } = {}) => ([...body]));
}

async function deleteMetalCostingApi(apiOptions) {
  const url = `/costing/${apiOptions}`;
  return del(url)(apiOptions).then(({ body } = {}) => ({ ...body }));
}

export { getMetalCostingApi, saveMetalCostingApi, deleteMetalCostingApi };
