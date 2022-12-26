import React from 'react'
import '../styles/reserve-done.css' 
import imgUndo from  '../assets/all-images/undo.png'
import { Link } from 'react-router-dom';

function ReservDone() {
  return (
    <>
    <Link to="/offers" > <img src={imgUndo} alt="get back image" className='img-undo'/> </Link>

    <div className='container-reser-done'>
      <h1>Reservation is Done </h1>
      <h3>Have a Nice Day 😊 </h3>
    </div>
    </>
  )
}

export default ReservDone ;
