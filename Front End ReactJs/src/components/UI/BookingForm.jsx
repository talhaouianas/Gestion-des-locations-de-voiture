import {React, useEffect} from "react";
import "../../styles/booking-form.css";
import { Form, FormGroup } from "reactstrap";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";
import { Button } from "reactstrap";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'


const BookingForm = (props) => {
  let navigate = useNavigate()

  const { id,rating,brand,gps,model, carName, automatic, speed, price } = props.singlecar;
  var carCustom = {
    id:id,
    carName:carName,
    speed:speed,
    price:price,
    model:model,
    rating:rating,
    gps:gps,
    brand:brand,
    automatic:automatic
  }
    const [formData, setFormData] = useState({
      First_name:'',
      Last_name:'',
      Email:'',
      Phone_number:'',
      Adress:'',
      Age:'',
      Number_of_person:'',
      codePromo:'#',
      Date:'',
      Days:'',
    })
    const onChangeHandler = (e)=>{
      setFormData( ()=>({
        ...formData,
        [e.target.name]: e.target.value 
      }) )
    }


  function pdfgenerate() {
    console.log(formData)
    var doc = new jsPDF('p','pt') ;
    let y = 100 ;
    doc.setFont('Times-Roman') 
    doc.setFontSize(18)
    doc.text(150,40, "Invoice payment ")
    doc.text(70,80, "Car Information : ")
    doc.setFontSize(14) 
    doc.addImage(props.singlecar.imgUrl, 'png',400,15, 150, 150)
    for( let obj in carCustom){
      doc.text(60, y , `${obj} : ${carCustom[obj]}`)
      y+=20
    }
    doc.setFontSize(18)
    doc.text(70,y+30, "User Information : ")
    doc.setFontSize(14) 
    y+=60
    for(let infoC in formData){
      doc.text(60, y , `${infoC} : ${formData[infoC]}`)
      y+=20
    }
    doc.text(60, y , `Price total : ${parseInt(formData.Days) * price}$` ) 
    let dat = new Date()
    let strDay= `${String(dat.getDate()).padStart(2, '0')}/${String(dat.getMonth() + 1).padStart(2, '0')}/${dat.getFullYear()}`
    doc.setFont('Courier','bold').setFontSize(18).text(60, y+200 , "Thank you for Selecting our Services")
    doc.setFont("Courier").setFontSize(12).text(60,y+220,`In : ${strDay}`) 
    doc.save("Facture.pdf")
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    fetch("http://localhost:8080/admin/reserve",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
              name:formData.Last_name,
              prenom:formData.First_name,
              mail:formData.Email,
              tl:formData.Phone_number,
              nombre:formData.Number_of_person,
              adress:formData.Adress,
              age:formData.Age,
              jours:formData.Days,
              date:formData.Date,
            })
        }).then( ()=>{
          navigate("/user/done") 
        } )
        console.log("Reservation Adedd Sucssefly !!!")
        pdfgenerate()
  };
  return (
    <>
    <Form>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text" placeholder="First Name" name='First_name' onChange={onChangeHandler}/>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="text" placeholder="Last Name" name='Last_name' onChange={onChangeHandler}/>
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="email" placeholder="Email" name='Email' onChange={onChangeHandler}/>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="number" placeholder="Phone Number" name='Phone_number' onChange={onChangeHandler}/>
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text" placeholder="Address" name="Adress" onChange={onChangeHandler}/>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="text" placeholder="Age" name='Age' onChange={onChangeHandler} />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <select name="Number_of_person" id="" onChange={onChangeHandler}>
          <option value="1 person">1 Person</option>
          <option value="2 person">2 Person</option>
          <option value="3 person">3 Person</option>
          <option value="4 person">4 Person</option>
          <option value="5+ person">5+ Person</option>
        </select>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">

      <input type="text" placeholder="Code promo" name="codePromo" onChange={onChangeHandler}/>
        
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="date" placeholder="Begin" name="Date" onChange={onChangeHandler}/>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="text" placeholder="Days" name="Days" onChange={onChangeHandler}/>
      </FormGroup>

      <FormGroup>
        <textarea
          rows={5}
          type="textarea"
          className="textarea"
          placeholder="Write"
        ></textarea>
      </FormGroup>
    </Form>
      <div className="payment text-end mt-5">
        <Button onClick={onSubmitHandler}>Reserve Now</Button>
      </div> 
    </>
  );
};

export default BookingForm;
