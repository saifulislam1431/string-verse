import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import useClasses from '../../../Hooks/useClasses';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import useAuth from '../../../Hooks/useAuth';

const EnrolledClasses = () => {
    const { user } = useAuth()
    const [classes] = useClasses();
    const [axiosSecure] = useAxiosSecure();
    const [paymentData, setPaymentData] = useState([]);
    const [enrollId, setEnrollId] = useState([]);
    const [allId, setAllId] = useState({});



    // console.log(classes);
    useEffect(() => {
        axiosSecure.get(`/payment?email=${user?.email}`)
            .then(res => {
                setPaymentData(res.data)
            })
    }, [])


    useEffect(() => {

        if (paymentData.length !== 0) {
            let arr = [];
            const paymentId = paymentData.map(pd => pd.classId);

            for (const allId of paymentId) {
                arr = [...arr, ...allId];

            }
            setEnrollId(arr)
        }

    }, [paymentData])

    

 
 

    // console.log(arr);



    return (
        <section>
            <SectionTitle
                subTitle="Enrolled Classes"
            ></SectionTitle>
            <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
            </div>
        </section>
    );
};

export default EnrolledClasses;