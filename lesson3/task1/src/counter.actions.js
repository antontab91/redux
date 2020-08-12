import { createStore } from 'redux';

const INCREMENT = 'COUNTER/INCREMENT';
const DECREMENT = 'COUNTER/DECREMENT';
const RESET = 'COUNTER/RESET';

const increment = () => {
    return {
        type: INCREMENT,
    }
}

const decrement = () => {
    return {
        type: DECREMENT,
    }
}

const reset = () => {
    return {
        type: RESET,
    }
}

const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case INCREMENT:
            return (state + 1)


        case DECREMENT:
            return (state - 1);


        case RESET:
            return (state = 0);


        default:
            return state

    }
}

const store = createStore(counterReducer);

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(reset());

console.log(store.getState());



