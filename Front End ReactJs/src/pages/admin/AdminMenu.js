import React, { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import Users from './Users';
import './Admin.css'
import imgStaistic from '../../assets/all-images/Statistics.jpeg'
import axios from 'axios';
function AdminMenu() {
  const [cars,setCars] = useState([])
  const [users,setUsers]=useState([])

  const loadCars =async ()=>{
      const result = await axios.get("http://localhost:8080/admin/cars")
      setCars(result.data)
  }   
  const loadUseres=async()=>{
      const result=await  axios.get("http://localhost:8080/admin/users")
      setUsers(result.data)
  }

  useEffect(()=>{
      loadCars();
      loadUseres()
    },[])

  return (
    <>
      <center><h1 className='list-client-h1'>Admin Page</h1></center>
         <div class="container-admin">
          <div class="menu-admin">
            <Link to={'/admin/users'} className="link">Clients List</Link>
            <Link to={"/admin/cars"} className="link">Cars List</Link>
            <Link to={'/admin/reservation'} className="link">Reservation List</Link>
            <Link to={"/admin/addCar"} className="link">Add a Car</Link>
        </div>
      <div className='total-cars' ><h1> Total Car List <br/> {cars.length+50} </h1></div>
      <div className='total-cars owners' ><h1> Total Car Rented <br/> 40 </h1></div>
      <div className='total-clients' ><h1> Total Client List <br/> {users.length} </h1></div> 
      <div className='img-statistic' >
      <img src={imgStaistic} alt='Statistique' />
      </div>
      </div>
    </>
  )
}

export default AdminMenu
