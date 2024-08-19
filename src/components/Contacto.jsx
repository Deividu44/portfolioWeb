import { useState } from 'react'
import { Container, Form, Image } from 'react-bootstrap'
import emailjs from '@emailjs/browser'
import { useField } from '../hooks'
import Notification from './Notification'
import '../Contact.css'

function Contacto () {
  const [emailObj, setEmailObj] = useState({ user_name: '', user_email: '', message: '' })
  const [noti, setNoti] = useState(null)
  const { VITE_serviceID, VITE_templateID, VITE_PK } = import.meta.env

  const updateEmailObj = (e) => {
    setEmailObj({ ...emailObj, [e.target.name]: e.target.value })
  }

  const name = useField(emailObj.user_name, 'user_name', 'Nombre', updateEmailObj)
  const mail = useField(emailObj.user_email, 'user_email', 'Correo', updateEmailObj)
  const message = useField(emailObj.message, 'message', 'Puedes empezar con un saludo', updateEmailObj)

  const submitEmail = (e) => {
    e.preventDefault()

    emailjs.send(VITE_serviceID, VITE_templateID, emailObj, {
      publicKey: VITE_PK
    }).then(() => {
      timeOutNoti('Mail enviado correctamente ¡Muchas gracias!', 'success')
    }).catch(() =>
      timeOutNoti('Ha ocurrido un error', 'warning')
    )
  }

  const timeOutNoti = (message, type) => {
    setNoti({ message, type })
    setTimeout(() => {
      setNoti(null)
    }, 2000)
  }

  return (
    <Container>
      <h1 className='title-content' id='contactame'>¡Dame un toque y contacta conmigo! 😉</h1>
      <Container className='bg-contact100 m-0'>
        <Container className='wrap-contact100'>
          <div className='contact100-pic js-tilt ' data-tilt>
            <Image src='https://i.imgur.com/VRFiMzM.png' alt='IMG' />
          </div>
          <Form className='contact100-form validate-form' onSubmit={submitEmail}>
            {noti !== null &&
              <Notification message={noti} />}
            <span className='contact100-form-title text-content'>
              Envía algún comentario de feedback o alguna oferta
            </span>
            <Form.Group className='wrap-input100' required>
              <Form.Control className='input100' type='text' {...name} required />
            </Form.Group>

            <Form.Group className='wrap-input100'>
              <Form.Control className='input100' type='email' {...mail} required />
            </Form.Group>

            <Form.Group className='wrap-input100'>
              <Form.Control className='input100' as='textarea' {...message} required />
            </Form.Group>

            <div className='container-contact100-form-btn'>
              <button className='contact100-form-btn' type='submit'>
                Enviar
              </button>
            </div>
          </Form>
        </Container>
      </Container>
    </Container>
  )
}

export default Contacto
