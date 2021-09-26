import React from 'react'

const Random = props => {
  const randomNumber = Math.floor(Math.random() * (props.max - props.min + 1) + props.min)
  return (
    <>
      <h2>Random Number Component</h2>
      <p>The number is {randomNumber}</p>
    </>
  )
}
export default Random
