import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import useClassCart from '../../../Hooks/useClassCart';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const SelectedClasses = () => {
    const [classesCart, refetch] = useClassCart();
    const totalPrice = classesCart.reduce((sum, item) => item.price + sum, 0)

    const handleDelete = (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/selected-classes-cart/${id}`, {
                    method: "DELETE",
                    headers: {
                        authorization: `Bearer ${localStorage.getItem("access-token")}`
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: 'Deleted!',
                                text: 'Deleted Successfully',
                                icon: 'success',
                                confirmButtonText: 'Cool'
                            })
                        }
                    })
            }
        })

    }

    return (
        <section>
            <SectionTitle
                subTitle="My Selected Classes"></SectionTitle>
            <div className='my-10'>
                <div className="overflow-x-auto">
                    <table className="table text-base">
                        {/* head */}
                        <thead className='text-sm'>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Name</th>
                                <th>Instructor</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                classesCart.map((classes, index) => <tr key={classes?._id}>
                                    <td className='font-semibold'>
                                        {index + 1}
                                    </td>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-14 h-14">
                                                    <img src={classes?.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{classes?.className}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='font-semibold'>
                                        {classes?.instructorName}
                                    </td>
                                    <td className='font-bold'>$ {classes?.price}</td>
                                    <th>
                                        <button className='ml-2 py-1 bg-red-600 rounded-md px-2 text-white inline-flex items-center gap-2' onClick={() => handleDelete(classes?._id)}><FaTrashAlt /> Delete</button>
                                    </th>
                                </tr>)
                            }
                            <tr>
                                <td className='font-semibold'>

                                </td>
                                <td>

                                </td>
                                <td className='font-semibold'>

                                </td>
                                <td className='font-bold text-lg'>Total Price: <span className='text-primary'>$ {totalPrice}</span></td>
                                <th>
                                    <Link to="/dashboard/payment" className='myBtn'>pay</Link>
                                </th>
                            </tr>

                        </tbody>


                    </table>
                </div>
            </div>
        </section>
    );
};

export default SelectedClasses;