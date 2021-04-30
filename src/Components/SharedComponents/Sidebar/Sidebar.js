import React, { useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const Sidebar = () => {
    const [signedInUser, setSignedInUser] = useContext(UserContext)
    const [isAdmin, setIsAdmin] = useState(false)

    fetch(`https://glacial-inlet-59026.herokuapp.com/checkAdmin?email=${signedInUser.email || sessionStorage.getItem("email")}`)
                    .then(res => res.json())
                    .then(data => {
                        setIsAdmin(data)
                    })
    return (
        <div style={{height:"560px", backgroundColor:"#622569"}} className="col-md-4 p-5">
            {isAdmin ? <div>
                <p><Link className="text-white" to="/dashboard/orders">Order List</Link></p>
                <p><Link className="text-white" to="/dashboard/addService">Add Service</Link></p>
                <p><Link className="text-white" to="/dashboard/addAdmin">Make Admin</Link></p>
                <p><Link className="text-white" to="/dashboard/manageServices">Manage Services</Link></p>
            </div>
            :
            <div>
                <p><Link className="text-white" to="/dashboard/book">Book</Link></p>
                <p><Link className="text-white" to="/dashboard/myBookings">My Bookings</Link></p>
                <p><Link className="text-white" to="/dashboard/addReview">Review</Link></p>
            </div>}
        </div>
    );
};

export default Sidebar;