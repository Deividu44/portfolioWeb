import Hidden from './Hidden'

function About () {
  return (
    <>
      <h1 id='sobre mí' className='title-content'>Aquí va algo sobre <strong className='highlight-fuxia'>mí</strong>...</h1>
        <div className='mt-4'>
          <p className='fs-4 lh-sm text-content mb-5' >
            <Hidden />
            Ahora en serio.
            Soy una persona que empezó en un Grado Superior de desarrollo multiplataforma
            y trabajando durante un año en una consultoría como programador informático.
            Después quise introducirme más en la programación <strong className='highlight-lime'>front-end</strong> y ahora incluso
            estoy aprendiendo sobre <strong className='highlight-lime'>back-end</strong> y continúo formándome cada día.
          </p>

          <p className='fs-2 lh-sm text-content'>
            Ahora estoy ampliando mis conocimientos sobre el desarrollo <strong className='highlight-lime'>fullstack</strong> y
            busco abrirme un camino en el <strong className='highlight-lime'>campo de la programación</strong>.
          </p>
        </div>
    </>
  )
}

export default About
