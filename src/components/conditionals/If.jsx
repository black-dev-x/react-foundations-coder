import React from 'react'

const If = props => {
  const elseChild = props.children.filter(child => child.type && child.type.name === 'Else')
  const ifChildren = props.children.filter(child => child.type && child.type.name !== 'Else')
  return <div>{props.test ? ifChildren : elseChild}</div>
}
export const Else = props => props.children

export default If
