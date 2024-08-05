import { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Indice from './components/Indice'
import Presentacion from './components/Presentacion'
import About from './components/About'
import Educacion from './components/Educacion'
import Skills from './components/Skills'
import Contendor from './components/Contenedor'
import './App.css'
import Contacto from './components/Contacto'

function App () {
  const [information, setInformation] = useState([])

  useEffect(() => {
    fetch('../data.json')
      .then(res => res.json())
      .then(data => setInformation(data))
  }, [])

  const contenedores = [
    <Presentacion key={1} socials={information.socials} />,
    <About key={2} />,
    <Educacion key={3} courses={information.courses} />,
    <Skills key={4} skills={information.skills} />,
    <Contacto key={5} />
  ]

  return (
    <Container fluid>
      <Row className='h-100'>
        <Indice menu={information.menu} />
        <Col className='col-xs-2 offset-2 p-5'>
          {contenedores.map((c, index) => (
            <Contendor key={index}>
              {c}
            </Contendor>
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default App
