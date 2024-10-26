import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
function Contact() {
    return (
        <>
            <Navbar />
            <div className='flex justify-center'>
                <div className='w-[350px] md:w-[1200px] mx-4'>
                    <div className='flex flex-col  pt-14'>
                        <div className=' flex justify-center uppercase  gap-2 font-semibold text-3xl'>
                            <span className='text-gray-400'>Contact</span>
                            <span>Us</span>
                        </div>
                        <div className='flex flex-col md:flex-row justify-center mt-8 md:my-8'>
                            <img src="/contact_image.png" alt="doctors" className='w-96 md:h-96' />
                            <div className='space-y-6 py-10  md:px-10  text-sm font-semibold text-gray-500 '>
                                <h1 className='text-xl text-gray-700 font-bold'>OUR OFFICE</h1>
                                
                                <p>00000 Willms Station <br />
                                Suite 000, Washington, USA</p>

                                <p>Tel: (000) 000-0000 <br />
                                Email: shreyashthaware284@gmail.com</p>
                                
                                <h1 className='text-xl text-gray-700 font-bold'>CAREERS AT PRESCRIPTO</h1>
                                <p>Learn more about our teams and job openings.</p>

                                <button className='px-6 py-3 border border-black text-black hover:bg-black hover:text-white cursor-pointer hover:transition-all duration-700'>Explore Jobs</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </>
    )
}

export default Contact