import React from 'react'

const Family = props => <div>{props.children.map((el, i) => React.cloneElement(el, { ...props, key: i }))}</div>

export default Family
