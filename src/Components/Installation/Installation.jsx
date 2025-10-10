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

    const sortedItem = ()=>{
        if(sortOrder === 'size-asc'){
            return [...installed].sort((a,b)=>a.size - b.size)
        }
        else if(sortOrder === 'size-dsc'){
            return [...installed].sort((a,b)=>b.size - a.size)
        }
        else{
            return installed
        }
    }


    return (
        <div className='bg-base-300'>
            <div className='mx-auto pt-[80px] bg-base-300'>
                <h1 className='text-4xl font-bold text-center'>Your Installed Apps </h1>
                <p className='text-center text-gray-400 mt-4'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='mx-auto pt-[80px] bg-base-300 flex justify-between w-[90vw]'>
                <h1 className="font-bold text-2xl"><span>{installed.length}</span> Apps Found</h1>
                <label className='form-control w-full max-w-xs'>
                    <select className='bg-white rounded-lg p-2 select select-borderd' value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
                        <option value="none">Sort by size</option>
                        <option value="size-asc">Low to High</option>
                        <option value="size-dsc">High to Low</option>
                    </select>
                </label>
            </div>
            <div className=' mx-auto pt-[20px] bg-base-300 pb-[90px]'>
                {
                    sortedItem().map(p => <InstallCard setInstalled={setInstalled} p={p}></InstallCard>)
                }
            </div>
        </div>
    );
};

export default Installation;