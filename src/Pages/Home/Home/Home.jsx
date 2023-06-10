import React from 'react';
import Banner from '../Banner/Banner';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstructors from '../PopularInstructors/PopularInstructors';
import Reviews from '../Reviews/Reviews';
import Blogs from '../Blogs/Blogs';

const Home = () => {
    return (
        <section>
            <Banner/>
            <PopularClasses />
            <PopularInstructors/>
            <Reviews />
            <Blogs/>
        </section>
    );
};

export default Home;