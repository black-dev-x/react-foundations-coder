import React from 'react'

const FamilyMember = props => (
  <div>
    {props.name} <strong>{props.surname}</strong> {props.action}
  </div>
)

export default FamilyMember
