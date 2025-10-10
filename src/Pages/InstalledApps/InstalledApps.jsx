import React, { useState } from 'react';
import { loadInstalledApps } from '../../Utils/localStorage';
import ShowInstalledApps from './ShowInstalledApps';
import { NavLink } from 'react-router';

const InstalledApps = () => {
    const [installedApps, setInstalledApps] = useState(() => loadInstalledApps())
    const [sortOrder, setSortOrder] = useState('none');
    const sortedApps = (() => {
        if (sortOrder === 'downloads-asc') {
            return [...installedApps].sort((a, b) => a.downloads - b.downloads);
        }
        if (sortOrder === 'downloads-desc') {
            return [...installedApps].sort((a, b) => b.downloads - a.downloads);
        }
        else {
            return installedApps;
        }
    })();

    return (
        <div className='max-w-[1280px] mx-auto'>
            <div className='text-center mt-10 mb-20'>
                <h1 className='font-bold text-5xl mb-4'>Your Installed Apps</h1>
                <p className='text-[#939fa9] text-xl px-3 md:px-0 lg:px-0'>Explore All Trending Apps on the Market developed by us</p>
            </div>

            <div className='flex flex-col md:flex-row md:justify-between lg:flex-row lg:justify-between items-center space-y-4 px-0 md:p-4 mb-6'>
                <div>
                    <h1 className='font-bold text-2xl'>({installedApps.length})Apps Found</h1>
                </div>

                <label className='form-control w-full max-w-[224px] '>
                    <select
                        className='select select-bordered'
                        value={sortOrder}
                        onChange={e => setSortOrder(e.target.value)}
                    >
                        <option value='none'>Sort by Downloads</option>
                        <option value='downloads-asc'>Low-&gt;High</option>
                        <option value='downloads-desc'>High-&gt;Low</option>
                    </select>
                </label>

            </div>

            <div className='w-full space-y-4 px-3 md:px-0 lg:px-0 mb-20'>
                {
                    sortedApps.length ?
                        sortedApps.map(app => <ShowInstalledApps key={app.id} app={app} setInstalledApps={setInstalledApps}></ShowInstalledApps>)
                        : <div className='text-center mt-24 mb-36'>
                            <p className='text-[#939fa9] font-bold text-5xl'>No Installation Done Yet</p>
                        </div>
                }
            </div>

            <div className='text-center mt-16 mb-20'>
                <NavLink to="/apps" className="px-10 py-3 rounded-md bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)]" >
                    <span className="text-center text-white font-medium">Go Back</span></NavLink>
            </div>

        </div>
    );
};

export default InstalledApps;