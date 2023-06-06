import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../../../assets/logo/plectrum (1).png"
const Navbar = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "lightThem")
    // const [dark, setDark] = useState(false)

    const handleToggle = e => {

        if (e.target.checked) {
            setTheme("forest")
        } else {
            setTheme("lightThem")
        }
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
            <NavLink to="/dashboard " className={({ isActive }) => (isActive ? "active" : "default")}>Dashboard </NavLink>
        </li>




        <li className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content p-2 shadow bg-base-100 right-0 rounded-box w-52">
                <li>
                    <NavLink to="/profile"
                        className={({ isActive }) => (isActive ? "active" : "default")}>
                        Profile
                    </NavLink>
                </li>
                <li>

                </li>
                <li><p>Logout</p></li>
                <li>

                </li>
                <li className="w-48">
                    <label className="cursor-pointer label justify-evenly">
                        <span className="label-text font-semibold">{
                            theme === "lightThem" ? "Light Mood" : "Dark Mood"
                        }</span>
                        <input type="checkbox" className="toggle toggle-primary" checked={theme === "lightThem" ? false : true}
                        onChange={handleToggle}
                        />
                    </label>
                </li>
            </ul>
        </li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className='navbar-start lg:hidden'>
                <NavLink to="/" className="inline-flex items-center gap-2">
                    <img src={logo} alt="Logo" className='w-12' />
                    <span className='brandTitle'>String</span>
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
                    <span className='brandTitle'>String</span>
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