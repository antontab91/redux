import './index.scss';
import store, { increment, decrement, reset } from './store';


const resultElem = document.querySelector('.counter__result');
const incrementBtn = document.querySelector('[data-action="increment"]');
const resetBtn = document.querySelector('[data-action="reset"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

const onIncrement = () => {
  store.dispatch(increment());
}
const onIDecrement = () => {
  store.dispatch(decrement());
}
const onReset = () => {
  store.dispatch(reset());
}

incrementBtn.addEventListener('click', onIncrement);
decrementBtn.addEventListener('click', onIDecrement);
resetBtn.addEventListener('click', onReset);

store.subscribe(() => {
  // console.log(store.getState())
  const state = store.getState();
  const currentValue = state.history.reduce((acc, el) => {
    return acc + Number(el);
  }, 0);
  const historyString = state.history.join('');
  resultElem.textContent = historyString.length === 0 ? '' : `${historyString} = ${currentValue}`;
})