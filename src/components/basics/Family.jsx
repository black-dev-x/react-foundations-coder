import React from 'react'

const Family = props => <div>{React.Children.map(props.children, el => React.cloneElement(el, props))}</div>

export default Family
