import { createStore } from 'redux';
import userReducer from './users/user.reducer';
import { goNext, goPrev } from './users/user.actions';

const store = createStore(
  userReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

// store.subscribe(() => {
//   console.log(store.getState());
// })


// store.dispatch(goPrev())
// store.dispatch(goPrev())
// store.dispatch(goPrev())
// store.dispatch(goPrev())
// store.dispatch(goNext())