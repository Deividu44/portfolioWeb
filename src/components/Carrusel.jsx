import { Carousel } from 'react-bootstrap'
import { SiMongodb as Mongodb } from 'react-icons/si'
import { RiTailwindCssFill as Tailwind } from 'react-icons/ri'
import {
  FaReact as React,
  FaBootstrap as Bootstrap,
  FaNodeJs as Nodejs
} from 'react-icons/fa'

function Carrusel ({ projects }) {
  return (
    <Carousel className='w-75 border border-3 border-dark rounded'>
      {projects?.map(project => (
        <Carousel.Item key={project.id}>
          <a
            href={project.urlProject}
            target='_blank'
            title='El servidor puede tardar unos minutos en responder...' rel='noreferrer'
          >
            <img
              src={project.image}
              className='w-100 h-50'
              alt={project.alt}
            />
          </a>
          <Carousel.Caption className='bg-success bg-opacity-50'>
            <h3>{project.titleProject}</h3>
            <p>{project.descriptionProject}</p>
            <p className='fs-3'>
              {
                project.resources.map((lan, i) => {
                  if (lan === 'react') return <React key={i} />
                  if (lan === 'tailwind') return <Tailwind key={i} />
                  if (lan === 'mongodb') return <Mongodb key={i} />
                  if (lan === 'nodejs') return <Nodejs key={i} />
                  return <Bootstrap key={i} />
                })
              }
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default Carrusel
