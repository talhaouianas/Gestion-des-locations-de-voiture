import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import imgUndo from '../../assets/all-images/undo.png'

function AddCar() {
    let navigate = useNavigate()
    const [formData, setformData] = useState({
        namecar:'',
        model:'',
        matricule:'',
        color:'',
        forcecar:'',
        price:''
    })
    const onChangeHandler = (e)=>{
        setformData( ()=>({
          ...formData,
          [e.target.name]: e.target.value 
        }) )
      }
    const AddCarHandler = (e)=>{
        e.preventDefault() ;
        fetch("http://localhost:8080/admin/addCar",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                namecar:formData.namecar,
                model:formData.model,
                matricule:formData.matricule,
                color:formData.color,
                forcecar:formData.forcecar,
                price:formData.price,
            })
        }).then( ()=>{
            navigate('/admin/carAdded')
        } )
    }
  return (
    <>
         <Link to="/admin" > <img src={imgUndo} alt="get back image" className='img-undo'/> </Link>

            <center> <h1 className='list-client-h1'>Add Car</h1></center>
         <div class="container-client">
            <form onSubmit={AddCarHandler}>
            <div class="car" > 
                    {/* <span className="c">Add a Car </span><span></span> */}
                    Name : <input type="text" class="input" name="namecar" required placeholder='Name of the car' onChange={onChangeHandler}/>
                    Model : <input type="text" class="input" name="model" required placeholder='Model' onChange={onChangeHandler}/>
                    Matricule : <input type="text" class="input" name="matricule" required placeholder='Matricule' onChange={onChangeHandler}/>
                    Color : <input type="text" class="input" name="color" required placeholder='Color' onChange={onChangeHandler}/>
                    Strength  : <input type="text" class="input" name="forcecar" required placeholder="HorsePower" onChange={onChangeHandler}/>
                    Price for a day : <input type="text" class="input" name="price" required placeholder='Price $' onChange={onChangeHandler}/>
            <span></span><button class="cons" >Add</button>
            
        </div>
            </form>
    </div> 
    </>
  )
}

export default AddCar
