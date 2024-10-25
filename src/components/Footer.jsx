import React from 'react'

function Footer() {
    return (
        <>
            <div className='flex justify-center relative bottom-0 '>
                <div className='w-[350px] md:w-[1200px] mb-4 md:mb-0'>
                    <div className=' flex flex-col md:flex-row justify-between pt-16 pb-8 gap-10'>
                        <div className='md:w-[400px] space-y-4'>
                            <div className='flex items-center gap-1'>
                                <img src="/logo.svg" className='' alt="" />
                                <h1 className='font-bold text-3xl tracking-wide text-violet-950'>CarePoint</h1>
                            </div>
                            <p className='text-gray-500 text-sm'>Your trusted partner in scheduling health appointments. We make it easier to connect with the best doctors and healthcare providers. Trust us to connect you with the best doctors for your well-being.</p>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h1 className='uppercase text-xl md:text-2xl font-semibold tracking-wide'>company</h1>
                            <ul className='flex flex-col gap-2 text-sm text-gray-500'>
                                <li>Home</li>
                                <li>About us</li>
                                <li>Delivery</li>
                                <li>Privacy policy</li>
                            </ul>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h1 className='uppercase text-xl md:text-2xl font-semibold tracking-wide'>get in touch</h1>
                            <a href="#" className='text-sm text-gray-500'>+91 987-654-3210</a>
                            <a href="mailto:shreyashthaware284@gmail.com" className='text-sm text-gray-500'>shreyashthaware284@gmail.com</a>
                        </div>
                    </div>
                    <hr />
                    <div className='flex justify-center items-center py-4 md:py-6 text-sm tracking-wide font-semibold' >
                        <h1>Copyright 2024 - All Right Reserved.</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer