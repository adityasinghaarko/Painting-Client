import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Container } from 'react-bootstrap';
import Footer from '../SharedComponents/Footer/Footer';
import Sidebar from '../SharedComponents/Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { UserContext } from "../../App"
import SimpleCardForm from './SimpleCardForm/SimpleCardForm';

const Book = () => {
    const [signedInUser, setSignedInUser] = useContext(UserContext)
    const [overallInfo, setOverallInfo] = useState({})
    const [basicInfo, setBasicInfo] = useState({})
    const [service, setService] = useState({})
    const [basicInfoSubmited, setBasicInfoSubmited] = useState(false)
    const { serviceId } = useParams()
    const stripePromise = loadStripe('pk_test_51IeH0WJNP5L4tiFTROU1brmZ30A506RE4ApqkPTaekhsVQM3cq9n3DasHKu9ByNNNotAmJc61TuUT2iOXcdgN95B00drwm5nme');


    useEffect(() => {
        fetch(`https://glacial-inlet-59026.herokuapp.com/service/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data[0]))
    }, [])

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data, event) => {
        const newBasicInfo = { ...data, service }
        console.log(newBasicInfo)
        setBasicInfo(newBasicInfo);
        setBasicInfoSubmited(true)
        event.preventDefault()
    };


    return (
        <div className="row">
            <Sidebar></Sidebar>
            <div className="col-md-8">
                <Container>
                    { basicInfoSubmited ?
                        <Elements stripe={stripePromise}>
                            <p>Your Service Charge Will Be ${basicInfo.service.budget}</p>
                            <SimpleCardForm overallInfo={overallInfo} setOverallInfo={setOverallInfo} basicInfo={basicInfo} ></SimpleCardForm>
                        </Elements>
                        :
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label htmlFor="name">Name</label>
                            <input id="name" class="form-control" placeholder="Your Name" required defaultValue={signedInUser.name || sessionStorage.getItem("name")} {...register("name", { required: true })} /> <br />
                            <label htmlFor="email">Email</label>
                            <input id="email" class="form-control" placeholder="Your Email" required defaultValue={signedInUser.email || sessionStorage.getItem("email")} {...register("email", { required: true })} /> <br />
                            <label htmlFor="service">Your Service</label>
                            <input id="service" class="form-control" value={`${service.title} For ${service.description}`} /> <br />
                            {errors.exampleRequired && <span>This field is required</span>}

                            <input type="submit" />
                        </form>}
                </Container>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Book;