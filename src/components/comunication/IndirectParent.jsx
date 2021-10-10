import React, { useState } from 'react'
import IndirectChild from './IndirectChild'

const IndirectParent = () => {
  const [information, setInformation] = useState('none')
  const receiveInformation = value => {
    setInformation(value)
  }
  return (
    <div>
      <IndirectChild action={receiveInformation} />
      <p>Latest information received: {information}</p>
    </div>
  )
}

export default IndirectParent
