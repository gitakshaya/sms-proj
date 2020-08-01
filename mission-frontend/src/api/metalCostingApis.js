import { get, post } from '../util/request';

async function saveMetalCostingApi(apiOptions) {
  const url = `/prodconfig/branding/save`;
  return post(url)(apiOptions).then(({ body } = {}) => ({ ...body }));
}
async function getMetalCostingApi(apiOptions) {
  const url = `/costing/`;
  return get(url)(apiOptions).then(({ body } = {}) => ([...body]));
}

export { getMetalCostingApi, saveMetalCostingApi };
