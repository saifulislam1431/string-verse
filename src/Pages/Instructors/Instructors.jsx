import React from 'react';
import useInstructors from '../../Hooks/useInstructors';
import { Slide } from 'react-awesome-reveal';
import Instructor from './Instructor';
import Loading from '../LoadingPage/Loading';
import { useNavigation } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Instructors = () => {

    const [instructors] = useInstructors()
    return (
        <section className='my-14'>
            <Helmet>
                <title>String | Instructors</title>
            </Helmet>
            <Slide triggerOnce delay={3}>
                <p className='text-center font-bold text-2xl text-secondary'>Meet Our Talented Instructors: Discover a World of Musical Expertise</p>
                <p className='text-center my-3 font-semibold'>Welcome to our vibrant world of talented instructors! Prepare to embark on an exciting musical journey as you get to know our exceptional team of instructors.</p>
            </Slide>
            <div className='flex items-center justify-center mt-10'>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {
                        instructors.map(instructor => <Instructor
                            key={instructor._id}
                            instructor={instructor}
                        ></Instructor>)
                    }
                </div>

            </div>
        </section>
    );
};

export default Instructors;