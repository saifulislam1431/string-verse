import React,{useEffect,useState} from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import useClasses from '../../../Hooks/useClasses';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import useAuth from '../../../Hooks/useAuth';

const EnrolledClasses = () => {
    const{user} = useAuth()
    const[classes] = useClasses();
    const[axiosSecure] = useAxiosSecure();
    const[paymentData , setPaymentData] = useState([]);


    // console.log(classes);
    useEffect(()=>{
        axiosSecure.get(`/payment?email=${user?.email}`)
        .then(res => {
            setPaymentData(res.data)
        })
    },[])
    console.log(paymentData);
    

    
    return (
       <section>
        <SectionTitle
        subTitle="Enrolled Classes"
        ></SectionTitle>
        <div>

        </div>
       </section>
    );
};

export default EnrolledClasses;