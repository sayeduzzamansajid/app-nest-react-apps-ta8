import React from 'react';
import { Link } from 'react-router';

const NoAppFound = () => {
    return (
        <div className='flex justify-center items-center w-screen '>
            <div className='flex flex-col justify-center items-center gap-8 w-[80vw] bg-white p-15 rounded-xl'>
                <h1 className='font-bold text-5xl text-center text-gray-600 '>No App found </h1>
                <Link to='/apps'><button className='btn bg-blue-600'> Show All Apps</button></Link>
            </div>
        </div>
    );
};

export default NoAppFound;