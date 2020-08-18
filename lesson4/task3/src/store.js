import { createStore } from 'redux';
import userReducer from './users/user.reducer';
import { goNext, goPrev } from './users/user.actions';

const store = createStore(userReducer);

store.subscribe(() => {
  console.log(store.getState());
})


store.dispatch(goPrev())
store.dispatch(goPrev())
store.dispatch(goPrev())
store.dispatch(goPrev())
store.dispatch(goNext())