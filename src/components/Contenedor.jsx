import { Container } from 'react-bootstrap'

function Contendor (props) {
  return (
    <Container className='d-flex flex-column mt-5 m-0 space_between'>
      {props.children}
    </Container>
  )
}

export default Contendor
