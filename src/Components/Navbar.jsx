import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../assets/logo.png'
import github from '../assets/github.png'


const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm px-[100px]">

            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <ul className="menu menu-horizontal px-1 gap-6">
                            <NavLink to='/'><button className=''>Home</button></NavLink>
                            <NavLink to='/apps'><button className=''>Apps</button></NavLink>
                            <NavLink to='/installation'><button className=''>Installation</button></NavLink>
                        </ul>
                    </ul>
                </div>
                <Link className="btn btn-ghost text-xl flex">
                    <span ><img className='w-[40px] h-[40px]' src={logo} alt="" /></span>
                    <span className='text-blue-800 font-bold'>AppNest</span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-6">
                    <NavLink to='/' 
                        className={({ isActive }) =>
                            isActive
                                ? "text-blue-500 font-bold"
                                : "text-gray-700 hover:text-blue-400"
                        }><button className=''>Home</button></NavLink>
                    <NavLink to='/apps' 
                        className={({ isActive }) =>
                            isActive
                                ? "text-blue-500 font-bold"
                                : "text-gray-700 hover:text-blue-400"
                        }><button className=''>Apps</button></NavLink>
                    <NavLink to='/installation' 
                        className={({ isActive }) =>
                            isActive
                                ? "text-blue-500 font-bold"
                                : "text-gray-700 hover:text-blue-400"
                        }><button className=''>Installation</button></NavLink>
                </ul>
            </div>
            <div className="navbar-end">
                <Link to="https://github.com/sayeduzzamansajid"><button className='btn bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)]'> <img  src={github} alt="" /> Contribute</button></Link>
            </div>
        </div>
    );
};

export default Navbar;