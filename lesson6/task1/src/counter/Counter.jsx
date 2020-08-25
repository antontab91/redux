import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement, reset } from './counter.actions';

const Counter = ({ count }) => {
  return (
    <div className="counter">
      <button className="counter__button">
        -
      </button>
      <span className="counter__value">
        {count}
      </span>
      <button className="counter__button">
        +
      </button>
    </div>
  )
}

const mapState = (state) => {
  return {
    count: state.counter,
  }
}

// const mapDispatch = {
//   increment,
//   decrement,
//   reset,
// }

const connector = connect(mapState)
const counterConnector = connector(Counter)

export default counterConnector;