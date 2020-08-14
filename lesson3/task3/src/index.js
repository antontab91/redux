import store from './store';
import { setLanguage } from './language.actions';


store.subscribe(() => {
  console.log(store.getState())
})


store.dispatch(setLanguage('ru'));
store.dispatch(setLanguage('ru'));
store.dispatch(setLanguage('en'));

console.log(store.getState());

