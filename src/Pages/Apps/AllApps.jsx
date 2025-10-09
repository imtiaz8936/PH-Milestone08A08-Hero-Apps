import React, { useState } from 'react';
import useApps from '../../Hooks/useApps';
import AllApp from './AllApp';
import { NavLink } from 'react-router';

const AllApps = () => {
    const { apps } = useApps();
    const [search, setSearch] = useState('');
    const term = search.trim().toLowerCase();
    const searchedApps = term ? apps.filter(app => app.title.toLowerCase().includes(term)
    ) : apps;


    return (
        <div>
            <div className='max-w-[1280px] mx-auto'>
                <div className='text-center my-20'>
                    <h1 className='font-bold text-5xl mb-4'>Our All Application</h1>
                    <p className='text-[#939fa9] text-xl'>Explore All Apps on the Market developed by us. We code for Millions</p>
                </div>

                <div className='flex justify-between items-center mb-6'>
                    <div>
                        <h1 className='font-bold text-2xl'>({searchedApps.length})Apps Found</h1>
                    </div>
                    <div>
                        <label className="input">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <path d="m21 21-4.3-4.3"></path>
                                </g>
                            </svg>
                            <input className='w-64' value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                type="search" placeholder="Search app" />
                        </label>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    {
                        searchedApps.map(app => <AllApp key={app.id} app={app}></AllApp>)
                    }
                </div>

                <div className='text-center mt-16 mb-20'>
                    <NavLink to="/" className="px-10 py-3 rounded-md bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)]" >
                        <span className="text-center text-white font-medium">Go to Home</span></NavLink>
                </div>
            </div>
        </div>
    );
};

export default AllApps;