import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { HiBars3BottomLeft, HiListBullet, HiOutlineCheckBadge, HiOutlinePencilSquare, HiOutlinePlus, HiOutlineUserGroup, HiPlus, HiPlusCircle } from "react-icons/hi2";
import { CiWallet,CiViewBoard, CiHome, CiEdit, CiUser } from "react-icons/ci";
import logo from "../../assets/logo/plectrum (1).png";
import useAuth from '../../Hooks/useAuth';
import useAdmin from '../../Hooks/useAdmin';
import useInstructor from '../../Hooks/useInstructor';

const Dashboard = () => {
    const{user} = useAuth();
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="drawer-button lg:hidden absolute left-2 top-2"><HiBars3BottomLeft className='w-10 h-10 text-primary' /></label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu py-4 pl-4 pr-0 w-64 h-full bg-base-200 text-base-content">
                    <Link to="/" className="inline-flex items-center gap-2 mt-2 mb-10">
                        <img src={logo} alt="Logo" className='w-12' />
                        <span className='brandTitle text-primary'>String</span>
                    </Link>
                    {/* Sidebar content here */}
                    
                    

                    {
                        isAdmin ? 
                        <>
                         <NavLink to="/dashboard/manageClass" className={({isActive})=>(isActive ? "dash-active" : "dash-default")}><HiOutlinePencilSquare className='inline-flex items-center h-6 w-6'/> Manage Classes</NavLink>


                         <NavLink to="/dashboard/manageUsers" className={({isActive})=>(isActive ? "dash-active" : "dash-default")}><HiOutlineUserGroup className='inline-flex items-center h-6 w-6'/> Manage Users</NavLink>
                        </>
                         :
                         isInstructor ?
                         <>

<NavLink to="/dashboard/addClass" className={({isActive})=>(isActive ? "dash-active" : "dash-default")}><HiPlus className='inline-flex items-center h-6 w-6'/> Add A class</NavLink>

<NavLink to="/dashboard/myClass" className={({isActive})=>(isActive ? "dash-active" : "dash-default")}><HiListBullet className='inline-flex items-center h-6 w-6'/> My Classes</NavLink>

                         </>
                         :
                         <>
                         <NavLink to="/dashboard/selectedClass" className={({isActive})=>(isActive ? "dash-active" : "dash-default")}><HiOutlinePlus className='inline-flex items-center h-6 w-6'/> My Selected Classes</NavLink>


                    <NavLink to="/dashboard/enrolled" className={({isActive})=>(isActive ? "dash-active" : "dash-default")}><HiOutlineCheckBadge className='inline-flex items-center h-6 w-6'/> My Enrolled Classes</NavLink>


                    <NavLink to="/dashboard/payment" className={({isActive})=>(isActive ? "dash-active" : "dash-default")}><CiWallet className='inline-flex items-center h-6 w-6'/> Payment</NavLink>


                    <NavLink to="/dashboard/paymentHistory" className={({isActive})=>(isActive ? "dash-active" : "dash-default")}><CiViewBoard className='inline-flex items-center h-6 w-6'/> Payment History</NavLink>
                         </>
                    }

                    <li className='my-8 divide-x-4'>

                    </li>

                    <NavLink to="/" className={({isActive})=>(isActive ? "dash-active" : "dash-default")}><CiHome className='inline-flex items-center h-6 w-6'/> Home</NavLink>
                    <NavLink to="/classes" className={({isActive})=>(isActive ? "dash-active" : "dash-default")}><CiEdit className='inline-flex items-center h-6 w-6'/> Classes</NavLink>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;