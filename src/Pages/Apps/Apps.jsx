import React from 'react';
import useApps from '../../Hooks/useApps';
import App from '../App/App';
import { NavLink } from 'react-router';

const Apps = () => {
    const { apps } = useApps();
    // console.log(typeof apps);
    const applications = apps.slice(0, 8);
    return (
        <div>
            <div className='max-w-[1280px] mx-auto'>
                <div className='text-center my-20'>
                    <h1 className='font-bold text-5xl mb-4'>Trending Apps</h1>
                    <p className='text-[#939fa9] text-xl'>Explore All Trending Apps on the Market developed by us</p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    {
                        applications.map(app => <App key={app.id} app={app}></App>)
                    }
                </div>

                <div className='text-center mt-10 mb-20'>
                    <NavLink to="/apps" className="px-10 py-3 rounded-md bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)]" >
                    <span className="text-center text-white font-medium">Show All</span></NavLink>
                </div>
            </div>
        </div>
    );
};

export default Apps;