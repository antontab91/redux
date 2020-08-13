export const INCREMENT = 'COUNTER/INCREMENT';
export const DECREMENT = 'COUNTER/DECREMENT';
export const RESET = 'COUNTER/RESET';

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

