import React from 'react'
import If from './If'

const UserInfo = props => {
  const user = props.user || {}
  return (
    <If test={user.name}>
      <div>
        Welcome <strong>{user.name}!</strong>
      </div>
    </If>
  )
}

export default UserInfo
