import { useEffect, useState } from 'react'
import Curso from './Curso'

function Educacion () {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    fetch('../data.json')
      .then(res => res.json())
      .then(data => setCourses(data.courses))
  },[])

  return (
    <>
      <h1 id='educacion' className='title-content'>Educación y formaciones</h1>
      {courses.map(course => (
        <Curso key={course.id} curso={course}/>
      ))}
    </>
  )
}

export default Educacion
