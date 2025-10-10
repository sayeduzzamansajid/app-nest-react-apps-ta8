import React from 'react';
import { Link } from 'react-router';



// {
//     "image": "https://example.com/images/nova_launcher.png",
//     "title": "Nova Launcher",
//     "companyName": "TeslaCoil Apps",
//     "id": 101,
//     "description": "Nova Launcher is a powerful, customizable, and versatile home screen replacement. It brings advanced features to enhance your home screens but still remains a great, user-friendly choice for everyone. Whether you want to completely over",
//     "size": 25.5,
//     "reviews": 1450230,
//     "ratingAvg": 4.5,
//     "downloads": 50000000,
//     "ratings": [
//       { "name": "1 star", "count": 45000 },
//       { "name": "2 star", "count": 30100 },
//       { "name": "3 star", "count": 95130 },
//       { "name": "4 star", "count": 280000 },
//       { "name": "5 star", "count": 1000000 }
//     ]
//   }

const AppCard = ({ app }) => {
    const { image, title, ratingAvg, downloads,id } = app
    return (
        <Link to={`/apps/${id}`}>
            <div className='p-3 shadow-2xl rounded-lg space-y-3'>
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