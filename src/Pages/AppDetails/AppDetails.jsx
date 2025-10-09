import React, { useState } from 'react';
import { NavLink, useParams } from 'react-router';
import useApps from '../../Hooks/useApps';
// import downloadIcon from '../../assets/icon-downloads.png'
// import starIcon from '../../assets/icon-ratings.png'
// import reviewIcon from '../../assets/icon-review.png'
import { toast } from 'react-toastify';

const AppDetails = () => {
    // const { id } = useParams();
    // const [isInstalled, setIsInstalled] = useState(false);
    // const { apps, loading, error } = useApps();
    // const foundApp = apps.find(app => app.id === Number(id));
    // if (loading) return <p>Loading...</p>
    // const { image, title, companyName, downloads, ratingAvg, reviews, size } = foundApp;
    // const downloadsCount = (downloads / 1000000);
    // const reviewsCount = (reviews / 1000);
    // console.log(foundApp);
    // const [installedApps, setInstalledApps] = useState([]);

    // const handleClick = (id) => {
    //     console.log(id);
    //     setIsInstalled(true);
    //     toast(`✅${title} App Installed Successfully`);

    // }
    return (
        <div className='max-w-[1280px] mx-auto'>
            <h1 className='my-6 text-3xl text-purple-500 text-center'>App Details Page</h1>

            


        </div>
    );
};

export default AppDetails;