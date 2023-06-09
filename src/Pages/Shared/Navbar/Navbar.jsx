import React, { useState, useEffect } from 'react';
import {Link, NavLink } from 'react-router-dom';
import logo from "../../../assets/logo/plectrum (1).png"
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import useAuth from '../../../Hooks/useAuth';
import Swal from 'sweetalert2';
import useAdmin from '../../../Hooks/useAdmin';
const Navbar = () => {
    const{user,logOut} = useAuth();
    const [isAdmin] = useAdmin()
    const isInstructor = false; 
    // const user = true
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "lightThem")
    const [subMenu, setSubMenu] = useState(false)

    const handleToggle = e => {

        if (e.target.checked) {
            setTheme("forest")
        } else {
            setTheme("lightThem")
        }
    }

    const handleOut =()=>{
        logOut()
        .then(()=>{
            Swal.fire({
                title: 'Success!',
                text: 'Sign Out',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
              
        })
        .catch(error=>{
            Swal.fire({
                title: 'Error!',
                text: error.message,
                icon: 'error',
                confirmButtonText: 'Cool'
              })
        })
    }

    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme)
    }, [theme])

    const navItems = <>
        <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "default")}>Home</NavLink>
        </li>

        <li>
            <NavLink to="/instructors" className={({ isActive }) => (isActive ? "active" : "default")}>Instructors</NavLink>
        </li>

        <li>
            <NavLink to="/classes" className={({ isActive }) => (isActive ? "active" : "default")}>Classes</NavLink>
        </li>

        <li>
            <NavLink to={isAdmin ? "/dashboard/manageClass" : isInstructor ? "/dashboard/myClasses" : "/dashboard/selectedClass"} className={({ isActive }) => (isActive ? "active" : "default")}>Dashboard </NavLink>
        </li>

<li className="w-[110px]">

            <label className="cursor-pointer label justify-evenly  hover:bg-transparent">
                <span className="label-text font-semibold">{
                    theme === "lightThem" ? "Light" : "Dark"
                }</span>
                <input type="checkbox" className="toggle toggle-primary" checked={theme === "lightThem" ? false : true}
                onChange={handleToggle}
                />
            </label>
        </li>

        {
    user ? 
    <li className="dropdown dropdown-end">
    <label tabIndex={0} className="btn btn-ghost btn-circle avatar hover:bg-transparent" onClick={()=>setSubMenu(!subMenu)}>
        <div className="w-10 rounded-full">
            <img src={user.photoURL} />
        </div>
    </label>
    {
        subMenu ? 
        <ul className="menu menu-sm dropdown-content p-2 shadow bg-base-100 right-0 rounded-box w-52">
        <li>
            <NavLink to="/profile"
                className={({ isActive }) => (isActive ? "active" : "default")}>
                Profile
            </NavLink>
        </li>
        <li>

        </li>
        <button onClick={handleOut} className='inline-flex items-center gap-2 text-secondary font-semibold'> <FaSignOutAlt /> Logout</button>
    </ul>
    :
    ""
    }
</li>
:
<Link to="/signIn">
<button className='myBtn inline-flex gap-2 items-center'><FaSignInAlt /> Sign In</button>
</Link>
}
    </>
    return (
        <div className="navbar bg-accent bg-opacity-10 shadow mx-auto sticky top-0 z-50">
            <div className='navbar-start lg:hidden'>
                <NavLink to="/" className="inline-flex items-center gap-2">
                    <img src={logo} alt="Logo" className='w-12' />
                    <span className='brandTitle text-primary'>String</span>
                </NavLink>
            </div>
            <div className="navbar-end lg:navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="#3b7197"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow right-0 bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <NavLink to="/" className='hidden lg:inline-flex items-center'>
                    <img src={logo} alt="Logo" className='w-12' />
                    <span className='brandTitle text-primary'>String</span>
                </NavLink>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;