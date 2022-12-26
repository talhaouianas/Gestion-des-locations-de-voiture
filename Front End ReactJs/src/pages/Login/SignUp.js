import React, { useState } from 'react'
import './SignUp.css'
import { Link, NavLink } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import imgSign from '../../assets/all-images/sign.jpg'

function Sign(props) {
    const [name,setname]= useState('')
    const [email,setemail]= useState('')
    const [password,setpassword]=useState('')
    let navigate = useNavigate()

    let reservation='0' 
    const onSubmitHandler = (e)=>{
        e.preventDefault() ;
        fetch("http://localhost:8080/admin/signup",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({name,gmail:email,password,reservation})
        }).then( ()=>{
        navigate('/login')
        } )
        console.log('user adedd Sucssefuly !!! ') ;
    }
    return (
        <>
            <center>
                <div className="container-sign">
                <h1>Sign-Up</h1>
                <img src={imgSign} alt='Sign up Image' className='img-sign'/><br />
                <form onSubmit={(e) => onSubmitHandler(e)}>
                        <label htmlFor="uname"><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" name="userName" required
                            value={name} onChange={(e) => setname(e.target.value)}
                        />

                        <label htmlFor="uname"><b>Email</b></label>
                        <input type="text" placeholder="Enter Your Email" name="email" required
                            value={email} onChange={(e) => setemail(e.target.value)}
                        />

                        <label htmlFor="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="password" required
                        value={password} onChange={(e) => setpassword(e.target.value)}
                        />
                        <button type='submit'> Sign-up</button>
                        
                  </form>
           
                </div>
            </center>
        </>
    )
}

export default Sign
