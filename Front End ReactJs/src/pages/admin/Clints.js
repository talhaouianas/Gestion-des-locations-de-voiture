import React, { useEffect, useState } from 'react'
// import './client.css'
import axios from 'axios';
import AdminMenu from './AdminMenu';
import Users from './Users';
import { Route, Routes } from 'react-router-dom';


function Client() {

    // const [users,setUsers]=useState([])

    // useEffect(()=>{
    //   loadUseres()
    // },[])
    
    // const loadUseres=async()=>{
    //     const result=await  axios.get("http://localhost:8055/users")
    //     setUsers(result.data)
    //     console.log(result)
    // }
    // function affiche(){
    //     console.log(users)
    // }

    return (
        <>

        <AdminMenu />

        <div>
         </div>
         {/* <div class="container-client">
        <div class="menu-client">
            <button>view list of client</button>
            <p>view list of cars</p>
            <p>view list of reservation</p>
            <p>add a car</p>
            <p>delete a car</p>
            <p>Modify a car</p>
            <p>Add user</p>
            <p>Delete user</p>
        </div>
    <div class="car" > 
        <span class="c">Add a car </span><span></span>
        name : <input type="text" class="input" required />
        model : <input type="text" class="input" required />
        matricule : <input type="text" class="input" required />
        color : <input type="text" class="input" required />
        force : <input type="text" class="input" required placeholder="In terme of horses"/>
        price for a day : <input type="text" class="input" required />
        <span></span><button class="cons" onClick={affiche}>add</button>
    </div>
        </div> */}
        </>
    )}
export default Client;
