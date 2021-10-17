import './Counter.css'
import React from 'react'

class Counter extends React.Component {
  state = {
    count: this.props.startingNumber || 0,
    step: this.props.startingStep || 1
  }
  increment = () => {
    this.setState({
      count: this.state.count + this.state.step
    })
  }
  decrement = () => {
    this.setState({
      count: this.state.count - this.state.step
    })
  }
  setStep = e => {
    this.setState({
      step: +e.target.value
    })
  }
  render() {
    return (
      <div className='Counter'>
        <h2>Counter</h2>
        <h3>{this.state.count}</h3>
        <div>
          <label htmlFor='stepInput'>Step: </label>
          <input id='stepInput' type='number' value={this.state.step} onChange={this.setStep} />
        </div>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.increment}>+</button>
      </div>
    )
  }
}

export default Counter
