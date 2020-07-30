import store from './store'
import { addUser, deleteUser } from './users.actions'


store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(addUser({ id: 1245, name: 'Mahony' }));
store.dispatch(addUser({ id: 454, name: 'Tony' }));
store.dispatch(deleteUser(454));
