import { Container } from 'react-bootstrap'
import {
  TiSocialLinkedin,
  TiSocialInstagram,
  TiSocialGithubCircular
} from 'react-icons/ti'

function Presentacion ({ socials }) {
  const iconos = [
    <TiSocialLinkedin key={1} className='standard-icon button-content' />,
    <TiSocialGithubCircular key={2} className='standard-icon button-content' />,
    <TiSocialInstagram key={3} className='standard-icon button-content' />
  ]

  return (
    <>
      <Container className='d-flex flex-column' style={{ gap: '14rem' }}>
        <h1
          id='David'
          className='title-content'
          style={{ fontSize: '8em' }}
        >
          David
          <strong style={{ color: '#8ce97b' }}>
            Castanera
          </strong>
          Vivas
        </h1>
        <Container>
          <p className='fs-3 text-content'>
            Puedes contactar conmigo por medio de  mis redes sociales y/o por correo:&nbsp;
            <a href='mailto:davidcastanera100@gmail.com' id='mail'>
              davidcastanera100@gmail.com
            </a>
          </p>
        </Container>
        <Container className='p-2 text-content d-flex gap-4'>
          {socials?.map((social, index) => (
            <a
              key={social.id}
              href={`${social.urlSocial}`}
              target='_blank'
              title={`${social.name}`} rel='noreferrer'
            >
              {iconos[index]}
            </a>
          ))}
        </Container>
      </Container>

    </>
  )
}

export default Presentacion
