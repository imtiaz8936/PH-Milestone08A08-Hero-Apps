import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className='flex flex-col justify-center items-center text-7xl space-y-6 my-52'>
            <span className="loading loading-spinner loading-xl"></span>
            <h1 className='text-5xl text-purple-400'>Loading<span className="loading loading-dots loading-xl"></span></h1>
        </div>
    );
};

export default LoadingSpinner;