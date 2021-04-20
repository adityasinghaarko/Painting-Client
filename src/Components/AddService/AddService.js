import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../SharedComponents/Footer/Footer';
import Sidebar from '../SharedComponents/Sidebar/Sidebar';

const AddService = () => {
    const [info, setInfo] = useState({})
    const [file, setFile] = useState(null)

    const handleBlur = e => {
        const newInfo = {...info}
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = e => {
        setFile(e.target.files[0])
    }

    const handleSubmit = (e) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('title', info.title);
        formData.append('serviceType', info.serviceType);
        formData.append('description', info.description);
        formData.append('budget', info.budget);

        fetch('http://localhost:5000/addService',{
            method: 'POST',
            body:formData
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                alert('Service Added')
            }
        })
        e.preventDefault()
    }

    return (
        <div className="row">
            <Sidebar></Sidebar>
            <div className="col-md-8">
                <h3>Add Service</h3>
                <Container style={{ backgroundColor: "#d6d4e0", borderRadius: "10px", padding:"30px" }}>
                    <form onSubmit={handleSubmit}>
                        <div class="form-group">
                            <label for="title">Service Title</label>
                            <input required onBlur={handleBlur} type="text" class="form-control" name="title" id="title" aria-describedby="emailHelp" placeholder=" Title" />
                        </div>
                        <div class="form-group">
                            <label for="serviceType">Service Type</label>
                            <input required onBlur={handleBlur} type="text" class="form-control" name="serviceType" id="serviceType" placeholder="Type" />
                        </div>
                        <div class="form-group">
                            <label for="description">Description</label>
                            <input required onBlur={handleBlur} type="text" class="form-control" name="description" id="description" placeholder="Description" />
                        </div>
                        <div class="form-group">
                            <label for="budget">Budget</label>
                            <input required onBlur={handleBlur} type="number" class="form-control" name="budget" id="budget" placeHolder="In Dollar" />
                        </div>
                        <div class="form-check">
                            <label class="form-check-label" for="file">Upload an Image</label><br/>
                            <input required onChange={handleFileChange} type="file" class="form-check-input" id="file" /><br/>
                        </div>
                        <br/>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </Container>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AddService;