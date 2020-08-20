import { connect } from 'react-redux';
import { selectedOptionsSelectors } from './options.selectors';
import Options from './Options';


const mapState = state => {
  return {
    options: selectedOptionsSelectors(state),
  }
}

const connector = connect(mapState);
const SelectedOptions = connector(Options)


export default SelectedOptions;

