import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { IoIosArrowRoundForward } from "react-icons/io";

function Home() {
    const specialityRef = useRef(null); // Reference for the 'Find by Speciality' section

    const handleScrollToSpeciality = () => {
        specialityRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const speciality = [
        { img: '/download1.svg', title: 'General physician', imgAlt: 'General physician', path: '/general physician' },
        { img: '/download2.svg', title: 'Gynecologist', imgAlt: 'Gynecologist', path: '/gynecologist' },
        { img: '/download3.svg', title: 'Dermatologist', imgAlt: 'Dermatologist', path: '/dermatologist' },
        { img: '/download4.svg', title: 'Pediatricians', imgAlt: 'Pediatricians', path: '/pediatricians' },
        { img: '/download5.svg', title: 'Neurologist', imgAlt: 'Neurologist', path: '/neurologist' },
        { img: '/download6.svg', title: 'Gastroenterologist', imgAlt: 'Gastroenterologist', path: '/gastroenterologist' },
    ];

    const doc = [
        { img: '/doctors/doc1.png', title1: 'Dr. Richard James', title2: 'General physician', imgAlt: 'Dr. Richard James' },
        { img: '/doctors/doc2.png', title1: 'Dr. Emily Larson', title2: 'Gynecologist', imgAlt: 'Dr. Emily Larson' },
        { img: '/doctors/doc3.png', title1: 'Dr. Sarah Patel', title2: 'Dermatologist', imgAlt: 'Dr. Sarah Patel' },
        { img: '/doctors/doc4.png', title1: 'Dr. Christopher Lee', title2: 'Pediatricians', imgAlt: 'Dr. Christopher Lee' },
        { img: '/doctors/doc5.png', title1: 'Dr. Jennifer Garcia', title2: 'Neurologist', imgAlt: 'Dr. Jennifer Garcia' },
        { img: '/doctors/doc6.png', title1: 'Dr. Andrew Williams', title2: 'Gastroenterologist', imgAlt: 'Dr. Andrew Williams' },
        { img: '/doctors/doc7.png', title1: 'Dr. Christopher Davis', title2: 'General physician', imgAlt: 'Dr. Christopher Davis' },
        { img: '/doctors/doc8.png', title1: 'Dr. Timothy White', title2: 'Gynecologist', imgAlt: 'Dr. Timothy White' },
        { img: '/doctors/doc9.png', title1: 'Dr. Ava Mitchell', title2: 'Dermatologist', imgAlt: 'Dr. Ava Mitchell' },
        { img: '/doctors/doc10.png', title1: 'Dr. Jeffrey King', title2: 'Pediatricians', imgAlt: 'Dr. Jeffrey King' },
    ];

    return (
        <>
            <Navbar />
            <div className='flex justify-center'>
                <div className='w-[350px] md:w-[1200px] mx-4'>
                    <div className='flex flex-col'>
                        {/* #1 */}
                        <div className='w-full bg-[#5f6fff] rounded-lg grid grid-cols-1 md:grid-cols-2 px-5 md:px-10 relative'>
                            <div className='flex flex-col justify-center pt-10 md:pt-[10vw] pb-10 md:pb-[6vw] md:px-7'>
                                <h1 className='text-3xl md:text-5xl font-bold text-white my-4 md:text-left'>
                                    Book Appointment <br />With Trusted Doctors
                                </h1>
                                <div className='flex flex-col md:flex-row gap-4 text-sm text-white justify-center md:justify-start my-2'>
                                    <img src="/group_profiles.png" alt="group_profiles" className='w-28 md:w-28 mx-auto md:mx-0' />
                                    <p className='md:text-left'>
                                        Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.
                                    </p>
                                </div>
                                <div className='w-full flex'>
                                    <button onClick={handleScrollToSpeciality} className='text-xs md:text-sm flex gap-1 items-center justify-center bg-white text-gray-600 rounded-full w-56 md:w-48 py-3 px-1 md:px-4 my-4 hover:scale-105 duration-300'>
                                        Book appointment <IoIosArrowRoundForward className='text-xl font-extrabold' />
                                    </button>
                                </div>
                            </div>
                            <div className='relative flex justify-center'>
                                <img src="/header_img.png" alt="header" className='w-64 md:w-[580px] md:absolute bottom-0 px-0 md:px-10' />
                            </div>
                        </div>

                        {/* #2 */}
                        <div id='speciality' ref={specialityRef} className='flex flex-col justify-center items-center py-16'>
                            <h1 className='text-3xl font-semibold'>Find by Speciality</h1>
                            <p className='md:w-1/3 text-center text-sm my-6'>
                                Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.
                            </p>

                            {/* Container for the scrollable list */}
                            <div  className='flex md:justify-center gap-4 overflow-scroll md:overflow-visible scrollbar-hide w-full px-4 md:px-0'>
                                {speciality.map((items, index) => (
                                    <Link to={items.path} key={index} className='flex flex-col items-center justify-center cursor-pointer min-w-[160px] min-h-[160px] md:min-w-0 hover:translate-y-[-10px] transition-all duration-500'>
                                        <img src={items.img} alt={items.imgAlt} className='w-24' />
                                        <p className='text-xs'>{items.title}</p>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* #3 */}
                        <div className='flex flex-col justify-center items-center py-16'>
                            <h1 className='text-3xl font-semibold '>Top Doctors to Book</h1>
                            <p className='md:w-1/3 text-center text-sm my-6'>Simply browse through our extensive list of trusted doctors.</p>
                            <div className='grid md:grid-cols-5 gap-6'>
                                {doc.map((items, index) => (
                                    <div key={index} className='rounded-lg border border-[#C9D8FF] hover:translate-y-[-10px] transition-all duration-500 cursor-pointer mx-3 md:mx-1'>
                                        <div className='bg-[#EAEFFF] rounded-t-lg'>
                                            <img src={items.img} alt={items.imgAlt} />
                                        </div>
                                        <div className='p-4'>
                                            <div className='flex items-center gap-2 font-semibold text-sm'>
                                                <p className='w-2 h-2 rounded-full bg-green-500'></p>
                                                <p className='text-green-500'>Available</p>
                                            </div>
                                            <p className='text-lg font-semibold'>{items.title1}</p>
                                            <p className='text-sm text-gray-600'>{items.title2}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='flex justify-center items-center mb-16'>
                            <Link to={'/doctors'} className='py-3 px-12 bg-[#eaefff] rounded-full'>more</Link>
                        </div>

                        {/* #4 */}
                        <div className='w-full bg-[#5f6fff] rounded-lg grid md:grid-cols-2 px-4 md:px-10 relative mb-16'>
                            <div className='flex flex-col justify-center py-[4vw] md:pl-7 md:w-[50vw]'>
                                <h1 className='text-2xl md:text-5xl font-bold text-white my-4'>Book Appointment <br /> With 100+ Trusted Doctors</h1>
                                <Link to={'/account'} className='text-sm flex gap-1 items-center justify-center bg-white text-gray-600 rounded-full w-32 md:w-48 py-3 px-4 my-4 hover:scale-105 duration-300'>Create account</Link>
                            </div>
                            <div>
                                <img src="/appointment_img.png" alt="" className='hidden md:flex absolute bottom-0 w-[420px] px-10 right-0' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;
