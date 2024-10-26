import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function About() {
    return (
        <>
            <Navbar />
            <div className='flex justify-center'>
                <div className='w-[350px] md:w-[1200px] mx-4'>
                    <div className='flex flex-col  pt-14'>
                        <div className=' flex justify-center uppercase  gap-2 font-semibold text-3xl'>
                            <span className='text-gray-400'>About</span>
                            <span>Us</span>
                        </div>
                        <div className='flex flex-col md:flex-row items-center justify-center mt-8 md:my-8'>
                            <img src="/about_image.png" alt="doctors" className='w-96 md:h-96' />
                            <div className='space-y-6 py-10  md:p-16 md:w-[800px] text-sm font-semibold text-gray-500'>
                                <p>Welcome to CarePoint, your trusted partner in managing your healthcare needs conveniently and efficiently. At CarePoint, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
                                <p>CarePoint is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, CarePoint is here to support you every step of the way.</p>
                                <h1 className='text-black font-bold'>Our vision</h1>
                                <p>Our vision at CarePoint is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
                            </div>
                        </div>
                        <div className='flex flex-col md:py-10'>
                            <div className='uppercase space-x-1 text-xl'>
                                <span >why</span>
                                <span className='font-bold text-gray-600'>choose us</span>
                            </div>
                            <div className='flex flex-col md:flex-row border border-gray-300 divide-y md:divide-x divide-gray-300 my-4 md:my-6'>
                                <div className='p-10 md:p-16 space-y-4 text-gray-600 hover:bg-blue-500 hover:text-white hover:transition-all duration-300 cursor-pointer'>
                                    <h1 className='text-sm font-bold '>EFFICIENCY:</h1>
                                    <p className='text-sm'>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
                                </div>
                                <div className='p-8 md:p-16 space-y-4 text-gray-600 hover:bg-blue-500 hover:text-white hover:transition-all duration-300 cursor-pointer'>
                                    <h1 className='text-sm font-bold '>CONVENIENCE:</h1>
                                    <p className='text-sm'>Access to a network of trusted healthcare professionals in your area.</p>
                                </div>
                                <div className='p-8 md:p-16 space-y-4 text-gray-600 hover:bg-blue-500 hover:text-white hover:transition-all duration-300 cursor-pointer'>
                                    <h1 className='text-sm font-bold '>PERSONALIZATION:</h1>
                                    <p className='text-sm'>Tailored recommendations and reminders to help you stay on top of your health.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </>
    )
}

export default About