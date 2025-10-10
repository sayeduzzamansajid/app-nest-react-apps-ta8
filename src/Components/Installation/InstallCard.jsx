import { DownloadIcon, Star } from 'lucide-react';
import React from 'react';

const InstallCard = ({p,setInstalled}) => {
    console.log(p)
    const {image,id, title, size, downloads, ratingAvg} = p
    console.log(image, title, size, downloads, ratingAvg);

    const handleRemove =(id)=>{
        
        const previousInstalled = JSON.parse(localStorage.getItem("installed"));
        let updatedInstalled = previousInstalled.filter(pr => pr.id !== id)
        //for UI Instant Update 
        setInstalled(updatedInstalled)
        localStorage.setItem("installed", JSON.stringify(updatedInstalled))
    }


    return (
        <div className='flex justify-between w-[90vw] mx-auto border p-3 items-center bg-white rounded-2xl mt-3'>
            <div className='flex items-center gap-4 '>
                <img className='w-[80px] h-[80px] rounded-lg' src={image} alt="" />
                <div className='flex flex-col gap-2'>
                    <h1 className='text-2xl font-bold'>{title}</h1>
                    <div className='flex gap-6'>
                        <p className='px-2 text-green-600 font-bold flex'><DownloadIcon></DownloadIcon> {downloads}</p>
                        <p className='px-2 text-orange-500 font-bold flex'><Star></Star> {ratingAvg}</p>
                        <p className='px-2 text-gray-500 font-bold'> {size} MB</p>
                    </div>
                </div>
            </div>
            <div>
                <button onClick={()=> handleRemove(id)} className='bg-green-200 px-3 py-2 rounded btn border-2 border-gray-400 hover:scale-110'>Uninstall</button>
            </div>
        </div>
    );
};

export default InstallCard;