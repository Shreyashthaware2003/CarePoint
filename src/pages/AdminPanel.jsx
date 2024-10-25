import React from 'react'
import { useState } from 'react'
function AdminPanel() {

    const [account, setAccount] = useState(false);

    return (
        <>
            <div className=' flex h-screen justify-center items-center mx-4'>
                <div className=' border border-gray-300 text-[#5E5E5E] capitalize tracking-wide w-[400px] px-10 py-6 rounded-md shadow-lg'>
                    <div className='flex justify-center gap-2 text-2xl font-bold my-4'>
                        <span className='text-[#5f6fff]'>{account ? 'Admin' : 'Doctor'}</span><span>Login</span>
                    </div>
                    <p className='capitalize text-sm font-semibold my-2'>email</p>
                    <input type="email" className='w-full border border-gray-300 px-4 py-1 rounded-md' />
                    <p className='capitalize text-sm font-semibold mt-4 mb-2'>password</p>
                    <input type="password" className='w-full border border-gray-300 px-4 py-1 rounded-md' />
                    <button className='w-full bg-[#5f6fff] text-white my-4 px-4 py-2 rounded-lg'>Login</button>
                    <span className='text-sm font-semibold flex gap-1'>{account ? 'Doctor' : 'Admin'} Login?<button onClick={()=>setAccount(!account)} className='text-blue-500 underline'>Click here</button></span>
                </div>
            </div>
        </>
    )
}

export default AdminPanel