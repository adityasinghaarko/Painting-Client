import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import {Link} from "react-router-dom";

const NavigationBar = () => {
    return (
        <Navbar bg="dark" variant="light" sticky="top">
            <Navbar.Brand className="text-white" href="/home"><img src="https://img.icons8.com/cute-clipart/64/000000/roller-brush.png"/>Painting</Navbar.Brand>
            <Nav className="mr-auto ms-5">
                <Nav.Link><Link className="text-white" to="/home">Home</Link></Nav.Link>
                <Nav.Link><Link className="text-white" to="/bookings">Bookings</Link></Nav.Link>
                <Nav.Link><Link className="text-white" to="/about">About</Link></Nav.Link>
                <Nav.Link><Link className="text-white" to="/admin">Admin</Link></Nav.Link>
            </Nav>
        </Navbar>
    );
};

export default NavigationBar;