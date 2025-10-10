import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import errorImg from '../assets/error-404.png'
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='flex flex-col justify-center items-center py-18 bg-gray-300 '>
                <img src={errorImg} alt="" />
                <h1 className='text-6xl font-bold mb-5'>Oops, page not found!</h1>
                <p className='text-gray-500 text-lg'>The page you are looking for is not available.</p>
                <Link to='/apps'><button className='btn mt-6 w-[180px] bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)]'>Go Back</button></Link>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;