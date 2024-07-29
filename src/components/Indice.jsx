import { Col, Container, Image } from 'react-bootstrap'

function Indice () {
const anchorClass = 'mb-1 text-decoration-none fs-bolder bg-transparent index-style'

  return (
    <Col className='col-lg-2 position-fixed vh-100 d-flex align-items-center p-3 text-white aside-background'>
      <Container className='d-flex flex-column justify-content-center bg-transparent'>
        <Container className='d-flex justify-content-center bg-transparent'>
          <Image src='/pavo.jpg' className='w-50 rounded' alt='Es que soy yo literal'/>
        </Container>
        <Container className='d-flex align-items-center justify-content-center flex-column text-uppercase bg-transparent'>
          <a className={`${anchorClass} mt-3`} href='#about'>Sobre mí</a>
          <a className={anchorClass} href='#portfolio'>Portfolio</a>
          <a className={anchorClass} href='#educacion'>Educación</a>
          <a className={anchorClass} href='#skills'>Skills</a>
          <a className={anchorClass} href='#contacto'>Contacto</a>
        </Container>
      </Container>
  </Col>
  )
}

export default Indice
