import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import CheckOut from './CheckOut';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import useClassCart from '../../../Hooks/useClassCart';
import Loading from '../../LoadingPage/Loading';
import { useNavigation } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const stripePromise = loadStripe(`${import.meta.env.VITE_PAYMENT_PK}`)

const Payment = () => {
    const navigation = useNavigation();
    if(navigation.state === "loading"){
        return <Loading></Loading>
    }
    const [classesCart , refetch] = useClassCart();
    const total = classesCart.reduce((sum , item)=> item.price + sum , 0)
    const price = parseInt(total)
    return (
        <section>
            <Helmet>
                <title>String | Payment</title>
            </Helmet>
            <SectionTitle
                subTitle="Payment"
            ></SectionTitle>

            <div className='my-14 w-3/4 lg:w-1/2 mx-auto'>
                <Elements stripe={stripePromise}>
                    <CheckOut price={price} cart={classesCart} refetch={refetch}></CheckOut>
                </Elements>
            </div>
        </section>
    );
};

export default Payment;