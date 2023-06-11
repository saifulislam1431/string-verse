import React from 'react';
import {useQuery} from "@tanstack/react-query";
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useNavigation } from 'react-router-dom';
import Loading from '../Pages/LoadingPage/Loading';

const useClassCart = () => {
    const navigation = useNavigation();
    if(navigation.state === "loading"){
        return <Loading></Loading>
    }
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