import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import useClasses from '../../../Hooks/useClasses';

const AddClass = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const[, , refetch] = useClasses();

    const handleAdd = async(e) => {
        e.preventDefault()
        const form = e.target;
        const instructorName = form.name.value;
        const instructorEmail = form.email.value;
        const className = form.className.value;
        const price = form.price.value;
        const image = form.photo.value;
        const availableSeats = form.seat.value;
        const numberOfStudents = 0;
        const status = "pending";
        const newClass = {
            className,
            image,
            instructorName,
            instructorEmail,
            numberOfStudents,
            availableSeats,
            price,
            status
        }

        console.log(newClass);
        const res= await axiosSecure.post("/popular-classes", newClass )
        if(res.data.insertedId){
            refetch()
            Swal.fire({
                title: 'Success!',
                text: "Class added successfully, waiting for admin approval!",
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        }
        
    }

    return (
        <section>
            <SectionTitle
                subTitle="Add A Class"
            ></SectionTitle>

            <div className='lg:mx-14'>

                <form className='w-full space-y-7 mt-16' onSubmit={handleAdd}>
                    {/* Name and email */}
                    <div className='md:flex gap-4 space-y-3'>
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
                    <div className='md:flex gap-4 mt-2 space-y-3'>
                        <div className='md:w-1/2'>
                            <input type="text"
                                name='className' placeholder="Class Name" className="w-full inputField" />
                        </div>
                        <div className='md:w-1/2'>

                            <input type="url" placeholder='Class Image' name="photo"  className="w-full inputField"/>
                        </div>
                    </div>

                    {/* sit & email */}
                    <div className='md:flex gap-4 mt-2 space-y-3'>
                        <div className='md:w-1/2'>
                            <input type="text"
                                name='seat' placeholder="Available Seat" className="w-full inputField" />
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