import { Container, Form } from 'react-bootstrap'
import '../Contact.css'

function Contacto () {
  return (
    <Container>
      <h1 className='title-content' id='contáctame'>¡Dame un toque y contacta conmigo! 😉</h1>
      <Container className='bg-contact100 m-0'>
        <Container className='wrap-contact100'>
          <div className='contact100-pic js-tilt ' data-tilt>
            <img src='https://i.imgur.com/VRFiMzM.png' alt='IMG' />
          </div>
          <Form className='contact100-form validate-form'>
            <span className='contact100-form-title text-content'>
              Aquí puedes escribir el mail
            </span>
            <div className='wrap-input100 validate-input ' data-validate='Name is required'>
              <input className='input100' type='text' name='name' placeholder='Nombre' />
              <span className='focus-input100' />
              <span className='symbol-input100'>
                <i className='fa fa-user' aria-hidden='true' />
              </span>
            </div>
            <div className='wrap-input100 validate-input' data-validate='Valid email is required: ex@abc.xyz'>
              <input className='input100' type='text' name='email' placeholder='Correo' />
              <span className='focus-input100' />
              <span className='symbol-input100'>
                <i className='fa fa-envelope' aria-hidden='true' />
              </span>
            </div>
            <div className='wrap-input100 validate-input' data-validate='Message is required'>
              <textarea className='input100' name='message' placeholder='Cuerpo del mensaje...' />
              <span className='focus-input100' />
            </div>
            <div className='container-contact100-form-btn'>
              <button className='contact100-form-btn' type='submit'>
                Send
              </button>
            </div>
          </Form>
        </Container>

      </Container>

    </Container>
  )
}

export default Contacto
