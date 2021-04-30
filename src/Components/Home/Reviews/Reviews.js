import React, { useState, useEffect } from 'react';
import { Card, Container } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner'

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('https://glacial-inlet-59026.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => {
            setReviews(data);
            setLoading(false)
        })
    }, [])


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
                { loading && <Spinner className="text-center" animation="border" variant="warning" /> }
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