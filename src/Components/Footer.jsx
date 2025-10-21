import React from 'react';
import logo from '../assets/logo.png'
const Footer = () => {
    return (
        <>
            <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10 bg-gradient-to-l from-[#632EE3] to-[#9F62F2] ">
                <aside className='text-gray-700'>
                    <div className='ml-18 flex flex-col justify-center items-center'>
                        <img className='w-[40px] h-[40px]  ' src={logo} alt="" />
                        <p className='font-bold text-lg text-center mt-1 text-black'>AppNest</p>
                        <p className='w-[280px] text-center'>
                            <span className='text-[14px]'>- Evokes a cozy, organized place where you "nest" your installed apps.</span>
                                <br />
                               <span className='text-[14px] pt-4'>Providing reliable tech since 1992</span> 
                        </p>
                        
                    </div>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>

            </footer>
            <footer className="footer sm:footer-horizontal footer-center  p-4 bg-black text-white">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by AppNest Ltd</p>
                </aside>
            </footer>
        </>

    );
};

export default Footer;