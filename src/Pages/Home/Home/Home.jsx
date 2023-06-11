import React from 'react';
import Banner from '../Banner/Banner';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstructors from '../PopularInstructors/PopularInstructors';
import Reviews from '../Reviews/Reviews';
import Blogs from '../Blogs/Blogs';
import { Helmet } from 'react-helmet';
import Loading from '../../LoadingPage/Loading';
import { useNavigation } from 'react-router-dom';

const Home = () => {

    return (
        <section>
            <Helmet>
                <title>String | Home</title>
            </Helmet>
            <Banner/>
            <PopularClasses />
            <PopularInstructors/>
            <Reviews />
            <Blogs/>
        </section>
    );
};

export default Home;