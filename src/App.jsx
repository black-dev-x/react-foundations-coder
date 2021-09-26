import React from 'react'
import First from './components/basics/First'
import WithParameter from './components/basics/WithParameter'
import Fragment from './components/basics/Fragment'
import Random from './components/basics/Random'

const App = _ => (
  <div>
    <h1>Fundamentos React</h1>
    <Random max={10} min={5}></Random>
    <Fragment />
    <WithParameter title='second component' subtitle='with props'></WithParameter>
    <First></First>
  </div>
)

export default App
