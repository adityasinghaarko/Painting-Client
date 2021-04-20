import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../SharedComponents/Sidebar/Sidebar';
import Footer from '../SharedComponents/Footer/Footer';


const AddReview = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data, event) => {
        fetch("http://localhost:5000/addReview", {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                alert("Thanks for your review")
            }
        })
    };

    return (
        <div>
            <div className="row">
                <Sidebar />
                <form onSubmit={handleSubmit(onSubmit)} className="col-md-8">
                <input class="form-control" placeholder="Your Name" required defaultValue={sessionStorage.getItem("name")} {...register("name", { required: true })} /> <br />
                <input class="form-control" placeholder="Your Profession" required {...register("profession", { required: true })} /> <br />
                <input class="form-control" placeholder="Description" required {...register("description", { required: true })} /> <br />
                
                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" />
            </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AddReview;