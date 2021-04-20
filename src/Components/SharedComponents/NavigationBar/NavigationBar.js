import React, { useContext, useEffect, useState } from 'react';
import { Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { UserContext } from '../../../App';
import firebase from "firebase/app";

const NavigationBar = () => {
    const [signedInUser, setSignedInUser] = useContext(UserContext)

    const logOut = () => {
        firebase.auth().signOut().then(() => {
            setSignedInUser({})
            sessionStorage.clear()
            alert("Logged Out Successfully")
        }).catch((error) => {
            // An error happened.
        });
    }

    return (
        <Navbar bg="dark" variant="light" sticky="top">
            <Navbar.Brand className="text-white" href="/home"><img src="https://img.icons8.com/cute-clipart/64/000000/roller-brush.png" />Painting</Navbar.Brand>
            <Nav className="mr-auto ms-5">
                <Nav.Link><Link className="text-white" to="/home"><Button className="text-white" variant="outline-secondary">Home</Button></Link></Nav.Link>
                <Nav.Link><Link className="text-white" to="/about"><Button className="text-white" variant="outline-secondary">About</Button></Link></Nav.Link>
                <Nav.Link><Link className="text-white" to="/dashboard"><Button className="text-white" variant="outline-secondary">Dashboard</Button></Link></Nav.Link>
                {
                    signedInUser.email || sessionStorage.getItem('email') ? <Nav.Link><Button onClick={logOut} variant="outline-danger">Logout</Button></Nav.Link>
                        :
                        <Nav.Link><Link to="/login"><Button variant="outline-success">Login</Button></Link></Nav.Link>
                }

            </Nav>
        </Navbar>
    );
};

export default NavigationBar;