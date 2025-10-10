import React, { useEffect, useState } from 'react';
import InstallCard from './InstallCard';

const Installation = () => {
    const [installed, setInstalled] = useState([])
    const [sortOrder, setSortOrder] = useState('none')
    useEffect(() => {
        const previouslyInstalled = JSON.parse(localStorage.getItem("installed"))
        if (previouslyInstalled) {
            setInstalled(previouslyInstalled)
        }
    }, [])
    return (
        <div className='bg-base-300'>
            <div className='mx-auto pt-[80px] bg-base-300'>
                <h1 className='text-4xl font-bold text-center'>Your Installed Apps </h1>
                <p className='text-center text-gray-400 mt-4'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='mx-auto pt-[80px] bg-base-300 flex justify-between w-[90vw]'>
                <h1 className="font-bold text-2xl"><span>{installed.length}</span> Apps Found</h1>
                <select value={sortOrder} onChange={(e)=> setSortOrder(e.target.value)}></select>
            </div>
            <div className=' mx-auto pt-[20px] bg-base-300 pb-[90px]'>
                {
                    installed.map(p => <InstallCard p={p}></InstallCard>)
                }
            </div>
        </div>
    );
};

export default Installation;