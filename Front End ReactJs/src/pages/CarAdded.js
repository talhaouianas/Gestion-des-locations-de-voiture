import React from 'react'
import { Link } from 'react-router-dom'
import imgUndo from  '../assets/all-images/undo.png'

function CarAdded() {
  return (
    <>
    <Link to="/admin" > <img src={imgUndo} alt="get back image" className='img-undo'/> </Link>
       <div className='container-reser-done'>
          <h1>Car Added Successfully 🚗</h1>
    </div>
    </>
  )
}

export default CarAdded
