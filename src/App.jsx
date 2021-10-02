import './App.css'
import React from 'react'
import First from './components/basics/First'
import WithParameter from './components/basics/WithParameter'
import Fragment from './components/basics/Fragment'
import Random from './components/basics/Random'
import Card from './components/layout/Card'

const App = _ => (
  <div className='App'>
    <h1>React Fundamentals</h1>
    <section className='exercises'>
      <Card title='#04 Random Number'>
        <Random max={10} min={5}></Random>
      </Card>
      <Card title='#03 React Fragment'>
        <Fragment />
      </Card>
      <Card title='#02 Component with props'>
        <WithParameter title='second component' subtitle='with props'></WithParameter>
      </Card>
      <Card title='#01 First component'>
        <First></First>
      </Card>
    </section>
  </div>
)

export default App
