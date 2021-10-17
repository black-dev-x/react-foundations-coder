import './Counter.css'
import React from 'react'
import Display from './Display'
import Buttons from './Buttons'
import StepForm from './StepForm'

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
        <Display number={this.state.count} />
        <StepForm step={this.state.step} setStep={this.setStep} />
        <Buttons increment={this.increment} decrement={this.decrement} />
      </div>
    )
  }
}

export default Counter
