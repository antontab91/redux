import store from './store';
import { setLanguage } from './language.actions';
import { addProduct, removeProduct } from './cart.actions';
import { setUser, removeUser } from './user.actions';












store.subscribe(() => {
  return console.log(store.getState())
})

store.dispatch(setLanguage('ru'));
store.dispatch(setLanguage('ru'));
store.dispatch(setLanguage('en'));
store.dispatch(addProduct({ id: 76, name: 'milk' }))
store.dispatch(addProduct({ id: 55, name: 'meat' }))
store.dispatch(removeProduct(55))
store.dispatch(removeProduct(76))
store.dispatch(removeProduct(44))
store.dispatch(setUser({ name: 'bob' }))
store.dispatch(removeUser())