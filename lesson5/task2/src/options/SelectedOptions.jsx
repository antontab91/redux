import { connect } from 'react-redux';
import { optionsSelectors } from './options.selectors';
import Options from './Options';


const mapState = state => {
  return {
    options: optionsSelectors(state),
  }
}

const connector = connect(mapState);
const SelectedOptions = connector(Options)


export default SelectedOptions;

