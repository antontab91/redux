import { connect } from 'react-redux';
import { availableOptionsSelectors } from './options.selectors';
import Options from './Options';
import { toggleOptions } from './options.actions';

const mapState = state => {
  return {
    options: availableOptionsSelectors(state),
  }
}

const mapDispatch = {
  moveOption: toggleOptions,
}


const connector = connect(mapState, mapDispatch);
const AvailableOptions = connector(Options)

export default AvailableOptions;

