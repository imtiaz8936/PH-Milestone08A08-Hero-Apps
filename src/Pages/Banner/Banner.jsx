import React from 'react';
import bannerImg from "../../assets/hero.png"
import playStoreImg from "../../assets/playstore.png"
import appStoreImg from "../../assets/appstore.png"
import { NavLink } from 'react-router';


const Banner = () => {
    return (
        // Banner Section
        <div>
            <div className='max-w-[1280px] px-4 md:mx-auto lg:mx-auto text-center'>
                <h1 className='font-extrabold text-3xl lg:text-7xl'>We Build <br />
                    <span className='text-[#9a65f0]'>Productive</span> Apps</h1>
                <p className='my-8'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />
                    Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <div className='flex justify-center gap-8 space-x-8 mb-8'>
                    <NavLink to="https://play.google.com/store/games?device=windows&hl=en" target='_blank'
                     className='flex gap-2 btn btn-outline cursor-pointer'>
                        <img src={playStoreImg} alt="" />
                        <span className=''>Google Play</span>
                    </NavLink>
                    <NavLink to="https://www.apple.com/app-store/" target='_blank'
                     className='flex gap-2 btn btn-outline cursor-pointer'>
                        <img src={appStoreImg} alt="" />
                        <span className=''>App Store</span>
                    </NavLink>

                </div>
                <div className='flex justify-center'>
                    <img src={bannerImg} alt="" />
                </div>
            </div>

            <div className='bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] p-20'>
                <div className='max-w-[1280px] mx-auto'>
                    <h1 className='text-center text-white font-bold text-3xl lg:text-5xl mb-10'>
                        Trusted by Millions, Built for You</h1>
                    <div className='flex flex-col space-y-8 lg:flex-row lg:justify-between'>
                        <div className='text-white text-center'>
                            <p>Total Downloads</p>
                            <h1 className='font-extrabold text-6xl my-2 lg:my-4'>29.6M</h1>
                            <p>21% more than last month</p>
                        </div>
                        <div className='text-white text-center'>
                            <p>Total Reviews</p>
                            <h1 className='font-extrabold text-6xl my-2 lg:my-4'>906K</h1>
                            <p>46% more than last month</p>
                        </div>
                        <div className='text-white text-center'>
                            <p>Active Apps</p>
                            <h1 className='font-extrabold text-6xl my-2 lg:my-4'>132+</h1>
                            <p>31 more will Launch</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;