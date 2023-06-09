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

            <div>
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
        <th>Status</th>
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
        <td className='font-semibold text-center'>{singleClass?.status}</td>
        <th className='flex flex-col items-start justify-start'>
          <button className='myBtn' disabled={singleClass?.status === "approved" || singleClass?.status === "deny" ? true :false}>Approve</button>
          <button className='myBtnSec' disabled={singleClass?.status === "approved" || singleClass?.status === "deny" ? true :false}>Deny</button>
          {/* <button className='myBtnThr' >Feedback</button> */}
          <label htmlFor="my_modal_6" className="myBtnThr">Feedback</label>
        </th>
      </tr>)
      }

    </tbody>

  </table>
</div>
            </div>
            
    <input type="checkbox" id="my_modal_6" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Write Feedback</h3>
    <textarea className='inputField mt-4' name="message" id="" cols="10" rows="10" placeholder='Feedback'></textarea>
    <div className="modal-action">
      <label htmlFor="my_modal_6" className="myBtnSec">Send</label>
    </div>
  </div>
</div>
        </section>
    );
};

export default ManageClass;