import React from 'react';
import appErrorImg from '../../assets/App-Error.png'
const AppError = () => {
    return (
        <div className='flex flex-col items-center px-3 md:px-0 lg:px-0'>
            <img src={appErrorImg} alt="" />
            <div className='space-y-3 mt-10 text-center'>
                <h1 className='font-semibold text-5xl'>OOPS!!! APP NOT FOUND</h1>
                <p className='text-xl text-[#7a8895]'>The App you are looking for is not found on our system.
                    Please try another apps</p>
            </div>
        </div>
    );
};

export default AppError;