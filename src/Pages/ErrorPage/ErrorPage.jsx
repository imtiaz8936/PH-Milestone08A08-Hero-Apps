import React from 'react';
import appErrorImg from '../../assets/App-Error.png'
import error_404_Img from '../../assets/error-404.png'
import { NavLink } from 'react-router';
import Navbar from '../../Components/Header/Navbar';
import Footer from '../../Components/Footer/Footer';


const ErrorPage = ({ message }) => {

    return (
        <div>
            {
                message === 'wrong id' ?
                    <div className='p-3 md:p-0 lg:p-0'>
                        <div className='flex flex-col items-center'>
                            <img src={appErrorImg} alt="" />
                            <div className='space-y-3 mt-10 text-center'>
                                <h1 className='font-semibold text-5xl'>OOPS!!! APP NOT FOUND</h1>
                                <p className='text-xl text-[#7a8895]'>The App you are requesting for does not exist or has been removed</p>
                            </div>
                        </div>

                        <div className='text-center mt-16 mb-20'>
                            <NavLink to="/apps" className="px-10 py-3 rounded-md bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)]" >
                                <span className="text-center text-white font-medium">Go Back</span></NavLink>
                        </div>
                    </div>
                    :
                    <div>
                        <Navbar></Navbar>
                        <div className='max-w-[1280px] mx-auto my-10 p-3 md:p-0 lg:p-0'>
                            <div className='flex flex-col items-center'>
                                <img src={error_404_Img} alt="" />
                                <div className='space-y-3 mt-10 text-center'>
                                    <h1 className='font-semibold text-5xl'>Oops, page not found!!!</h1>
                                    <p className='text-xl text-[#7a8895]'>The page you are looking for is not available</p>
                                </div>
                            </div>

                            <div className='text-center mt-6 mb-20'>
                                <NavLink to="/apps" className="px-10 py-3 rounded-md bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)]" >
                                    <span className="text-center text-white font-medium">Go Back</span></NavLink>
                            </div>
                        </div>
                        <Footer></Footer>
                    </div>
            }
        </div>
    );
};

export default ErrorPage;