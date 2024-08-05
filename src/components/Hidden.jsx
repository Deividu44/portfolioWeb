import { useState } from 'react'

function Hidden () {
  const [show, setShow] = useState(true)

  const handleShow = () => {
    setShow(!show)
  }

  if (show) {
    return (
      <em role='button' title='Click Me!' className='highlight-fuxia' onClick={handleShow}>
        MI es la tercera nota en la escala musical,
        también es un pronombre personal de primera persona del singular. &#160;
      </em>
    )
  }
}

export default Hidden
