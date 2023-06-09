import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const ManageUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    const [users , setUsers] = useState([]);
const isAdmin = false;
const isInstructor = false;

    useEffect(() => {
        axiosSecure.get("/users")
            .then(res => setUsers(res.data))
    }, [])
    return (
        <section>
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
            <td className='font-bold px-2 py-1 text-green-500'>{isAdmin ? "Admin" : isInstructor ? "Instructor" : "Student"}</td>
            <th>
              <button className="myBtn">Make Admin</button>
              <button className="ml-2 px-3 py-1 border border-accent rounded-md text-accent hover:bg-accent hover:text-white">Make Instructor</button>
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