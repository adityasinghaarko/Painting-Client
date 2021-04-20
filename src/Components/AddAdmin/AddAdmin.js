import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../SharedComponents/Footer/Footer';
import Sidebar from '../SharedComponents/Sidebar/Sidebar';

const AddAdmin = () => {
    const [email, setEmail] = useState('')

    const handleAddAdmin = (e) => {
        fetch('http://localhost:5000/addAdmin', {
            method: 'GET',
            headers:{
                "Content-Type" : "application/json",
                email:email
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert("Admin added")
                }
            })
        e.preventDefault()
    }

    return (
        <div className="row">
            <Sidebar></Sidebar>
            <div className="col-md-8 mt-5">
                <Container style={{ backgroundColor: "#d6d4e0", borderRadius: "10px", padding: "20px" }}>
                    <h3>Add Admin</h3>
                    <form action="">
                        <div class="form-group">
                            <label for="serviceType">Service Type</label>
                            <input required type="text" onChange={e => setEmail(e.target.value)} class="form-control" name="serviceType" id="serviceType" placeholder="Email" />
                        </div>
                        <input onClick={handleAddAdmin} type="submit" value="Add" />
                    </form>
                </Container>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AddAdmin;