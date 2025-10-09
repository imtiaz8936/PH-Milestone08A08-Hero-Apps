import React, { useState } from 'react';
import { loadInstalledApps } from '../../Utils/localStorage';
import ShowInstalledApps from './ShowInstalledApps';

const InstalledApps = () => {
    const [installedApps, setInstalledApps] = useState(() => loadInstalledApps())
    const apps = installedApps;
    console.log(apps);
    return (
        <div className='max-w-[1280px] mx-auto'>
            {/* <h1 className='my-6 text-3xl text-purple-500 text-center'>This is Installation Page</h1> */}

            <div className='text-center mt-10 mb-20'>
                <h1 className='font-bold text-5xl mb-4'>Your Installed Apps</h1>
                <p className='text-[#939fa9] text-xl'>Explore All Trending Apps on the Market developed by us</p>
            </div>

            <div className='w-full space-y-4 mb-20'>
                {
                    installedApps.length ?
                        installedApps.map(app => <ShowInstalledApps key={app.id} app={app} setInstalledApps={setInstalledApps}></ShowInstalledApps>)
                        : <div className='text-center mt-24 mb-36'>
                            <p className='text-[#939fa9] font-bold text-5xl'>No Installation Done Yet</p>
                        </div>
                }
            </div>

        </div>
    );
};

export default InstalledApps;