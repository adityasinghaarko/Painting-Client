import React from 'react';
import { Card, Container } from 'react-bootstrap';

const Reviews = () => {
    const reviews = [
        {
            name: 'Aditya Singha',
            profession: "Doctor",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus blanditiis laboriosam assumenda!'
        },
        {
            name: "Peter Parkour",
            profession: "Doctor",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus blanditiis laboriosam assumenda!"
        },
        {
            name: "John Smith",
            profession: "Doctor",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus blanditiis laboriosam assumenda!"
        }
    ]

    const ReviewCard = ({ review }) => {
        return (
            <Card style={{border:"0"}} className="col-md-4 mb-2 shadow-lg">
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <h6>{review.description}</h6>
                        <footer className="blockquote-footer">
                            <h2>{review.name}</h2>
                            <h5>{review.profession}</h5>
                        </footer>
                    </blockquote>
                </Card.Body>
            </Card>
        )
    }

    return (
        <section className="mt-5">
            <Container className="mt-5">
                <h1 className="text-center">Reviews</h1>
                <div className="row">
                    {
                        reviews.map(review => <ReviewCard review={review}></ReviewCard>)
                    }
                </div>
            </Container>
        </section>
    );
};

export default Reviews;