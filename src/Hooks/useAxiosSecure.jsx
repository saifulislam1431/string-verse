import axios from 'axios';
import { useEffect } from 'react';
import useAuth from './useAuth';
import { useNavigate, useNavigation } from 'react-router-dom';
import Loading from '../Pages/LoadingPage/Loading';



const axiosSecure = axios.create({
    baseURL: "https://string-verse-server.vercel.app"
});

const useAxiosSecure = () => {
    const navigation = useNavigation();
    if(navigation.state === "loading"){
        return <Loading></Loading>
    }
    const { logOut } = useAuth();
    const navigate = useNavigate();
    useEffect(()=>{
        axiosSecure.interceptors.request.use(
            (req)=>{
                const token = localStorage.getItem("access-token")
             if(token){
                req.headers.Authorization = `Bearer ${token}`
             }   
             return req;
            }
        );

        axiosSecure.interceptors.response.use((res)=>res,
        async(error)=>{
            if(error.res && (error.res.status === 401 || error.res.status === 403)){
                await logOut();
                navigate("/signIn")
            }
            return Promise.reject(error);
        });
    },[logOut , navigate])
    
    return [axiosSecure]
};

export default useAxiosSecure;