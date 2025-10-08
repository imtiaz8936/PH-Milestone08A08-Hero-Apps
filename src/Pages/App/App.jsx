import React from 'react';

const App = ({app}) => {
    // console.log(app);
    const {image, title, downloads, ratingAvg} = app;
    const downloadsCount = (downloads / 1000000).toFixed(1);
    return (
        <div>
            <div className='rounded-md p-2 shadow-md w-78 bg-white'>
                <img className='w-78 h-78 rounded-md' src={image} alt="" />
                <h1 className='font-medium text-xl my-3'>{title}</h1>
                <div className='flex justify-between font-medium'>
                    <p className='flex gap-2 items-center bg-[#f1f5e8] px-2 py-1 rounded-sm'><img className='w-4 h-4' src="https://i.ibb.co.com/v481gQ0k/fi-9131795.png" alt="" /><span className='text-[#38daa5]'>{downloadsCount}M</span></p>
                    <p className='flex gap-2 items-center bg-[#fff0e1] px-2 py-1 rounded-sm'><img className='w-4 h-4' src="https://i.ibb.co.com/NnGRKF2X/fi-1828884.png" alt="" /><span className='text-[#ffb972]'>{ratingAvg}</span></p>
                </div>
            </div>
        </div>
    );
};

export default App;