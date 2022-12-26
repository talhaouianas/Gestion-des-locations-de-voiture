import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import CarListing from "../pages/CarListing";
import CarDetails from "../pages/CarDetails";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import Login from '../pages/Login/Login' ;
import Sign from '../pages/Login/SignUp'
// import Cliens from '../pages/admin/Clints' 
import Users from "../pages/admin/Users";
import AdminMenu from "../pages/admin/AdminMenu";
import Reservation from "../pages/admin/Reservation";
import ReservDone from "../pages/ReservDone" ;
import MessageSend from "../pages/MessageSend";
import AddCar from "../pages/admin/AddCar";
import Cars from "../pages/admin/Cars";
import ServicesList from "../components/UI/ServicesList";
import ServiceListSinglePage from "../components/UI/ServiceListSinglePage";
import CarAdded from "../pages/CarAdded";
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/sign" element={<Sign />} />

      <Route path="/services" element={<ServiceListSinglePage />} />
      <Route path="/offers" element={<CarListing />} />
      <Route path="/cars/:slug" element={<CarDetails />} />
      <Route path="/admin" element={<AdminMenu/>} />
      <Route path='/admin/users' element={<Users />}></Route>
      <Route path='/admin/addCar' element={<AddCar />}></Route>
      <Route path='/admin/cars' element={<Cars />}></Route>
      <Route path='/admin/reservation' element={<Reservation />} />
      <Route path='/user/done' element={<ReservDone />} />
      <Route path='/user/meesageSend' element={<MessageSend/>} />
      <Route path='/admin/carAdded' element={<CarAdded/>} />
      
      
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
