import React from 'react';
import { NavLink } from 'react-router';
import logoImg from "../../assets/logo.png"
import githubImg from "../../assets/github.png"
import "./Navbar.css"



// Navbar Section
const Navbar = () => {
    const navLinks = <>
        <NavLink to="/" className={({ isActive }) =>
            `mr-6 font-medium ${isActive ? 'active-link' : ''}`
        }><li className='font-medium'>Home</li></NavLink>
        <NavLink to="/apps" className={({ isActive }) =>
            `mr-6 font-medium ${isActive ? 'active-link' : ''}`
        }><li className='font-medium'>Apps</li></NavLink>
        <NavLink to="/app/installed" className={({ isActive }) =>
            isActive ? 'active-link' : ''
        }><li className='font-medium'>Installation</li></NavLink>
    </>

    return (
        <div className='max-w-[1280px] mx-auto'>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-24 p-2 shadow space-y-3">
                            {navLinks}
                        </ul>
                    </div>
                    <NavLink to="/" className="flex gap-2 items-center"><img className='w-10 h-10' src={logoImg} alt="" />
                        <span className='text-[#9a65f0] font-bold'>HERO.IO</span></NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end gap-4">

                    <NavLink to="https://github.com/imtiaz8936?tab=repositories" target='_blank' className="flex gap-2 items-center p-2 rounded-md bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)]" >
                        <img className='h-5' src={githubImg} alt="" /><span className="text-white font-medium">Contribute</span></NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;