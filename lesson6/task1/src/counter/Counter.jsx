import React from 'react';
import { connect } from 'react-redux';
// import { increment, decrement, reset } from './counter.actions';
import * as counterActions from './counter.actions';
import { counterSelector } from './counter.selectors';

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
    count: counterSelector(state),
  }
}

const mapDispatch = {
  increment: counterActions.increment,
  decrement: counterActions.decrement,
  reset: counterActions.reset,
}

const connector = connect(mapState, mapDispatch)
const counterConnector = connector(Counter)

export default counterConnector;