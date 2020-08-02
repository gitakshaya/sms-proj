import { connect } from 'react-redux';
import MetalCostingPage from './MetalCostingPage';
import { getMetalCostingActions, deleteMetalCostingActions } from '../../../store/actions/metalCostingActions';
import { getCostingSelector } from '../../../store/selectors/metalCostingSelector';

const mapStateToProps = state => ({
  metalCostings: getCostingSelector(state)
});
const mapDispatchToProps = dispatch => ({
  fetchMetalCosting: (payload) => dispatch(getMetalCostingActions.request(payload)),
  deleteMetalCosting: (payload) => dispatch(deleteMetalCostingActions.request(payload)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MetalCostingPage);
