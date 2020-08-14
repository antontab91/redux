// import store from './store';
// import { setLanguage } from './language.actions';


// store.subscribe(() => {
//   console.log(store.getState())
// })


// store.dispatch(setLanguage('ru'));
// store.dispatch(setLanguage('ru'));
// store.dispatch(setLanguage('en'));

// console.log(store.getState());

const ADD_PRODUCT = 'TRASH/ADD_PRODUCT';
const REMOVE_PRODUCT = 'TRASH/REMOVE_PRODUCT';


const initialTrash = {
  trashProducts: [],
}

const cartReducer = (state = initialTrash, action) => {
  // switch (action.type) {

  // }
}