import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import imgUndo from '../../assets/all-images/undo.png'

function Reservation() {
    const [reservation,setReserv]=useState([])

    useEffect(()=>{
      loadUseres()
    },[])
    
    const loadUseres=async()=>{
        const result=await  axios.get("http://localhost:8080/admin/reservation")
        setReserv(result.data)
        console.log(result)
    }
  return (
    <>
         <Link to="/admin" > <img src={imgUndo} alt="get back image" className='img-undo'/> </Link>

      <center> <h1 className='list-client-h1'>List of Reservation</h1></center>
         <div class="container-client">
          <table border="1">
          <tr>
              <th>Id</th>
              <th>First Name</th>
              <th>Last name</th>
              <th>Email</th>
              <th>Phone number</th>
              <th>Age</th>
              <th>Adress</th>
              <th>Number of person</th>
              <th>Days</th>
              <th>Start Day</th>
          </tr>
     {reservation.map((reserv,index)=>{
        return(
            <>
            
          <tr>
              <td>{reserv.id}</td>
              <td>{reserv.name}</td>
              <td>{reserv.prenom}</td>
              <td>{reserv.mail}</td>
              <td>{reserv.tl}</td>
              <td>{reserv.age}</td>
              <td>{reserv.adress}</td>
              <td>{reserv.nombre}</td>
              <td>{reserv.jours}</td>
              <td>{reserv.date}</td>
          </tr>
          </>
            )})
        }
        </table>
        </div>
    </>
  )
}

export default Reservation
