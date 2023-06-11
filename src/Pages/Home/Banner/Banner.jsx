import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {


    // https://i.ibb.co/JqRSGp7/banner1.jpg
    // https://i.ibb.co/t2ThRd3/banner2.jpg
    // https://i.ibb.co/Ss856Zx/banner3.jpg
    // https://i.ibb.co/GPyQzdx/banner5.jpg

    return (
        <div>
 <Carousel className='text-center' autoPlay={true} infiniteLoop={true} showThumbs={false}>
                <div className='relative'>
                    <img src="https://i.ibb.co/JqRSGp7/banner1.jpg" className='h-96'/>
                    <div className='absolute top-0 w-full h-full bg-primary bg-opacity-50 flex justify-center items-center'>
                        <h1 className='text-white brandTitle font-extrabold bg-primary px-9 py-10 bg-opacity-50 shadow-lg rounded-lg'>"When you play the guitar, you paint the air with melodies, and the world becomes your canvas."</h1>
                    </div>
                </div>
                <div className='relative'>
                    <img src="https://i.ibb.co/t2ThRd3/banner2.jpg" className='h-96'/>
                    <div className='absolute top-0 w-full h-full bg-primary bg-opacity-50 flex justify-center items-center'>
                         <h1 className='text-white brandTitle font-extrabold bg-primary px-9 py-10 bg-opacity-50 shadow-lg rounded-lg'>"Drumming is a conversation, where each beat speaks volumes without saying a word."</h1>
                    </div>

                </div>
                <div className='relative'>
                    <img src="https://i.ibb.co/Ss856Zx/banner3.jpg" className='h-96'/>
                    <div className='absolute top-0 w-full h-full bg-primary bg-opacity-50 flex justify-center items-center'>
                    <h1 className='text-white brandTitle font-extrabold bg-primary px-9 py-10 bg-opacity-50 shadow-lg rounded-lg'>"The bass is the heartbeat of the music, providing a solid foundation that drives the rhythm forward."</h1>
                    </div>
                </div>
                <div className='relative'>
                    <img src="https://i.ibb.co/CJyrjD6/banner4.jpg" className='h-96'/>
                    <div className='absolute top-0 w-full h-full bg-primary bg-opacity-50 flex justify-center items-center'>
                    <h1 className='text-white brandTitle font-extrabold bg-primary px-9 py-10 bg-opacity-50 shadow-lg rounded-lg'>"Playing the piano is like painting with sound, creating vibrant and harmonious masterpieces."</h1>
                    </div>
                </div>
                <div className='relative'>
                    <img src="https://i.ibb.co/GPyQzdx/banner5.jpg" className='h-96'/>
                    <div className='absolute top-0 w-full h-full bg-primary bg-opacity-50 flex justify-center items-center'>
                    <h1 className='text-white brandTitle font-extrabold bg-primary px-9 py-10 bg-opacity-50 shadow-lg rounded-lg'>"In the hands of a flutist, the flute becomes a conduit for emotions, expressing the ethereal and the delicate."</h1>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;