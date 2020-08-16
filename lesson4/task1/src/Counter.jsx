import React, { useState } from 'react';
import { connect } from 'react-redux';
import { increment, decrement, reset } from './counter.actions';


const Counter = ({ counter, incr, decr, res }) => {

  return (
    <div className="counter">
      <button onClick={() => { decr() }} className="counter__button">
        -
    </button>
      <span onClick={() => { res() }} className="counter__value">
        {counter}
      </span>
      <button onClick={() => { incr() }} className="counter__button">
        +
    </button>
    </div>
  )
}


const mapState = (state) => {
  return {
    counter: state
  }
}

const mapProps = (dispatch) => {
  return {
    incr: () => dispatch(increment()),
    decr: () => dispatch(decrement()),
    res: () => dispatch(reset()),
  }
}


const connector = connect(mapState, mapProps);

export default connector(Counter);