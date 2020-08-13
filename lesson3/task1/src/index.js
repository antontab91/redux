import { createStore } from 'redux';





const store = createStore(userReducer);

store.dispatch(addUser({ id: 76, name: 'Sarah' }))
store.dispatch(addUser({ id: 72, name: 'Bublik' }))
store.dispatch(addUser({ id: 71, name: 'Suchka' }))
store.dispatch(deleteUser(76))
store.dispatch(updateUser(71, { id: 72, name: 'Bublik' }))
console.log(store.getState());



