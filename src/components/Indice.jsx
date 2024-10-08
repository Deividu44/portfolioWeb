import { Col, Container, Image } from 'react-bootstrap'
import Scrollspy from 'react-scrollspy'

function Indice ({ menu }) {
  const anchorClass = 'text-decoration-none fs-bolder index-style'

  return (
    <Col className='col-lg-2 position-fixed vh-100 d-flex align-items-center p-3 text-white aside-background'>
      <Container className='d-flex flex-column justify-content-center'>
        <Container className='d-flex justify-content-center '>
          <Image src='/yo_yoMismo.jpg' className='w-50 ' alt='Imagen del creador' thumbnail roundedCircle />
        </Container>
        <Container className='d-flex align-items-center justify-content-center flex-column text-uppercase '>
          <Scrollspy
            className='p-0 d-flex flex-column align-items-center'
            style={{ listStyle: 'none' }}
            items={['David', 'sobre mi', 'proyectos', 'educacion', 'skills', 'contactame']}
            currentClassName='isCurrent'
          >
            {menu?.map((m, index) => (
              <li key={index} className='mt-2'>
                <a key={index} className={anchorClass} href={`#${m}`}>{m}</a>
              </li>
            ))}
          </Scrollspy>
        </Container>
      </Container>
    </Col>
  )
}

export default Indice
