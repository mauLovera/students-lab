import './App.css'
import { useState } from 'react'
import { studentsData } from './students-data'

// Components
import Student from './components/Student'

function App() {
  const [students, setStudents] = useState(studentsData)

  return (
    <div className='body'>
      {students.map(student => 
        <Student key={student.name} student={student} />  
      )}
    </div>
  )
}

export default App
