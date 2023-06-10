import React from 'react';
import Lottie from "lottie-react";
import aniData from "../../assets/animation/50479-sleeping-404.json";
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const ErrorPage = () => {
    return (
        <section className='flex items-center justify-center min-h-[calc(100vh-100px)]'>

            <div>
<div>
    <Lottie animationData={aniData} loop={true} className='w-96'/>
</div>
<div className='text-center my-10'>
    <h1 className='font-bold text-base text-secondary mb-3'>Server is sleeping...!</h1>
    <Link to="/">
    <button  className='myBtn inline-flex items-center gap-2'><FaArrowLeft className='h-5 w-5'/> Back Home</button>
    </Link>
</div>
            </div>

        </section>
    );
};

export default ErrorPage;