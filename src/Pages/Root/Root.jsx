import React from 'react';
import Navbar from '../../Components/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../Components/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import AppError from '../Apps/AppError';

const Root = () => {
    return (
        <div className='bg-[#f5f5f5]'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer />
        </div>
    );
};

export default Root;