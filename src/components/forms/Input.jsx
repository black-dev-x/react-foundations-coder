import './Input.css'
import React, { useState } from 'react'

const Input = () => {
  const [value, setValue] = useState('')
  const updateInputValue = e => setValue(e.target.value)
  return (
    <div className='Input'>
      <h2>{value}</h2>
      <div className='content'>
        <input value={value} onChange={updateInputValue} />
        <input value={value} readOnly />
        <input value={undefined} />
      </div>
    </div>
  )
}

export default Input
