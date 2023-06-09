import React from 'react';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useAdmin = () => {
    const{user , loading} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const{data : isAdmin , isLoading: isAdminLoading}=useQuery({
        queryKey:["isAdmin" , user?.email],
        enabled: !loading,
        queryFn: async()=>{
            if(user){
                const res= await axiosSecure.get(`/users/admin/${user?.email}`)
            // console.log(res.data.admin);
            return res.data.admin;
            }
        }
    })
    return[isAdmin , isAdminLoading]
};

export default useAdmin;