import './App.css'
import React from 'react'
import First from './components/basics/First'
import WithParameter from './components/basics/WithParameter'
import Fragment from './components/basics/Fragment'
import Random from './components/basics/Random'
import Card from './components/layout/Card'
import Family from './components/basics/Family'
import FamilyMember from './components/basics/FamilyMember'
import StudentList from './components/repeat/StudentList'
import ProductTable from './components/repeat/ProductTable'
import EvenOrOdd from './components/conditionals/EvenOrOdd'
import UserInfo from './components/conditionals/UserInfo'
import DirectParent from './components/comunication/DirectParent'
import IndirectParent from './components/comunication/IndirectParent'

const user = {
  name: 'Black'
}

const App = _ => (
  <div className='App'>
    <h1>React Fundamentals</h1>
    <section className='exercises'>
      <Card title='#10 - Indirect Communication' color='#8BAD39'>
        <IndirectParent />
      </Card>
      <Card title='#09 - Direct Communication' color='#59323C'>
        <DirectParent />
      </Card>
      <Card title='#08 - Conditional Rendering' color='#982395'>
        <UserInfo />
        <UserInfo user={user} />
        <EvenOrOdd number={20} />
        <EvenOrOdd number={23} />
      </Card>
      <Card title='#07 - Repeating products' color='#3A9AD9'>
        <ProductTable />
      </Card>
      <Card title='#06 - Repeating elements' color='#ff4C65'>
        <StudentList />
      </Card>
      <Card title='#05 Component with children' color='#00C8F8'>
        <Family action='is ready!'>
          <FamilyMember name='Alexander' surname='Hamilton'></FamilyMember>
          <FamilyMember name='Melon' surname='Dusk'></FamilyMember>
          <FamilyMember name='Black' surname='Gen'></FamilyMember>
        </Family>
      </Card>
      <Card title='#04 Random Number' color='#FA6900'>
        <Random max={10} min={5}></Random>
      </Card>
      <Card title='#03 React Fragment' color='#E94C6F'>
        <Fragment />
      </Card>
      <Card title='#02 Component with props' color='#E8B71A'>
        <WithParameter title='second component' subtitle='with props'></WithParameter>
      </Card>
      <Card title='#01 First component' color='#588C73'>
        <First></First>
      </Card>
    </section>
  </div>
)

export default App
