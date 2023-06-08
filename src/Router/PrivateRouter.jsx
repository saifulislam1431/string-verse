import React from 'react';
import useAuth from '../Hooks/useAuth';
import Loading from '../Pages/LoadingPage/Loading';
import Swal from 'sweetalert2';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouter = ({children}) => {
    const {user , loading} = useAuth();
    const location = useLocation()
    if(loading){
        return <Loading></Loading>
    }
    if(!user){
        // Swal.fire({
        //     title: 'Please Sign In',
        //     text: "For view this page you have to sign in first",
        //     icon: 'warning',
        //     showCancelButton: true,
        //     confirmButtonColor: '#3085d6',
        //     cancelButtonColor: '#d33',
        //     confirmButtonText: 'Sign In'
        //   }).then((result) => {
        //     if (result.isConfirmed) {
        //       return <Navigate to="/signIn" state={{from : location}} replace/>
        //     }
        //   })
        Swal.fire({
            title: 'Alert!',
            text: "You have to sign in first",
            icon: 'error',
            confirmButtonText: 'Cool'
          })
          return <Navigate to="/signIn" state={{from : location}} replace/>
    }
    if(user){
        return children;
    }

};

export default PrivateRouter;