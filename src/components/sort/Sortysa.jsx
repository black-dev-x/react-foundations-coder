import React, { useState } from 'react'

const Sortysa = () => {
  const [numbers, setNumbers] = useState([])
  const getNextNumber = () => Math.ceil(Math.random() * 100)
  const generate = () => {
    const numbers = []
    while (numbers.length < 6) {
      const randomNumber = getNextNumber()
      if (!numbers.includes(randomNumber)) {
        numbers.push(randomNumber)
      }
      setNumbers(numbers)
    }
  }
  return (
    <div>
      <div>
        {numbers.map(n => (
          <span key={n}> {n} </span>
        ))}
      </div>
      <button onClick={generate}>Generate Random Numbers</button>
    </div>
  )
}

export default Sortysa
