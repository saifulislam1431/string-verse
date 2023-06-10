import React from 'react';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import useAuth from '../../Hooks/useAuth';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import useAdmin from '../../Hooks/useAdmin';
import useInstructor from '../../Hooks/useInstructor';

const UserProfile = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const[isAdmin] = useAdmin()
    const [isInstructor] = useInstructor()


    const { data: userData = {}, refetch } = useQuery({
        queryKey: ["userData", user?.email],
        queryFn: async () => {
            if (user) {
                const res = await axiosSecure.get(`/users/profile?email=${user?.email}`)
                return res.data;
            }
        }
    })


    return (
        <section>
            <SectionTitle
                subTitle={`Welcome ${userData.name}!`}
            ></SectionTitle>
            <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={userData?.photo} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-4xl font-bold"> Name: <span className='text-primary'>{userData?.name}</span></h1>
      <h1 className="text-xl py-4 font-bold"> Email: {userData?.email}</h1>
      <Link to={isAdmin ? "/dashboard/manageClass" : isInstructor ? "/dashboard/myClass" : "/dashboard/selectedClass"} className='myBtn font-medium'>
      See Dashboard
      </Link>
    </div>
  </div>
</div>
            </div>
        </section>
    );
};

export default UserProfile;