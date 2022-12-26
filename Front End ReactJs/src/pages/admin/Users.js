import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import imgUndo from '../../assets/all-images/undo.png'

function Users() {
    const [users,setUsers]=useState([])
    const {id} = useParams()
    useEffect(()=>{
      loadUseres()
    },[])
    
    const loadUseres=async()=>{
        const result=await  axios.get("http://localhost:8080/admin/users")
        setUsers(result.data)
        console.log('Loading Users ')
    }
    const deleteUserHandler = async (id)=>{
      alert('Confirme Deleting user')
       await axios.delete(`http://localhost:8080/admin/user${id}`)
      console.log('Button is working')
      loadUseres();
    }
  return (
    <>
     <Link to="/admin" > <img src={imgUndo} alt="get back image" className='img-undo'/> </Link>
         <center> <h1 className='list-client-h1'>List of Client</h1></center>
         <div class="container-client">
          <table border="1">
          {/* <caption>List of client</caption> */}
          <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Reservation</th>
              <th></th>
          </tr>
     {users.map((user,index)=>{
        return(
            <>
            
          <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.gmail}</td>
              <td>{user.reservation}</td>
              <td> <button className="supp" onClick={()=> deleteUserHandler(user.id)}>Delete</button> </td>
          </tr>
          </>
            )})
        }
        </table>
        </div>
    </>
  )
}

export default Users
