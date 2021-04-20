import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Footer from '../SharedComponents/Footer/Footer';
import Sidebar from '../SharedComponents/Sidebar/Sidebar';
import Spinner from 'react-bootstrap/Spinner'

const MyBookings = () => {
    const [signedInUser, setSignedInUser] = useContext(UserContext)
    const [bookings, setBookings] = useState([])
    const [loading, setLoading] = useState(false)


    const BookingCard = ({ booking }) => {
        return (
            <div className="col-md-4" style={{width:"18rem", borderRadius:"10px", border:"2px solid cyan", padding:"30px", margin:"10px"}}>
                <h4>{booking.service.title}</h4>
                <h5>{booking.service.description}</h5>
                <div className="row">
                    <div className="col-md-6">
                    <p>Paid : $ {booking.service.budget}</p>
                    </div>
                    <div className="col-md-6">
                        <button className="btn btn-warning" disabled>{booking.status}</button>
                    </div>
                </div>
            </div>
        )
    }

    useEffect(() => {
        setLoading(true)
        fetch(`http://localhost:5000/bookings?email=${signedInUser.email || sessionStorage.getItem("email")}`, {
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

    return (
        <div className="row">
            <Sidebar></Sidebar>
            <div className="col-md-8">
                <h3>Your Bookings</h3>
                {loading && <Spinner className="text-center" animation="border" variant="warning" />}
                <div className="row">
                {
                    bookings.map(booking => <BookingCard booking={booking}></BookingCard>)
                }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MyBookings;