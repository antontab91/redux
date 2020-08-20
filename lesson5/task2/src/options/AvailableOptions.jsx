import { connect } from 'react-redux';
import { availableOptionsSelectors } from './options.selectors';
import Options from './Options';

const mapState = state => {
  return {
    options: availableOptionsSelectors(state),
  }
}


const connector = connect(mapState);
const AvailableOptions = connector(Options)

export default AvailableOptions;

