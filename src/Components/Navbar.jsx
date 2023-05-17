import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import "./Navbar.css"
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Badge from "react-bootstrap/Badge";
import LogoutButton from './Login/Login';

export default function Navbar1() {
  const items=useSelector((state)=>state.cart)
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
    <Navbar.Brand href="#home">Redux Store</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Link className="nav-link" to="/home">
          Home
        </Link>
        <Link className="nav-link" to="/cart">
          Cart
          <Badge bg="warning" className="ms-2">
            {items.length}
          </Badge>
        </Link>
        <Link className="nav-link" to="/">
          Logout
        </Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  )
}
