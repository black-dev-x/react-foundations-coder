import React from 'react'

import students from '../../data/students'

const StudentList = () => (
  <div>
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
