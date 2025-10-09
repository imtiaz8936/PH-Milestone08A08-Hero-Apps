
import { toast } from 'react-toastify';
import { loadInstalledApps, uninstallApp } from '../../Utils/localStorage';

const ShowInstalledApps = ({ app, setInstalledApps }) => {
    
    const { image, title, downloads, ratingAvg, size, id } = app;
    const downloadsCount = (downloads / 1000000);
    const handleUninstallApp = (id) =>{
        toast(`${title} App Uninstalled from your Device`);
        uninstallApp(id);
        setInstalledApps(()=>loadInstalledApps());
    }
    return (
        <div className='flex justify-between items-center p-4 shadow-md bg-white rounded-md'>
            <div className='flex gap-10 items-center'>
                <img className='w-20 h-20 rounded-md' src={image} alt="" />
                <div className='space-y-3'>
                    <h1 className='font-medium text-xl'>{title}</h1>
                        <div className='flex gap-4 items-center font-medium'>
                            <p className='flex gap-1 items-center'><img className='w-4 h-4' src="https://i.ibb.co.com/v481gQ0k/fi-9131795.png" alt="" /><span className='text-[#38daa5]'>{downloadsCount}M</span></p>
                            <p className='flex gap-1 items-center'><img className='w-4 h-4' src="https://i.ibb.co.com/NnGRKF2X/fi-1828884.png" alt="" /><span className='text-[#ffb972]'>{ratingAvg}</span></p>
                            <p className=''><span className='text-[#939fa9]'>{size} MB</span></p>
                        </div>
                </div>
            </div>
            <button className='rounded-md bg-[#00d390] cursor-pointer text-white font-medium text-xl px-6 py-3'
            onClick={()=> handleUninstallApp(id)}>
                Uninstall
            </button>
        </div>
    );
};

export default ShowInstalledApps;