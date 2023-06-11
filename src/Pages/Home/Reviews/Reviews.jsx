import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Slide } from 'react-awesome-reveal';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from "react-icons/fa";
import axios from 'axios';
import Loading from '../../LoadingPage/Loading';
import { useNavigation } from 'react-router-dom';

const Reviews = () => {


    const { data: reviews = [] } = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const res = await axios.get("https://string-verse-server.vercel.app/reviews");
            return res.data;
        }
    })
    return (
        <section className='my-16'>
            <Slide triggerOnce delay={3}>
                <p className='text-center font-bold text-2xl text-secondary'>Hear What Our Students Have to Say</p>
                <p className='text-center my-3 font-semibold'>Discover the transformative experiences of our students as they share their journey of learning music at our school. Read their testimonials to gain insights into the exceptional instruction, supportive environment, and remarkable progress they have achieved.</p>
            </Slide>

                <div className='w-full'>
                    <div>
                        <Swiper
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            navigation={true}
                            modules={[Navigation, Autoplay]} className="mySwiper">

                            {
                                reviews.map(review =>
                                    <SwiperSlide key={review?._id}>
                                        <div  className=' flex items-center justify-center flex-col text-center my-14 space-y-4 px-8 lg:px-16'>
                                            <Rating
                                                style={{ maxWidth: 180 }}
                                                value={review.rating}
                                                readOnly
                                            />
                                            <FaQuoteLeft className='w-14 h-14 text-primary' />
                                            <p>{review.comment}</p>
                                            <h1 className='text-[#CD9003] font-semibold'>{review.studentName}</h1>
                                        </div>
                                    </SwiperSlide>
                                )
                            }


                        </Swiper>
                    </div>
                </div>

        </section>
    );
};

export default Reviews;