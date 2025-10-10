import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useProducts from '../../Hooks/useProducts';
import downloadicon from "../../assets/icon-downloads.png"
import ratingIcon from '../../assets/icon-ratings.png'
import reviewIcon from '../../assets/icon-review.png'
import { Bar, BarChart, CartesianGrid, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { toast, ToastContainer } from 'react-toastify';
import LoadingSpinner from '../LoadingSpinner';
import ErrorAppPage from '../ErrorAppPage';

const AppDetails = () => {
    const [isClicked, setIsClicked] = useState(false)
    const { id } = useParams();
    const { products, loading } = useProducts();
    const targetData = products.find(p => p.id === parseInt(id));
    useEffect(() => {
        const installedApps = JSON.parse(localStorage.getItem("installed")) || [];
        const alreadyInstalled = installedApps.some(app => app.id === parseInt(id));
        if (alreadyInstalled) setIsClicked(true);
    }, [id]);
   
    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }
     if(!targetData){
        return <ErrorAppPage></ErrorAppPage>
    }
    const { image, title, companyName, description, size, reviews, ratingAvg, downloads, ratings } = targetData
    // console.log(image,title,companyName,size ,ratingAvg,downloads)


    const handleInstall = () => {

        const previousInstalled = JSON.parse(localStorage.getItem("installed")) || [];
        let updatedInstalled = [];
        if (previousInstalled) {
            updatedInstalled = [...previousInstalled, targetData];
        }
        else {
            updatedInstalled.push(targetData)
            setIsClicked(true)
        }
        toast.success("Installed successfuly!"),
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
                        <button onClick={() => {
                            handleInstall(),

                            setIsClicked(true)

                        }} className='btn  bg-[#00D390] text-white ' disabled={isClicked}>
                            {isClicked ? "Installed" : `Install Now (${size} MB)`}
                        </button>
                    </div>
                </div>
            </div>

            <div className="graph  w-[85vw] h-[300px] mx-auto border-2 border-gray-300 py-12 px-3 border-r-0 border-l-0 my-8">
                <h3 className='font-bold'>Ratings</h3>
                <ResponsiveContainer width="100%" height="80%" >
                    {/* width="100%" height="100%" */}
                    <BarChart
                        layout="vertical"
                        data={ratings}
                        margin={{ top: 5, right: 30, left: 50, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" />
                        <YAxis dataKey="name" type="category" />
                        <Tooltip />
                        <Bar
                            dataKey="count"
                            fill="#ff9500"
                            radius={[0, 5, 5, 0]} // rounded right edges
                            barSize={20}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <div className='w-[85vw] mx-auto p-5'>
                {description} <br /><br />
                {description} <br /><br />
                {description}
            </div>

            <ToastContainer />
        </div>
    );
};

export default AppDetails;