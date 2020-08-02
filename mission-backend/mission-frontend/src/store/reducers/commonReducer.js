import { handleActions } from 'redux-actions';
import { showSpinner, hideSpinner } from '../actions/commonActions';

const initialState = {
  spinner: false,
  message: ''
};
const commonReducer = handleActions(
  {
    [showSpinner](state, { payload }) {
      return {
        ...state,
        spinner: true
      };
    },
    [hideSpinner](state, { payload }) {
      return {
        ...state,
        spinner: false
      };
    }
  },
  initialState
);

export default commonReducer;
