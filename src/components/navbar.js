import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function NavigationBar(props){
    
        return(
            <div>
            <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/home" style={{color:'lightcoral'}}>iAmbulance</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
            <Nav>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/signUp">Sign Up</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Navbar>
            </div>
            );

    }
    
    export default NavigationBar;