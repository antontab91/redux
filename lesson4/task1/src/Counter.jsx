import React, { useState } from 'react';


const Counter = () => {
  const [state, setState] = useState(0)
  return (
    <div className="counter">
      <button onClick={() => { setState(state - 1) }} className="counter__button">
        -
    </button>
      <span className="counter__value">
        {state}
      </span>
      <button onClick={() => { setState(state + 1) }} className="counter__button">
        +
    </button>
    </div>
  )
}

export default Counter;