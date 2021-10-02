import React from 'react'
import First from './components/basics/First'
import WithParameter from './components/basics/WithParameter'
import Fragment from './components/basics/Fragment'
import Random from './components/basics/Random'
import Card from './components/layout/Card'

const App = _ => (
  <div>
    <h1>Fundamentos React</h1>
    <Card title='Random Number'>
      <Random max={10} min={5}></Random>
    </Card>
    <Card title='React Fragment'>
      <Fragment />
    </Card>
    <Card title='Component with props'>
      <WithParameter title='second component' subtitle='with props'></WithParameter>
    </Card>
    <Card title='First component'>
      <First></First>
    </Card>
  </div>
)

export default App
