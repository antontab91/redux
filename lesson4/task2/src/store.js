import { createStore, combineReducers } from 'redux';
import counterReducer from './counter/counter.reducer'
import { increment, decrement, reset } from './counter/counter.action';
import usersReducer from './users/users.reducer';
import { addUser, removeUser, updateUser } from './users/users.action';


const appReducer = combineReducers({
  counter: counterReducer,
  users: usersReducer,
})

const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

// store.subscribe(() => {
//   console.log(store.getState());
// })

// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(decrement());
// store.dispatch(reset());
// store.dispatch(addUser({ id: 54, name: 'Bob' }))
// store.dispatch(addUser({ id: 45, name: 'Mel' }))
// store.dispatch(addUser({ id: 21, name: 'Rob' }))
// store.dispatch(addUser({ id: 89, name: 'Hop' }))
// store.dispatch(removeUser(89))
// store.dispatch(updateUser(21, { male: 'famile' }))