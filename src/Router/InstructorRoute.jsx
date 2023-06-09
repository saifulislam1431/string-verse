import React from 'react';
import useAuth from '../Hooks/useAuth';
import useInstructor from '../Hooks/useInstructor';
import { useNavigate } from 'react-router-dom';
import Loading from '../Pages/LoadingPage/Loading';

const InstructorRoute = ({children}) => {
    const { user, loading } = useAuth();
    const [isInstructor, isInstructorLoading] = useInstructor();
    const navigate = useNavigate();

    if (loading || isInstructorLoading) {
        return <Loading></Loading>
    }
    if(user && isInstructor){
        return children
    }
    return navigate("/")
};

export default InstructorRoute;