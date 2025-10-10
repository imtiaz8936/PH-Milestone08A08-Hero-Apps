import React, { useState } from 'react';
import { NavLink, useParams } from 'react-router';
import useApps from '../../Hooks/useApps';
import downloadIcon from '../../assets/icon-downloads.png'
import starIcon from '../../assets/icon-ratings.png'
import reviewIcon from '../../assets/icon-review.png'
import { toast } from 'react-toastify';
import { installApp, loadInstalledApps } from '../../Utils/localStorage';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import './AppDetails.css'
import ErrorPage from '../ErrorPage/ErrorPage';
import LoadingSpinner from '../../Components/LoadingSpinner/LoadingSpinner';
const AppDetails = () => {
    const { id } = useParams();
    const [isInstalled, setIsInstalled] = useState(false);
    const { apps, loading } = useApps();
    const foundApp = apps.find(app => app.id === Number(id));
    console.log(foundApp);
    const isAddedToLocalStorage = loadInstalledApps().some(a => a.id === Number(id));
    // console.log(isAddedToLocalStorage);
    if (loading) return <LoadingSpinner></LoadingSpinner>
    const { image, title, companyName, downloads,
        ratingAvg, reviews, size, ratings, description } = foundApp || {};
    const downloadsCount = (downloads / 1000000);
    const reviewsCount = (reviews / 1000);

    const handleClick = (foundApp) => {
        console.log(id);
        toast(`✅${title} App Installed Successfully`);
        setIsInstalled(true);
        installApp(foundApp);


    }
    return (
        <div className='max-w-[1280px] mx-auto'>
            {
                foundApp ?
                    <div>
                        <div className='flex flex-col md:flex-row md:gap-24 lg:flex-row lg:gap-24 items-center px-4 md:px-4 lg:px-0 mt-16'>
                            <img className='w-78 h-96 rounded-md' src={image} alt="" />
                            <div className='w-full space-y-4 md:space-y-10 lg:space-y-10 flex flex-col items-center md:block lg:block'>
                                <div className='space-y-2 mt-4 md:mt-0 lg-mt-0'>
                                    <h1 className='font-bold text-3xl text-center md:text-left lg:text-left'>{title}</h1>
                                    <p className='font-medium text-xl'>Developed by <span className='text-[#9a65f0]'>{companyName}</span></p>
                                </div>
                                <hr />
                                <div className='flex gap-10 md:gap-16 lg:gap-18 items-center'>
                                    <div className='space-y-3'>
                                        <img src={downloadIcon} alt="" />
                                        <p>Downloads</p>
                                        <h1 className='font-extrabold text-2xl md:text-4xl lg:text-4xl'>{downloadsCount}M</h1>
                                    </div>
                                    <div className='space-y-3'>
                                        <img src={starIcon} alt="" />
                                        <p>Average Ratings</p>
                                        <h1 className='font-extrabold text-2xl md:text-4xl lg:text-4xl'>{ratingAvg}</h1>
                                    </div>
                                    <div className='space-y-3'>
                                        <img src={reviewIcon} alt="" />
                                        <p>Total Reviews</p>
                                        <h1 className='font-extrabold text-2xl md:text-4xl lg:text-4xl'>{reviewsCount}K</h1>
                                    </div>
                                </div>

                                <div className='text-left my-10'>
                                    <button disabled={isInstalled || isAddedToLocalStorage} onClick={() => handleClick(foundApp)} className={`px-10 py-3 rounded-md bg-[#00d390] cursor-pointer 
                            ${isInstalled || isAddedToLocalStorage ? 'text-black disabled:blur-[0.4px] disabled:opacity-[0.7] disabled:cursor-not-allowed'
                                            : 'text-white'}`}>
                                        <span className="text-center font-medium text-xl">
                                            {isInstalled || isAddedToLocalStorage ? 'Installed' : `Install Now (${size} MB)`}</span></button>
                                </div>
                            </div>
                        </div>
                        <hr />

                        <div className='px-4 md:px-4 lg:px-0'>
                        <div className='my-16 space-y-3'>
                            <h1 className='font-bold text-2xl'>Ratings</h1>
                            <div className=' border rounded-xl p-4'>

                                <ResponsiveContainer width="100%" height={300} style={{ outline: "none" }}>
                                    <BarChart
                                        data={ratings}
                                        layout="vertical"
                                        margin={{
                                            top: 5,
                                            right: 30,
                                            left: 60,
                                            bottom: 5,
                                        }}
                                        barSize={20}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />

                                        <XAxis
                                            type="number"
                                            domain={[0, 'dataMax']}
                                            tickCount={6}
                                            allowDecimals={false}
                                        />

                                        <YAxis
                                            type="category"
                                            dataKey="name"
                                            width={80}
                                        />

                                        <Tooltip />
                                        <Legend />

                                        <Bar
                                            dataKey="count"
                                            fill="#ff8811"
                                            activeBar={{ fill: "#4f46e5" }}
                                            radius={[0, 4, 4, 0]}
                                        />
                                    </BarChart>
                                </ResponsiveContainer>

                            </div>
                        </div>

                        <div className='space-y-3'>
                            <h1 className='font-bold text-2xl'>Description</h1>
                            <p>{description}</p>
                        </div>
                        </div>

                        <div className='text-center mt-16 mb-20'>
                            <NavLink to="/apps" className="px-10 py-3 rounded-md bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)]" >
                                <span className="text-center text-white font-medium">Go Back</span></NavLink>
                        </div>
                    </div>
                    :
                    <div className='my-16'>
                        <ErrorPage message='wrong id'></ErrorPage>
                    </div>
            }
        </div>
    );
};

export default AppDetails;