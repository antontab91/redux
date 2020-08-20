import { connect } from 'react-redux';
import { optionsSelectors } from './options.selectors';
import Options from './Options';

const mapState = state => {
  return {
    options: optionsSelectors(state),
  }
}


const connector = connect(mapState);
const AvailableOptions = connector(Options)

export default AvailableOptions;

