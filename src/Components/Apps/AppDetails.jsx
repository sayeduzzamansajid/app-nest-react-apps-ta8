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


    const handleInstall =()=>{
        
        const previousInstalled = JSON.parse(localStorage.getItem("installed"));
        let updatedInstalled =[];
        if(previousInstalled){
            updatedInstalled = [...previousInstalled, targetData];
        }
        else{
            updatedInstalled.push(targetData)
        }
        localStorage.setItem("installed", JSON.stringify(updatedInstalled))
    }

    
    return (
        <div className='w-ful bg-stone-200 pt-[80px]'>
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
                        <button onClick={handleInstall} className='btn  bg-[#00D390] text-white '>
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