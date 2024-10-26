import React, { useState } from 'react';
import { HiMenuAlt3 } from "react-icons/hi";
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const getLinkClass = (path) => 
        location.pathname === path ? 'text-blue-500' : 'text-gray-800';

    return (
        <>
            <div className='flex justify-center '>
                <div className='w-[350px] md:w-[1200px] mb-5'>
                    <nav className='w-auto py-5 flex justify-between items-center'>
                        <div className='flex justify-center items-center gap-1'>
                            <img src="/logo.svg" className='' alt="Logo" />
                            <h1 className='font-bold text-3xl tracking-wide text-violet-950'>CarePoint</h1>
                        </div>

                        {/* Desktop Menu */}
                        <div className='hidden md:flex'>
                            <ul className='flex gap-6 uppercase text-sm font-medium items-center'>
                                <Link to={'/home'} 
                                    className={`cursor-pointer py-1 tracking-wide ${getLinkClass('/home')}`} 
                                >
                                    Home
                                </Link>
                                <Link to={'/doctors'} 
                                    className={`cursor-pointer py-1 tracking-wide ${getLinkClass('/doctors')}`} 
                                >
                                    All Doctors
                                </Link>
                                <Link to={'/about'} 
                                    className={`cursor-pointer py-1 tracking-wide ${getLinkClass('/about')}`} 
                                >
                                    About
                                </Link>
                                <Link to={'/contact'} 
                                    className={`cursor-pointer py-1 tracking-wide ${getLinkClass('/contact')}`} 
                                >
                                    Contact
                                </Link>
                                <Link to={'/adminpanel'} 
                                    target='_blank' 
                                    className='text-xs border rounded-full text-center capitalize py-1 px-5 border-gray-300'
                                >
                                    Admin Panel
                                </Link>
                            </ul>
                        </div>

                        <div className='hidden md:flex'>
                            <Link to={'/account'} className='py-3 px-8 bg-[#5f6fff] text-white text-sm rounded-full'>
                                Create Account
                            </Link>
                        </div>

                        {/* Mobile Menu Toggle Button */}
                        <div className='md:hidden'>
                            <button onClick={toggleMenu}>
                                <HiMenuAlt3 className='text-3xl text-violet-950' />
                            </button>
                        </div>
                    </nav>

                    {/* Mobile Menu */}
                    <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                        <ul className='flex flex-col gap-4 uppercase text-sm font-medium items-center'>
                            <Link to={'/home'} 
                                className={`cursor-pointer py-1 tracking-wide ${getLinkClass('/home')}`} 
                            >
                                Home
                            </Link>
                            <Link to={'/doctors'} 
                                className={`cursor-pointer py-1 tracking-wide ${getLinkClass('/doctors')}`} 
                            >
                                All Doctors
                            </Link>
                            <Link to={'/about'} 
                                className={`cursor-pointer py-1 tracking-wide ${getLinkClass('/about')}`} 
                            >
                                About
                            </Link>
                            <Link to={'/contact'} 
                                className={`cursor-pointer py-1 tracking-wide ${getLinkClass('/contact')}`} 
                            >
                                Contact
                            </Link>
                        </ul>
                    </div>

                    <hr className='border-1 border-gray-400' />
                </div>
            </div>
        </>
    );
}

export default Navbar;
