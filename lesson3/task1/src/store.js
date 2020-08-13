import { createStore } from 'redux';


const store = createStore(counterReducer);

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(reset())

console.log(store.getState())