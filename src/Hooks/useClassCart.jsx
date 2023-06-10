import React from 'react';
import {useQuery} from "@tanstack/react-query";
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useClassCart = () => {
    const{user , loading} = useAuth();
    const[axiosSecure] = useAxiosSecure();

    const{data: classesCart =[] ,refetch}=useQuery({
        queryKey:["selectedClasses" , user?.email],
        enabled: !loading && !!user?.email,
        queryFn: async()=>{
            const res = await axiosSecure(`/selected-classes-cart?email=${user?.email}`)
            return res.data;
        }
    })
    return [classesCart , refetch]
};

export default useClassCart;