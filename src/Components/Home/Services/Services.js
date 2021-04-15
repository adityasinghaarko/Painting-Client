import React from 'react';
import { Card, Container } from 'react-bootstrap';
import dummyImg from '../../../Images/10144.jpg'

const Services = () => {
    const services = [
        {
            title: 'Wall Painting',
            serviceType: 'Residential Interior Painting',
            description: '1 Bedroom',
            budget: 75
        },
        {
            title: 'Wall Painting',
            serviceType: 'Residential Interior Painting',
            description: '2 Bedroom',
            budget: 130
        },
        {
            title: 'Wall Painting',
            serviceType: 'Residential Interior Painting',
            description: '4 Bedroom',
            budget: 290
        },
        {
            title: 'Wall Painting',
            serviceType: 'Residential Interior Painting',
            description: '4 Bedroom',
            budget: 290
        },
        {
            title: 'Water Damage Repairing + Painting',
            serviceType: 'Residential Interior Repair',
            description: 'For Each Side Wall',
            budget: 100
        }

    ]

    const ServiceCard = ({ service }) => {
        return (
            <Card className="col-md-4 mt-3">
                <Card.Img variant="top" src={dummyImg} />
                <Card.Body>
                    <Card.Title>{service.title}</Card.Title>
                    <Card.Text>
                        <h6>{service.serviceType}</h6><br />
                        <p>{service.description}</p>
                        <h3>Budget: ${service.budget}</h3>
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }

    return (
        <section className="pt-5">
            <Container>
            <h1 className="text-center">Our Services</h1>
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