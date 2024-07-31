import { Col, Container, Image } from 'react-bootstrap'
import Scrollspy from 'react-scrollspy'

function Indice ({ menu }) {
  const anchorClass = 'text-decoration-none fs-bolder bg-transparent index-style'

  return (
    <Col className='col-lg-2 position-fixed vh-100 d-flex align-items-center p-3 text-white aside-background'>
      <Container className='d-flex flex-column justify-content-center bg-transparent'>
        <Container className='d-flex justify-content-center bg-transparent'>
          <Image src='/pavo.jpg' className='w-50 rounded' alt='Es que soy yo literal'/>
        </Container>
        <Container className='d-flex align-items-center justify-content-center flex-column text-uppercase bg-transparent'>
          <Scrollspy
           className='bg-transparent p-0 d-flex flex-column align-items-center'
           style={{ 'listStyle': 'none' }}
           items={['David', 'sobre mí', 'educación', 'skills']}
           currentClassName='isCurrent'>
            {menu?.map((m, index) => (
              <li key={index} className='bg-transparent mt-2'>
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
