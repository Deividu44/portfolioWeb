import Carrusel from './Carrusel'

function Proyectos ({ projects }) {
  return (
    <>
      <h1 id='proyectos' className='title-content'>🚧Estos son mis proyectos🚧</h1>
      <p className='text-content'>En la aplicación de veterinaria actualmente no funciona debido a
        que donde tenía hospedado el backend han cambiado las políticas. Estoy en ello ⛏
      </p>
      <Carrusel projects={projects} />
    </>
  )
}

export default Proyectos
