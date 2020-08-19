import { createStore } from 'redux';
import { goNext, goPrev } from './users/user.actions';
import usersReducer from './users/users.reducer';

export const store = createStore(
  usersReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(() => {
  console.log(store.getState());
})

store.dispatch(goPrev());
store.dispatch(goNext());