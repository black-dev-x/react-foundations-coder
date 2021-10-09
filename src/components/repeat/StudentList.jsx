import React from 'react'
import './StudentList.css'
import students from '../../data/students'

const StudentList = () => (
  <div className='StudentList'>
    <ul>
      {students.map(student => (
        <li key={student.id}>
          {student.name} - {student.grade}
        </li>
      ))}
    </ul>
  </div>
)

export default StudentList
