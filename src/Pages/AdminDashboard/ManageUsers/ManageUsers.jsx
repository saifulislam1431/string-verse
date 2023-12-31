import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { useNavigation } from 'react-router-dom';
import Loading from '../../LoadingPage/Loading';
import { Helmet } from 'react-helmet';

const ManageUsers = () => {
  const navigation = useNavigation();
  if(navigation.state === "loading"){
      return <Loading></Loading>
  }
    const [axiosSecure] = useAxiosSecure();
const isAdmin = false;
const isInstructor = false;


const{data: users = [] , refetch}=useQuery({
    queryKey:["users"],
    queryFn:async()=>{
        const res = await axiosSecure.get("/users")
        return res.data;
    }
})




const handleAdmin = async(user) =>{
    
    const res = await axiosSecure.patch(`/users/admin/${user?._id}`);
   if(res.data.modifiedCount > 0){
    refetch();
    Swal.fire({
        title: 'Success!',
        text: `${user?.name} is an Admin Now!`,
        icon: 'success',
        confirmButtonText: 'Cool'
      })
   }
    


}
const handleInstructor = async(user) =>{
    
    const res = await axiosSecure.patch(`/users/instructor/${user?._id}`);
   if(res.data.modifiedCount > 0){
    refetch();
    Swal.fire({
        title: 'Success!',
        text: `${user?.name} is an Instructor Now!`,
        icon: 'success',
        confirmButtonText: 'Cool'
      })
   }
    


}

    return (
        <section>
          <Helmet>
            <title>String | Dashboard-Manage Users</title>
          </Helmet>
            <SectionTitle
                subTitle="Manage Users"
            ></SectionTitle>

            <div className='lg:mx-10'>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th className='text-center'>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        users.map(user=><tr key={user._id}>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={user?.photo} alt="User" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{user?.name}</div>
                </div>
              </div>
            </td>
            <td className='font-semibold'>
{user?.email}
            </td>
            <td className='font-bold px-2 py-1 text-green-500'>{user?.role == "admin" ? "Admin" : user?.role == "instructor" ? "Instructor" : "Student"}</td>
            <th>
              <button className="myBtn" onClick={()=>handleAdmin(user)} disabled={user?.role === "admin" || user?.role === "instructor" ? true : false}>Make Admin</button>
              <button onClick={()=>handleInstructor(user)} className="myBtnSec ml-2" disabled={user?.role === "admin" || user?.role === "instructor" ? true : false}>Make Instructor</button>
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

export default ManageUsers;