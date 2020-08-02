import { connect } from 'react-redux';
import { spinnerSelector } from '../../store/selectors/commonSelector';
import { Spinner } from './Spinner';

const mapStateToProps = (state) => ({
  showSpinner: spinnerSelector(state)
})

export default connect(
  mapStateToProps,
)(Spinner);