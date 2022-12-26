import React from 'react'
import { Link } from 'react-router-dom'
import imgUndo from  '../assets/all-images/undo.png'

function MessageSend() {
  return (
    <>
    <Link to="/offers" > <img src={imgUndo} alt="get back image" className='img-undo'/> </Link>
       <div className='container-reser-done'>
          <h1>Message Has been sent ✅ </h1>
    </div>
    </>
  )
}

export default MessageSend
