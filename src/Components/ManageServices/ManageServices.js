import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import Footer from '../SharedComponents/Footer/Footer';
import Sidebar from '../SharedComponents/Sidebar/Sidebar';
import Spinner from 'react-bootstrap/Spinner'

const ManageServices = () => {
    const [services, setServices] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('https://glacial-inlet-59026.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                setServices(data);
                setLoading(false)
            })
    }, [])

    const ServiceRow = ({ service }) => {

        const deleteService = () => {
            fetch(`https://glacial-inlet-59026.herokuapp.com/${service._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        alert('Service deleted successfully. Refresh the page to see updated service list')
                    }
                })
        }

        return (
            <tr>
                <td>{service.title}</td>
                <td>{service.serviceType}</td>
                <td>{service.description}</td>
                <td>$ {service.budget}</td>
                <td><button onClick={deleteService}>Delete</button></td>
            </tr>

        );
    }

    return (
        <div className="row">
            <Sidebar></Sidebar>
            <div className="col-md-8">
                <Container>
                    <Table striped bordered hover variant="danger">
                        <thead>
                            <tr>
                                <th>Service Title</th>
                                <th>Service Type</th>
                                <th>Description</th>
                                <th>Budget</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                services.map(service => <ServiceRow service={service}></ServiceRow>)
                            }
                        </tbody>
                    </Table>
                    {loading && <Spinner className="text-center" animation="border" variant="warning" />}
                </Container>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ManageServices;