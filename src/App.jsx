import { Container, Row, Col } from 'react-bootstrap'
import Indice from './components/Indice'
import About from './components/About'
import Educacion from './components/Educacion'
import Skills from './components/Skills'
import Contendor from './components/Contenedor'
import './App.css'


function App() {

  const contenedores = [<About />, <Educacion />, <Skills />]

  return (
    <Container fluid>
      <Row className='h-100'>
        <Indice />
        <Col className='col-xs-2 offset-2 p-5 bg-transparent'>
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
