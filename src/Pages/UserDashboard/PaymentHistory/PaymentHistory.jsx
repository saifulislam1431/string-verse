import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import useAuth from '../../../Hooks/useAuth';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import moment from 'moment';

const PaymentHistory = () => {
    const{user} = useAuth();
    const[axiosSecure] = useAxiosSecure();
    const[histories , setHistories] = useState([]);

    useEffect(()=>{
axiosSecure.get(`/payment?email=${user?.email}`)
.then(res => {
    setHistories(res.data);
})
    },[])

    return (
        <section>
            <SectionTitle
            subTitle="Payment History"
            ></SectionTitle>
<div className='lg:mx-10 my-10'>
<div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Transaction Id</th>
        <th>Price</th>
        <th>Email</th>
        <th>date</th>
        <th>Total Orders</th>
        <th>Order Status</th>
      </tr>
    </thead>
    <tbody>
      {
histories.map((history,index)=><tr key={history._id}>
    <th className='font-semibold'>{index+1}</th>
    <td className='font-semibold'>{history.transactionId}</td>
    <td className='font-semibold'>$ {history.price}</td>
    <td className='font-semibold'>{history.email}</td>
    <td className='font-semibold'>{moment(history.date).format("MMM Do YY")}</td>
    <td className='font-semibold'>{history.totalOrders}</td>
    <td className='font-semibold text-green-500'>{history.orderStatus}</td>
  </tr>)
      }

    </tbody>
  </table>
</div>
</div>           
        </section>
    );
};

export default PaymentHistory;