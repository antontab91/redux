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

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default counterReducer;