import React, { useState } from 'react';
import useProducts from '../../Hooks/useProducts';
import AppCard from './AppCard';

const Apps = () => {
    const { products } = useProducts();
    const [search, setSearch] = useState('')
    const term = search.trim().toLocaleLowerCase();
    const searchedProducts = term ?
        products.filter(product => product.title.toLocaleLowerCase().includes(term)
        ) : products
    return (
        <div className='w-full mx-auto  flex flex-col justify-between items-center bg-base-300 pt-14 '>
            <div className='flex justify-between items-center w-full px-25 '>
                <h1 className='font-semibold text-3xl'>See All Products <span className='text-sm text-gray-500'>({searchedProducts.length}) Products found</span> </h1>
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
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-14 mt-2 '>
                {
                    searchedProducts.map(app => <AppCard key={app.id} app={app}></AppCard>)
                }
            </div>

        </div>
    );
};

export default Apps;