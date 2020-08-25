import { createStore, combineReducers } from 'redux';
import counterReducer from './counter/counter.reducer';

const storeCombiner = combineReducers({
  counter: counterReducer,
})

const store = createStore(
  storeCombiner,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

export default store;
