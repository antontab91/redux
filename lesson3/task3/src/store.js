import { createStore } from 'redux';
import languageReducer from './language.reducer';
import cartReducer from './cart.reducer';




// const store = createStore(languageReducer);
const store = createStore(cartReducer);

export default store;