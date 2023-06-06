import React from 'react';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';
import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <section>
            <Navbar/>
            <Outlet />
            <Footer />
        </section>
    );
};

export default Main;