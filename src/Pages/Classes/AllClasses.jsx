import React, { useEffect, useState } from 'react';
import useClasses from '../../Hooks/useClasses';
import AllClass from './AllClass';
import { Slide } from 'react-awesome-reveal';
import { Helmet } from 'react-helmet';

const AllClasses = () => {
    const[classes] = useClasses();
    const[allClasses , setAllClasses] = useState([])
    useEffect(()=>{
        const approveClasses = classes.filter(apc=>apc.status === "approved")
        setAllClasses(approveClasses)
    },[classes])


    return (
        <section className='my-14'>
            <Helmet>
                <title>String | All Classes</title>
            </Helmet>
            <Slide triggerOnce delay={3}>
                <p className='text-center font-bold text-2xl text-secondary'>Explore Our Diverse Range of Music Classes: Ignite Your Passion for Learning</p>
                <p className='text-center my-3 font-semibold'>Welcome to our expansive collection of music classes! Prepare to immerse yourself in a world of musical exploration as you delve into our diverse range of offerings. From beginner-friendly courses to advanced workshops, we have something to suit every skill level and interest.</p>
            </Slide>
            <div className='flex items-center justify-center mt-14'>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                        allClasses.map(singleClass => <AllClass
                            key={singleClass._id}
                            singleClass={singleClass}
                        ></AllClass>)
                    }
                </div>

            </div>
        </section>
    );
};

export default AllClasses;