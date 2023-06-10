import React, { useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import useClasses from '../../../Hooks/useClasses';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const ManageClass = () => {
  const [classes, , refetch] = useClasses();
  const [axiosSecure] = useAxiosSecure();
  const [message , setMessage] = useState("");

  // console.log(classes);
  const handleApproved = async (item) => {
    // console.log(item);
    const updateData = {
      status: "approved"
    }
    // console.log(updateData);

    const res = await axiosSecure.patch(`/popular-classes/${item?._id}`, updateData)
    if (res.data.modifiedCount > 0) {
      refetch()
      Swal.fire({
        title: 'Success!',
        text: "Class Approved",
        icon: 'success',
        confirmButtonText: 'Cool'
      })
    }
  }

  const handleDeny = async (item) => {
    // console.log(item);
    const updateData = {
      status: "deny"
    }
    // console.log(updateData);

    const res = await axiosSecure.patch(`/popular-classes/${item?._id}`, updateData)
    if (res.data.modifiedCount > 0) {
      refetch()
      Swal.fire({
        title: 'Success!',
        text: "Class Deny",
        icon: 'success',
        confirmButtonText: 'Cool'
      })
    }
  }

  const handleText = e => {
    const text = e.target.value;
    setMessage(text)
  }


  const handleFeedback = async(id) => {
    // console.log(id)
    const item = classes.find(cI=>cI._id === id);
    console.log(item); 

    const updateData = {
      status: item?.status,
      feedback: message ,
    }
    console.log(updateData);

    const res = await axiosSecure.patch(`/popular-classes/${id}`, updateData)
    if (res.data.modifiedCount > 0) {
      refetch()
      Swal.fire({
        title: 'Success!',
        text: "Feedback Sent",
        icon: 'success',
        confirmButtonText: 'Cool'
      })
    }

  }





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
                classes.map(singleClass => <tr key={singleClass._id}>
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
                    <button onClick={() => handleApproved(singleClass)} className='myBtn' disabled={singleClass?.status === "approved" || singleClass?.status === "deny" ? true : false}>Approve</button>

                    <button onClick={() => handleDeny(singleClass)} className='myBtnSec' disabled={singleClass?.status === "approved" || singleClass?.status === "deny" ? true : false}>Deny</button>
                    {/* <button className='myBtnThr' >Feedback</button> */}
                    <label htmlFor={`my_modal_${singleClass._id}`} className="myBtnThr">Feedback</label>
                    <input type="checkbox" id={`my_modal_${singleClass._id}`} className="modal-toggle" />
                    <div className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg">Write Feedback</h3>
                        <textarea className='inputField mt-4' name="message" cols="10" rows="10" placeholder='Feedback'
                          onChange={handleText}
                        ></textarea>
                        <div className="modal-action">
                          <label htmlFor={`my_modal_${singleClass._id}`} className="myBtnSec"  onClick={() => handleFeedback(singleClass?._id)}>Send</label>
                        </div>
                      </div>
                    </div>                    
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