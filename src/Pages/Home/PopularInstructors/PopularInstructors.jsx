import React from 'react';
import { Slide } from 'react-awesome-reveal';
import useInstructors from '../../../Hooks/useInstructors';
import PopularInstructor from './PopularInstructor';
import Loading from '../../LoadingPage/Loading';
import { useNavigation } from 'react-router-dom';

const PopularInstructors = () => {
    const[instructors] = useInstructors();

    return (
        <section className='my-14'>
            <Slide triggerOnce delay={3}>
  <p className='text-center font-bold text-2xl text-secondary'>Iconic Musicians in the Spotlight: Meet Our Popular Instructors</p>
  <p className='text-center my-3 font-semibold'>Unleash Brilliance: Meet Popular Artists! Get Enchanted! Inspiring Performances, Musical Maestros! Mesmerizing Melodies! Discover Excellence! Iconic Artists Spotlight! Immerse in Genius! Captivating Talent! Musical Icons Unveiled!</p>
</Slide>

<div className='flex items-center justify-center my-10'>
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
{
    instructors.slice(0,6).map((instructor , index)=><PopularInstructor
    key={instructor._id}
    instructor={instructor}
    index={index}
    ></PopularInstructor>)
}
</div>
</div>
        </section>
    );
};

export default PopularInstructors;