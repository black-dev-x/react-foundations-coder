import React from 'react'

const DirectChild = props => (
  <div>
    <p>
      Value received from parent: <strong>{props.value}</strong>
    </p>
  </div>
)

export default DirectChild
