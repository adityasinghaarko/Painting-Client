import React, {useState} from 'react';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';

const SimpleCardForm = ({basicInfo, setOverallInfo, overallInfo}) => {
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const stripe = useStripe();
  const elements = useElements();

  const handlePay = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setError(error.message)
      setSuccess('')
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      setOverallInfo({...basicInfo, paymentMethod, status:"Pending", orderPlaced: new Date()})
      sendBookingInfoToServer()
      setSuccess("Your Payment Was Successfull")
      setError('')
    }
  };

  const sendBookingInfoToServer = () => {
      fetch('http://localhost:5000/addBooking', {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(overallInfo)
        })
      .then(res => res.json())
      .then(data => {
          if(data){
              alert("Order placed successfully. We will reach to you soon")
          }
      })
      console.log(overallInfo)
  }

  return (
    <form className="mt-3" onSubmit={handlePay}>
      <CardElement />
      <button className="btn btn-primary mt-3" type="submit" disabled={!stripe}>
        Pay
      </button>
      {error && <p style={{color:"red"}}>{error}</p>}
      {success && <p style={{color:"green"}}>{success}</p>}
      {console.log(overallInfo)}
    </form>
  );
};

export default SimpleCardForm;