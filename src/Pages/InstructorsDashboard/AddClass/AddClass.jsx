import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import useAuth from '../../../Hooks/useAuth';

const AddClass = () => {
    const { user } = useAuth();

    const handleAdd = (e) => {
        console.log("Click");
    }

    return (
        <section>
            <SectionTitle
                subTitle="Add A Class"
            ></SectionTitle>

            <div className='lg:mx-14'>

                <form className='w-full space-y-7 mt-16' onSubmit={handleAdd}>
                    {/* Name and email */}
                    <div className='md:flex gap-4'>
                        <div className='md:w-1/2'>

                            <input type="text"
                                name='name'
                                defaultValue={user.displayName}
                                placeholder="Your Name" className="w-full inputField" />
                        </div>
                        <div className='md:w-1/2'>

                            <input type="text"
                                name='email'
                                defaultValue={user.email}
                                placeholder="Your email" className="w-full inputField" />
                        </div>

                    </div>
                    {/* name & photo */}
                    <div className='md:flex gap-4 mt-2'>
                        <div className='md:w-1/2'>
                            <input type="text"
                                name='className' placeholder="Class Name" className="w-full inputField" />
                        </div>
                        <div className='md:w-1/2'>

                            <input type="url" placeholder='Class Image' name="photo"  className="w-full inputField"/>
                        </div>
                    </div>

                    {/* sit & email */}
                    <div className='md:flex gap-4 mt-2'>
                        <div className='md:w-1/2'>
                            <input type="text"
                                name='sit' placeholder="Available Sit" className="w-full inputField" />
                        </div>
                        <div className='md:w-1/2'>

                            <input type="number" placeholder='Class Price' name="price"  className="w-full inputField"/>
                        </div>
                    </div>



                    <div className='w-full text-center'>
                    <input className='myBtn w-1/2 my-5 mx-auto' type="submit" value="Add Class" />
                    </div>
                </form>
            </div>
        </section>
    );
};

export default AddClass;