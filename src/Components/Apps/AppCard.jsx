import React from 'react';
import { Link } from 'react-router';



const AppCard = ({ app }) => {
    const { image, title, ratingAvg, downloads,id } = app
    return (
        <Link to={`/apps/${id}`}>
            <div className='p-3 shadow-2xl rounded-lg space-y-3 hover:scale-105 duration-50'>
                <img src={image} alt="" />
                <h1 className='font-bold'>{title}</h1>
                <div className='flex justify-between'>
                    <div className='bg-stone-200 text-green-400 px-3 rounded-2xl'><p>{downloads}</p></div>
                    <div className='bg-orange-100 text-orange-600 px-3 rounded-2xl'><p> {ratingAvg} </p></div>
                </div>
            </div>
        </Link>
    );
};

export default AppCard;