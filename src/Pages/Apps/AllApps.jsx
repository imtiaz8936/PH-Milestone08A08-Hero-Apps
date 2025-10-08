import React from 'react';
import useApps from '../../Hooks/useApps';
import AllApp from './AllApp';

const AllApps = () => {
    const { apps } = useApps();
    // console.log(apps);
    return (
        <div>
            <div className='max-w-[1280px] mx-auto mb-10'>
                <div className='text-center my-20'>
                    <h1 className='font-bold text-5xl mb-4'>Our All Application</h1>
                    <p className='text-[#939fa9] text-xl'>Explore All Apps on the Market developed by us. We code for Millions</p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    {
                        apps.map(app => <AllApp key={app.id} app={app}></AllApp>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllApps;