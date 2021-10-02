import React from 'react'
import './Card.css'

const Card = props => (
  <div className='Card'>
    <div className='title'>{props.title}</div>
    <div className='content'>{props.children}</div>
  </div>
)

export default Card
