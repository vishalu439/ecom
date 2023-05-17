
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button ,Card,Alert,Form,InputGroup} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { add } from './Store/cartSlice';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Navbar1 from './Components/Navbar';
import React, { useState } from 'react'
import Auth from './Components/Auth';
import Signup from './Components/Signup/Signup';
import Footer from './Components/Footer';

function App() {

 

  return (
    
      <div className='App'>
        
        
        <BrowserRouter>
        <Navbar1/>
        <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer/>
        </BrowserRouter>
        
      </div>
    
    
  )
}

export default App
