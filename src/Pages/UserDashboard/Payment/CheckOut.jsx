import { CardElement, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState, useEffect } from 'react';
import useAuth from '../../../Hooks/useAuth';
import "./PaymentCss/Payment.css"
import Loading from '../../LoadingPage/Loading';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { useNavigation } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const CheckOut = ({ price, cart, refetch }) => {
    const navigation = useNavigation();
    if(navigation.state === "loading"){
        return <Loading></Loading>
    }
    const [axiosSecure] = useAxiosSecure()
    const { user } = useAuth();
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState("");
    const [clientSecret, setClientSecret] = useState("");
    const [process, setProcess] = useState(false)

    useEffect(() => {
        if (price > 0) {
            axiosSecure.post("/create-payment-intent", { price })
                .then(res => {
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [price, axiosSecure])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error } = await stripe.createPaymentMethod({
            type: "card",
            card
        })
        if (error) {
            setCardError(error.message)
        }
        else {
            setCardError("")
        }
        setProcess(true);

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || "Unknown",
                    name: user?.displayName || "Anonymous"
                }
            }
        })
        if(confirmError){
            setCardError(confirmError)
        }
        if(paymentIntent?.status === "succeeded"){
            const enrollData = {
                name: user?.displayName,
                email: user?.email,
                price,
                transactionId: paymentIntent.id,
                totalOrders: cart?.length,
                classId: cart?.map(item=>item.classId),
                selectedClasses: cart?.map(item => item._id),
                className:cart?.map(item => item.className),
                date: new Date(),
                orderStatus: "enrolled"
            }

            fetch("https://string-verse-server.vercel.app/payment", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    authorization: `Bearer ${localStorage.getItem("access-token")}`
                },
                body: JSON.stringify(enrollData)

            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.result.insertedId && data.deletedRes.deletedCount > 0) {
                        refetch();
                        Swal.fire({
                            title: 'Success!',
                            text: `Payment succeeded with id ${paymentIntent.id}`,
                            icon: 'success',
                            confirmButtonText: 'Ok'
                        })
                    }
                })
        }
        setProcess(false)


    }

    return (
        <section>
            <Helmet>
                <title>String | Check Out</title>
            </Helmet>
            <form onSubmit={handleSubmit} className='flex flex-col'>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },

                        },
                    }}
                />

                <button className='myBtn' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>

            </form>
            {
                cardError && <p className='font-semibold text-red-600'>{cardError}</p>
            }
            {
                process && <Loading></Loading>
            }
        </section>
    );
};

export default CheckOut;