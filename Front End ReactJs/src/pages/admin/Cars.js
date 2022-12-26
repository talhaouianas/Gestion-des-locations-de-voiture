import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import imgUndo from '../../assets/all-images/undo.png'

function Cars() {
    const [cars,setCars] = useState([])

    const loadCars =async ()=>{
        const result = await axios.get("http://localhost:8080/admin/cars")
        setCars(result.data)
    }

    useEffect(()=>{
        loadCars()
      },[])

      const deleteCarHandler = async (id)=>{
        alert('Confirme Deleting the Car')
         await axios.delete(`http://localhost:8080/admin/car${id}`)
        loadCars();
      }

  return (
    <>
     <Link to="/admin" > <img src={imgUndo} alt="get back image" className='img-undo'/> </Link>

        <center> <h1 className='list-client-h1'>List of Cars  </h1></center>
         <div class="container-client">
          <table border="1">
          <tr>
              <th>Id</th>
              <th>Name Car</th>
              <th>Model</th>
              <th>Matricule</th>
              <th>Color</th>
              <th>Force</th>
              <th>Price for A Day</th>
              <th></th>
          </tr>
     {cars.map((car,index)=>{
        return(
            <>
          <tr>
              <td>{car.id}</td>
              <td>{car.namecar}</td>
              <td>{car.model}</td>
              <td>{car.matricule}</td>
              <td>{car.color}</td>
              <td>{car.forcecar} Horse</td>
              <td>{car.price}$</td>
              <td> <button className="supp" onClick={()=> deleteCarHandler(car.id)}>Delete</button> </td>

          </tr>
          </>
            )})
        }
        </table>
        </div>
    </>
  )
}

export default Cars
