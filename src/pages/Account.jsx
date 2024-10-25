import React from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
function Account() {

    const [account, setAccount] = useState(false);
    return (
        <>
            <Navbar />

            <div className='flex justify-center '>
                <div className='w-[350px] md:w-[1200px] mx-4  flex justify-center py-10 md:py-20 px-2 md:px-0'>
                    <div className='w-[380px] border rounded-lg shadow-lg py-6 md:py-10 px-8 text-[#5E5E5E] tracking-wide'>
                        <h1 className='capitalize text-2xl font-bold '>
                            {account ? 'Login Account' : 'Create Account'}
                        </h1>
                        <span className='text-xs font-semibold my-2'>
                            {account ? 'Please login to access your account' : 'Please create account to access your account'}
                        </span>
                        <div className={`${account ? 'hidden' : 'flex'} flex flex-col`}>
                            <p className='capitalize text-sm mt-4 mb-2 font-semibold'>full name</p>
                            <input type="text" className='px-4 py-2 rounded-md border border-gray-300 w-full text-black' />
                        </div>
                        <p className='capitalize text-sm mt-4 mb-2 font-semibold'>email</p>
                        <input type="email" className='px-4 py-2 rounded-md border border-gray-300 w-full text-black' />
                        <p className='capitalize text-sm mt-4 mb-2 font-semibold'>password</p>
                        <input type="password" className='px-4 py-2 rounded-md border border-gray-300 w-full text-black' />
                        <button className='bg-[#5f6fff] text-white w-full my-4 py-3 px-4 rounded-md'>
                            {account ? 'Login' : 'Create Account'}
                        </button>
                        <span className='text-xs font-semibold'>
                            {account ? 'Already have an account? ' : "Don't have an account? "}
                            <button onClick={() => setAccount(!account)} className="text-blue-500 underline">
                                {account ? 'Login here' : 'Create one here'}
                            </button></span>
                    </div>
                </div>
            </div >
            <Footer />
        </>
    )
}

export default Account