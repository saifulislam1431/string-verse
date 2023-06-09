import React from 'react';
import useAuth from '../../Hooks/useAuth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useClassCart from '../../Hooks/useClassCart';
import useAdmin from '../../Hooks/useAdmin';
import useInstructor from '../../Hooks/useInstructor';

const AllClass = ({ singleClass }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [, refetch] = useClassCart();
  const { _id, className, image, instructorName, availableSeats, price } = singleClass;
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  const handleSelect = () => {
    if (!user) {
      Swal.fire({
        title: 'Please Sign In',
        text: "For selecting this class you have to sign in first",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sign In'
      }).then((result) => {
        if (result.isConfirmed) {
          //   return <Navigate to="/signIn" state={{from : location}} replace/>
          navigate("/signIn")
        }
      })
    }
    if (user && user?.email) {
      const addedData = {
        classId: _id,
        className,
        image,
        instructorName,
        price,
        email: user?.email
      }
      // console.log(addedData);
      fetch("http://localhost:5000/selected-classes-cart", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(addedData)
      })
      .then(res=>res.json())
      .then(data=>{
        if(data.insertedId){
          refetch();
          Swal.fire({
            title: 'Success!',
            text: 'Class Selected Successfully',
            icon: 'success',
            confirmButtonText: 'Go To Dashboard For Pay'
          })
        }
      })
    }
  }

  return (
    <div>
      <div className={`card shadow-xl ${availableSeats <= 0 ? "bg-red-900" : "bg-base-100"}`}>
        <figure><img src={image} alt="Classes" className='w-full lg:w-96 lg:h-64 h-52' /></figure>
        <div className="card-body">
          <h2 className={`card-title brandTitle  h-14`}>{className}</h2>
          <div>
            <p className={`font-medium ${availableSeats <= 0 ? "text-white" : "text-base"}`}>Instructor: <span className='font-semibold text-primary'>{instructorName}</span></p>
            <p className={`font-medium ${availableSeats <= 0 ? "text-white" : "text-base"}`}>Available Seat: <span className='font-semibold text-primary'>{availableSeats}</span></p>
            <p className={`font-medium ${availableSeats <= 0 ? "text-white" : "text-base"}`}>Price: <span className='font-semibold text-primary'>$ {price}</span></p>
          </div>
          <div className="card-actions justify-end">
            <button className="myBtn" disabled={availableSeats <= 0 || isAdmin || isInstructor? true : false} onClick={handleSelect}>Select</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllClass;