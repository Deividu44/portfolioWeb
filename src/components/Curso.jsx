import { Button, Container } from "react-bootstrap";

function Curso ({ curso }) {
  const anchorClass = 'text-decoration-none fs-bolder bg-transparent'
  const { title, entity, date, hours, url_certificate } = curso

  return (
    <Container className="d-flex fs-4 w-100 h-100">
      <Container className="p-3 d-flex flex-column gap-3">
        <Container className='subtitle-content p-0'>{title}</Container>
        <Container className='text-content p-0'>{entity}</Container>
        <Container className='text-content p-0' style={{'fontSize': '1em'}}>{hours} horas</Container>
        <Button className='button-content'>
          <a
           title="Ver certificado" 
           className={`${anchorClass} fw-bold`}
           type='button'
           href={url_certificate}
           target='_blank'>
            Certificado
          </a>
        </Button>
      </Container>
      <Container className='w-25 text-white' style={{'marginTop': '2rem'}}>{date}</Container>
  </Container>
  )
}

export default Curso