import { createStore, combineReducers } from 'redux';
import userReducer from './users/users.reducer';

const storeCombiner = combineReducers({
  users: userReducer,
})

const store = createStore(
  storeCombiner,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;