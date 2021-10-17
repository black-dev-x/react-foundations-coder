import React from 'react'

const Buttons = props => (
  <>
    <button onClick={props.decrement}>-</button>
    <button onClick={props.increment}>+</button>
  </>
)

export default Buttons
