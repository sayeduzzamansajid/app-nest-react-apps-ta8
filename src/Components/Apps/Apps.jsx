import React, { useState } from 'react';
import useProducts from '../../Hooks/useProducts';
import AppCard from './AppCard';
import NoAppFound from './NoAppFound';
import LoadingSpinner from '../LoadingSpinner';

const Apps = () => {
    const { products, loading } = useProducts();
    
    const [search, setSearch] = useState('')
    const term = search.trim().toLocaleLowerCase();
    const searchedProducts = term ?
        products.filter(product => product.title.toLocaleLowerCase().includes(term)
        ) : products
    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    return (
        <div className='w-full mx-auto  flex flex-col justify-between items-center bg-base-300 pt-14 '>
            <div className='flex flex-col justify-between items-center w-full '>
                <div className='mb-8 space-y-2'>
                    <h1 className='text-3xl font-bold text-center'>Our All Applications</h1>
                    <p className='text-gray-500'>Explore All Apps on the Market developed by us. We code for Millions</p>
                </div>
                <div className='flex justify-between items-center w-full px-25 '>
                    <h1 className='font-semibold text-2xl'>Application found  <span className='text-sm text-gray-500'>({searchedProducts.length}) Products found</span> </h1>

                    <label className="input">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input
                            onChange={(e) => setSearch(e.target.value)}
                            value={search}
                            type="search"
                            required
                            placeholder="Search" />
                    </label>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-14 mt-2 '>
                {
                    searchedProducts.length !== 0 ?  searchedProducts.map(app => <AppCard key={app.id} app={app}></AppCard>):   <NoAppFound></NoAppFound> 
                    
                }

            </div>

        </div>
    );
};

export default Apps;