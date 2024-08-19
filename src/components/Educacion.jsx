import Curso from './Curso'

function Educacion ({ courses }) {
  return (
    <>
      <h1 id='educacion' className='title-content'>Educación y formaciones</h1>
      {courses?.map(course => (
        <Curso key={course.id} curso={course} />
      ))}
    </>
  )
}

export default Educacion
