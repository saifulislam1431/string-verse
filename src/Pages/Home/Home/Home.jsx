import React from 'react';
import Banner from '../Banner/Banner';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstructors from '../PopularInstructors/PopularInstructors';

const Home = () => {
    return (
        <section>
            <Banner/>
            <PopularClasses />
            <PopularInstructors/>
        </section>
    );
};

export default Home;