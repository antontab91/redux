import { connect } from 'react-redux';
import { selectedOptionsSelectors } from './options.selectors';
import Options from './Options';
import { toggleOptions } from './options.actions';

const mapState = state => {
  return {
    options: selectedOptionsSelectors(state),
  }
}

const mapDispatch = {
  moveOption: toggleOptions,
}

const connector = connect(mapState, mapDispatch);
const SelectedOptions = connector(Options)


export default SelectedOptions;

