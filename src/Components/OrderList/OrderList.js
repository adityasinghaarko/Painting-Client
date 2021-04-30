import React, { useContext, useEffect, useState } from 'react';
import { Container, Spinner, Table } from 'react-bootstrap';
import { UserContext } from '../../App';
import Footer from '../SharedComponents/Footer/Footer';
import Sidebar from '../SharedComponents/Sidebar/Sidebar';

const OrderList = () => {
    const [signedInUser, setSignedInUser] = useContext(UserContext)
    const [bookings, setBookings] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch(`https://glacial-inlet-59026.herokuapp.com/bookings?email=${signedInUser.email || sessionStorage.getItem("email")}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                authorization: sessionStorage.getItem('token')
            }
        })
            .then(res => res.json())
            .then(data => {
                setBookings(data);
                setLoading(false)
            })
    }, [])

    const BookingRow = ({ book }) => {

        return (
            <tr>
                <td>{book.service.title}</td>
                <td>{book.service.serviceType}</td>
                <td>{book.service.description}</td>
                <td>$ {book.service.budget}</td>
                <td> {book.name}</td>
                <td> {book.email}</td>
                <td> {book.status}</td>
            </tr>

        );
    }

    return (
        <div>
            <div className="row">
                <Sidebar></Sidebar>
                <div className="col-md-8">
                    <Container>
                        <Table striped bordered hover variant="light">
                            <thead>
                                <tr>
                                    <th>Service Title</th>
                                    <th>Service Type</th>
                                    <th>Description</th>
                                    <th>Budget</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    bookings.map(book => <BookingRow book={book}></BookingRow>)
                                }
                            </tbody>
                        </Table>
                        {loading && <Spinner className="text-center" animation="border" variant="warning" />}
                    </Container>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default OrderList;