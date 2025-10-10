import React from 'react';
import { useParams } from 'react-router';
import useProducts from '../../Hooks/useProducts';
import downloadicon from "../../assets/icon-downloads.png"
import ratingIcon from '../../assets/icon-ratings.png'
import reviewIcon from '../../assets/icon-review.png'

const AppDetails = () => {
    const { id } = useParams();
    const { products, loading, error } = useProducts();
    const targetData = products.find(p => p.id === parseInt(id));
    if (loading) {
        return <p>Loading ...</p>
    }
    const { image, title, companyName, description, size, reviews, ratingAvg, downloads } = targetData
    // console.log(image,title,companyName,size ,ratingAvg,downloads)
    return (
        <div className='w-ful bg-stone-200'>
            <div className='w-[85vw] mx-auto p-5 flex gap-6 '>
                <div className=''>
                    <img className='' src={image} alt="" />
                </div>
                <div>
                    <div className='flex flex-col'>
                        <h1 className='font-bold text-3xl'>{title}</h1>
                        <p className='text-gray-600'>Developed by <span className='text-blue-800 font-semibold'>{companyName}</span></p>

                    </div>
                    <div className='flex w-[30vw] justify-between border-t-2 border-gray-400 mt-5 py-1'>
                        <div className='flex flex-col justify-center items-center p-2'>
                            <img src={downloadicon} alt="" />
                            <p>Downloads</p>
                            <h1 className='font-bold text-3xl'>{downloads}</h1>
                        </div>
                        <div className='flex flex-col justify-center items-center p-2'>
                            <img src={ratingIcon} alt="" />
                            <p>Average Retings</p>
                            <h1 className='font-bold text-3xl'> {ratingAvg} </h1>
                        </div>
                        <div className='flex flex-col justify-center items-center p-2'>
                            <img src={reviewIcon} alt="" />
                            <p>Total Reviews</p>
                            <h1 className='font-bold text-3xl'>{reviews} </h1>
                        </div>
                    </div>
                    <div>
                        <button className='btn  bg-[#00D390] text-white '>
                            Install Now ({size} MB)
                        </button>
                    </div>
                </div>
            </div>
            <div className='w-[85vw] mx-auto p-5'>
                {description} <br /><br />
                {description} <br /><br />
                {description}
            </div>

        </div>
    );
};

export default AppDetails;

// {
//     "image": "https://i.ibb.co.com/mV4Gsybk/demo-app-3.webp",
//     "title": "Pixel Art Pro",
//     "companyName": "Creative Studio",
//     "id": 103,
//     "description": "Unleash your inner artist with Pixel Art Pro, the definitive mobile studio for creating stunning pixel art and animations. Whether you're a seasoned professional or a curious beginner, our powerful toolset provides everything you need. The app features an intuitive interface with advanced options like layers, onion skinning for animation, and a customizable color palette. Create intricate sprites for games, mesmerizing animated GIFs, or simply relax with some digital painting. Our app supports various canvas sizes and export formats, making it easy to share your work or integrate it into your projects. Join a vibrant community of artists, participate in challenges, and get inspired by a gallery of amazing creations. With pressure sensitivity support and precision tools, every pixel is under your control. Pixel Art Pro is optimized for both phones and tablets, offering a seamless creative experience on any device.",
//     "size": 60.8,
//     "reviews": 120500,
//     "ratingAvg": 4.8,
//     "downloads": "15M",
//     "ratings": [
//         {
//             "name": "1 star",
//             "count": 1500
//         },
//         {
//             "name": "2 star",
//             "count": 1000
//         },
//         {
//             "name": "3 star",
//             "count": 5000
//         },
//         {
//             "name": "4 star",
//             "count": 18000
//         },
//         {
//             "name": "5 star",
//             "count": 95000
//         }
//     ]
// }