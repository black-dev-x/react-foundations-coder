import React from 'react'
import './Card.css'

const Card = props => {
  const color = props.color || '#F00'
  const cardStyle = {
    backgroundColor: color,
    borderColor: color
  }
  return (
    <div className='Card' style={cardStyle}>
      <div className='title'>{props.title}</div>
      <div className='content'>{props.children}</div>
    </div>
  )
}

export default Card
