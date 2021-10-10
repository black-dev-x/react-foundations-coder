import React from 'react'
import IndirectChild from './IndirectChild'

const IndirectParent = () => {
  const receiveInformation = value => {
    alert(`received ${value} from child`)
  }
  return (
    <div>
      <IndirectChild action={receiveInformation} />
    </div>
  )
}

export default IndirectParent
