import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import Loading from '../Pages/LoadingPage/Loading';
import { useNavigation } from 'react-router-dom';

const useInstructor = () => {

    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const {data: isInstructor, isLoading: isInstructorLoading } = useQuery({
        queryKey: ["isInstructor", user?.email],
        enabled: !loading && !!user?.email,
        queryFn: async () => {

                const res = await axiosSecure.get(`/users/instructor/${user?.email}`)
                return res.data.instructor

        }
    })
    return[isInstructor , isInstructorLoading]
};

export default useInstructor;