import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement, reset } from './counter.actions';

const Counter = ({ count, increment, decrement, reset }) => {
  return (
    <div className="counter">
      <button onClick={() => decrement()} className="counter__button">
        -
      </button>
      <span onClick={() => reset()} className="counter__value">
        {count}
      </span>
      <button onClick={() => increment()} className="counter__button">
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

const mapDispatch = {
  increment,
  decrement,
  reset,
}

const connector = connect(mapState, mapDispatch)
const counterConnector = connector(Counter)

export default counterConnector;