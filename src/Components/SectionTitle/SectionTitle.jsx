import React from 'react';
import logo from "../../assets/logo/plectrum (1).png"

const SectionTitle = ({ subTitle }) => {
    return (
        <section className='my-14 text-center'>
            <div className="inline-flex items-center gap-2">
                <img src={logo} alt="Logo" className='w-12' />
                <span className='brandTitle text-primary'>String</span>
            </div>
            <div>
                <h1 className='brandTitle text-2xl underline'>{subTitle}</h1>
            </div>
        </section>
    );
};

export default SectionTitle;