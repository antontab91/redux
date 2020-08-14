import store from './store';
// import { setLanguage } from './language.actions';
import { addProduct, removeProduct } from './cart.actions';



// store.subscribe(() => {
//   console.log(store.getState())
// })


// store.dispatch(setLanguage('ru'));
// store.dispatch(setLanguage('ru'));
// store.dispatch(setLanguage('en'));

// console.log(store.getState());



// const store = createStore(cartReducer);

store.subscribe(() => {
  console.log(store.getState())
})


store.dispatch(addProduct({ id: 76, name: 'milk' }))
store.dispatch(addProduct({ id: 55, name: 'meat' }))
// store.dispatch(removeProduct(55))
// store.dispatch(removeProduct(76))
// store.dispatch(removeProduct(44))

