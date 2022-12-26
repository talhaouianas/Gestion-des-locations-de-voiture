import React, { useEffect, useState } from 'react'
import './Login.css'
import { Link, NavLink, useNavigate } from "react-router-dom";
import imgLogin from '../../assets/all-images/login.png'
import axios from 'axios';

function Login() {
    const [name,setname] = useState('')
    const [password,setpassword] = useState('')    
    const [users,setUsers]=useState([])
    let navigate = useNavigate()

    let check = '#' 
    let toAlert = false

    useEffect(()=>{
      loadUseres()
    },[])
    
    const loadUseres=async()=>{
        const result=await  axios.get("http://localhost:8080/admin/users")
        setUsers(result.data)
    }
    
    function onSubmitHandler(e){
        e.preventDefault();
        if(name=== "admin" && password==="admin12")
        check="/admin"
        users.map( (user,index)=>{
            if(user.name === name && user.password=== password)
            check ='/offers'

        } )
        if(check!== "/offers" && check!== "/admin")
            toAlert = true 
        if(toAlert)
            alert("Invalid User name or Password ")    
        
        navigate(check)
    }
    
    return (
        <>
            <center>
                <form onSubmit={onSubmitHandler}>
                <div className="container-log">
                <h1>Log-In</h1>
                <img src={imgLogin} alt='Login Image' className='img-log'/> <br />
                    
                    <label htmlFor="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="email" required 
                        value={name} onChange={(e)=>setname(e.target.value)}
                    />

                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="password" required
                        value={password} onChange={(e)=> setpassword(e.target.value)}
                    />
                    <button type="submit">Login </button>
                </div>
                </form>
            </center>
        </>
    )
}

export default Login
