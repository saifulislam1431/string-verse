import React,{useState} from 'react';
import { Fade, Slide } from "react-awesome-reveal";
import useClasses from '../../../Hooks/useClasses';
import PopularClass from './PopularClass';


const PopularClasses = () => {
    const[classes] = useClasses();

    return (
        <section className='my-14'>

<Slide triggerOnce delay={3}>
  <p className='text-center font-bold text-2xl text-secondary'>Unleash Your Musical Potential with Our Hottest Classes</p>
  <p className='text-center my-3 font-semibold'>Unlock Your Musical Potential with our Hottest Classes! Join Now and Elevate Your Skills!</p>
</Slide>

<div className='flex items-center justify-center'>
<div className='my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
{
    classes.slice(0,6).map(item=><PopularClass
    key={item._id}
    item={item}
    ></PopularClass>)
}
</div>
</div>
        </section>
    );
};

export default PopularClasses;