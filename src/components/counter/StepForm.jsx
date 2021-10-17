import React from 'react'

const StepForm = props => (
  <div>
    <label htmlFor='stepInput'>Step: </label>
    <input id='stepInput' type='number' value={props.step} onChange={props.setStep} />
  </div>
)

export default StepForm
