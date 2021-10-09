import React from 'react'
import If, { Else } from './If'

const UserInfo = props => {
  const user = props.user || {}
  return (
    <If test={user.name}>
      <div>
        Welcome <strong>{user.name}!</strong>
      </div>
      <Else>Welcome stranger</Else>
    </If>
  )
}

export default UserInfo
