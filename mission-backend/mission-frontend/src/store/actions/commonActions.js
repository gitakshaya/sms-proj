import { createActions } from 'redux-actions';

const { showSpinner, hideSpinner } = createActions({}, 'SHOW_SPINNER', 'HIDE_SPINNER');

export { showSpinner, hideSpinner };
