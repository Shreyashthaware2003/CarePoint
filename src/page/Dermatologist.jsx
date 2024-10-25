import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Dermatologist() {
    const [isVisible, setIsVisible] = useState(false);

    const doc = [
        
        {
            img: '/doctors/doc3.png',
            title1: 'Dr. Sarah Patel',
            title2: 'Dermatologist',
            imgAlt: 'Dr. Sarah Patel',
        },
        
        {
            img: '/doctors/doc9.png',
            title1: 'Dr. Ava Mitchell',
            title2: 'Dermatologist',
            imgAlt: 'Dr. Ava Mitchell',
        },
        
        {
            img: '/doctors/doc15.png',
            title1: 'Dr. Amelia Hill',
            title2: 'Dermatologist',
            imgAlt: 'Dr. Amelia Hill',
        },
    ]
    return (
        <>
            <Navbar />
            <div className='flex justify-center '>
                <div className='w-[350px] md:w-[1200px] mx-4'>
                    <div className=''>
                        <span className='text-gray-500 text-base font-semibold tracking-wide'>Browse through the doctors specialist.</span>

                        {/* Filter Button */}
                        <button onClick={() => setIsVisible(!isVisible)} className={`md:hidden px-2 py-1 mt-4 text-sm rounded-md border tracking-wider font-medium  ${isVisible ? 'bg-blue-500 text-white' : ''}`}>Filters</button>

                        <div className='flex flex-col md:flex-row gap-4 my-4'>

                            {/* left side */}
                            <div className={`${isVisible ? 'flex' : 'hidden'} md:flex flex-col  space-y-4 text-sm text-gray-500 font-medium tracking-wide md:tracking-normal`}>
                                <Link to={'/general physician'} className='pl-3 pr-16 py-2 rounded-md border border-gray-300 ' >General physician</Link>
                                <Link to={'/Gynecologist'} className='pl-3 pr-16 py-2 rounded-md border border-gray-300 ' >Gynecologist</Link>
                                <Link to={'/doctors'} className={`${isVisible ? 'bg-[#E2E5FF] text-black' : 'bg-[#E2E5FF] text-black'}  pl-3 pr-16 py-2 rounded-md border border-gray-300 `}>Dermatologist</Link>
                                <Link to={'/Pediatricians'} className='pl-3 pr-16 py-2 rounded-md border border-gray-300 '>Pediatricians</Link>
                                <Link to={'/Neurologist'} className='pl-3 pr-16 py-2 rounded-md border border-gray-300 '>Neurologist</Link>
                                <Link to={'/Gastroenterologist'} className='pl-3 pr-16 py-2 rounded-md border border-gray-300 '>Gastroenterologist</Link>
                            </div>


                            {/* right side */}
                            <div className='grid md:grid-cols-4 gap-4'>
                                {/* Cards */}
                                {doc.map((items, index) => (
                                    <div key={index} className='rounded-lg border border-[#C9D8FF] hover:translate-y-[-10px] transition-all duration-500 cursor-pointer mx-3 md:mx-1'>
                                        <div className='bg-[#EAEFFF] rounded-t-lg'>
                                            <img src={items.img} alt={items.imgAlt} />
                                        </div>
                                        <div className='p-4  '>
                                            <div className='flex items-center gap-2 font-semibold  text-sm'>
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
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Dermatologist