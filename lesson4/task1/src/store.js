import { createStore } from 'redux';
import { counterReducer } from './counter.reducer';
import { increment, decrement, reset } from './counter.actions';

const store = createStore(counterReducer);

store.subscribe(() => {
  console.log(store.getState());
})

store.dispatch(increment())
store.dispatch(increment())
store.dispatch(decrement())
store.dispatch(reset())