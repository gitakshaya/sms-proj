import { connect } from 'react-redux';
import MetalCostingPage from './MetalCostingPage';
import { getMetalCostingActions } from '../../../store/actions/metalCostingActions';
import { getCostingSelector } from '../../../store/selectors/metalCostingSelector';

const mapStateToProps = state => ({
  metalCostings: getCostingSelector(state)
});
const mapDispatchToProps = dispatch => ({
  fetchMetalCosting: (payload) => {
    console.log(payload)
    return dispatch(getMetalCostingActions.request(payload))
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MetalCostingPage);
