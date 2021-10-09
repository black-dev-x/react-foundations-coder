import React from 'react'

const EvenOrOdd = props => (
  <div>
    The number {props.number} is {props.number % 2 === 0 ? <span>even</span> : <span>odd</span>}
  </div>
)

export default EvenOrOdd
