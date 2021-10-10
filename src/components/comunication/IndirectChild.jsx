import React from 'react'

const IndirectChild = props => (
  <div>
    <button onClick={() => props.action('information')}>Send Information</button>
  </div>
)

export default IndirectChild
