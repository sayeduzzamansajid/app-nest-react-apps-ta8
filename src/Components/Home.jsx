import React from 'react';
import useProducts from '../Hooks/useProducts';
import heroImg from '../assets/hero.png'
import { DownloadIcon, Star } from 'lucide-react';
import play from '../assets/playStore.png'
import AppCard from './Apps/AppCard';
import { Link } from 'react-router';

const Home = () => {
    const { products, loading, error } = useProducts();
    // console.log(products)
    const featureProduct = products.slice(0, 8);
    return (
        <div>
            <div className='flex flex-col justify-center items-center bg-base-300 pt-14'>
                <h1 className='text-6xl text-center font-bold'>We Build <br /><span className='text-blue-700'>Productive</span> Apps</h1>
                <p className='text-center text-gray-500 mt-6'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />
                    Our goal is to turn your ideas into digital experiences that truly make an impact.
                </p>
                <div className='text-center mt-4 flex gap-6'>
                    <button className='btn bg-white'>Google Play </button>
                    <button className='btn bg-white'>App Store</button>
                </div>
                <div className='mt-8'>
                    <img src={heroImg} alt="" />
                </div>
                <div className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] w-full px-10 py-12 space-y-6'>
                    <h1 className='text-4xl text-white font-extrabold text-center'>Trusted By Millions, Built For You</h1>
                    <div className='w-[70vw]  mx-auto flex justify-between p-5'>
                        <div className='flex items-center'>
                            <div className='space-y-4'>
                                <p className='text-white'>Total Downloads</p>
                                <p className='text-white font-extrabold text-4xl'>29.6M</p>
                                <p className='text-white'>21% More Than Last Monts </p>
                            </div>
                            <div>
                                <DownloadIcon size={48} className='text-white'></DownloadIcon>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <div className='space-y-4'>
                                <p className='text-white'>Total Downloads</p>
                                <p className='text-white font-extrabold text-4xl'>29.6M</p>
                                <p className='text-white'>46% More Than Last Months </p>
                            </div>
                            <div>
                                <Star size={48} className='text-white '></Star>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <div className='space-y-4'>
                                <p className='text-white'>Total Downloads</p>
                                <p className='text-white font-extrabold text-4xl'>29.6M</p>
                                <p className='text-white'>31% More Will Lounch </p>

                            </div>
                            <div>
                                <img className='w-[50px] h-[50px]' src={play} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='space-y-3'>
                    <h1 className='text-center font-bold text-4xl text-gray-700 pt-10'>Trending Apps</h1>
                    <p className='text-gray-400 text-center'>Explore All Trending Apps on Market By Us</p>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-14 mt-10'>
                        {
                            featureProduct.map(app => <AppCard key={app.id} app={app}></AppCard>)
                        }
                    </div>

                </div>
                <div className='pb-14'>
                    <Link to='/apps'><button className='btn bg-blue-400 mx-auto '>Show All</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Home;