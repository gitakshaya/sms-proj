import { handleActions } from 'redux-actions';
import { notification } from 'antd';
import { deleteMetalCostingActions } from '../../actions/metalCostingActions';

const initialState = {
  apiResponse: {}
};
const deleteMetalCostingReducer = handleActions(
  {
    [deleteMetalCostingActions.triggered](state) {
      return initialState;
    },

    [deleteMetalCostingActions.succeeded](state, { payload }) {
      notification.success({ message: "Deleted Successfully" });
      return {
        apiResponse: payload
      };
    },

    [deleteMetalCostingActions.failed](state, { payload }) {
      notification.error({ message: "delete data error" });
      return { ...state, error: payload.error_description };
    }
  },
  initialState
);

export default deleteMetalCostingReducer;
