import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner'

const Services = () => {
    const [services, setServices] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setServices(data);
                setLoading(false)
            })
    }, [])

    const ServiceCard = ({ service }) => {
        return (
            <Card className="col-md-4 mt-3">
                <Card.Img variant="top" src={service.image} />
                <Card.Body>
                    <Card.Title>{service.title}</Card.Title>
                    <Card.Text>
                        <h6>{service.serviceType}</h6><br />
                        <p>{service.description}</p>
                        <h3>${service.budget}</h3>
                        <button className="btn btn-warning"><Link to={'dashboard/book/'+ service._id}>Book</Link></button>
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }

    return (
        <section className="pt-5">
            <Container>
                <h1 className="text-center">Our Services</h1>
                { loading && <Spinner className="text-center" animation="border" variant="warning" /> }
                <div className="row pt-3">
                    {
                        services.map(service => <ServiceCard service={service}></ServiceCard>)
                    }
                </div>
            </Container>
        </section>
    );
};

export default Services;