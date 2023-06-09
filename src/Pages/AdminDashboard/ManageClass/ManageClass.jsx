import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import useClasses from '../../../Hooks/useClasses';

const ManageClass = () => {
    const[classes, ,refetch] = useClasses();
    // console.log(classes);
    return (
        <section>
            <SectionTitle
            subTitle="Manage Classes"
            ></SectionTitle>

            <div className='lg:mx-10'>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Class Image</th>
        <th>Class name</th>
        <th>Instructor name</th>
        <th>Instructor email</th>
        <th>Available seats</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
      classes.map(singleClass=><tr key={singleClass._id}>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-16 h-16">
                <img src={singleClass?.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td className='font-semibold'>
            {singleClass?.className}
        </td>
        <td className='font-semibold'>
        {singleClass?.instructorName}
        </td>
        <td className='font-semibold'>{singleClass?.instructorEmail}</td>
        <td className='font-semibold text-center'>{singleClass?.availableSeats}</td>
        <td className='font-semibold text-center'>${singleClass?.price}</td>
        <th className='flex flex-col items-start justify-start'>
          <button className='myBtn' disabled={singleClass?.status === "approved" || singleClass?.status === "deny" ? true :false}>Approve</button>
          <button className='myBtnSec' disabled={singleClass?.status === "approved" || singleClass?.status === "deny" ? true :false}>Deny</button>
          <button className='myBtnThr' >Feedback</button>
        </th>
      </tr>)
      }

    </tbody>

    
  </table>
</div>
            </div>
        </section>
    );
};

export default ManageClass;