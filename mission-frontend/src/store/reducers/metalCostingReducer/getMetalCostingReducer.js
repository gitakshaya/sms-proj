import { handleActions } from 'redux-actions';
import { notification } from 'antd';
import intl from 'react-intl-universal';
import { getMetalCostingActions } from '../../actions/metalCostingActions';

const initialState = {
  apiResponse: {}
};
const getMetalCostingReducer = handleActions(
  {
    [getMetalCostingActions.triggered](state) {
      return initialState;
    },

    [getMetalCostingActions.succeeded](state, { payload }) {
      return {
        apiResponse: [
          ...payload]
      };
    },

    [getMetalCostingActions.failed](state, { payload }) {
      notification.error({ message: intl.get(`API_ERROR_MSG.PRODUCT_CONFIG.${payload.message}`) });
      return { ...state, error: payload.error_description };
    }
  },
  initialState
);

export default getMetalCostingReducer;
