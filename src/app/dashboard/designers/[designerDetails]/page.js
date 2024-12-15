import Link from 'next/link';
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';

const Page = () => {
    return (
        <div className='mr-10 md:mx-0 mx-5'>
            
            <Link href={'/dashboard/home'} className='flex items-center gap-2 my-10 text-xl font-semibold'>
                <FaArrowLeft className='text-xl font-semibold' />
                Desginer Details
            </Link>
            <div className=' md:w-1/2 mx-auto'>
                <div className='flex items-center justify-between flex-wrap gap-5'>
                    <div className='flex items-center gap-5'>
                        <img className='w-24 rounded-full' src="/image/Dashboard/userImage.png" alt="" />
                        <h2 className='text-2xl font-semibold'>Alax Deo</h2>
                    </div>
                    <div>
                        <button className='py-2 px-8 bg-orange-700 font-semibold text-white flex items-center gap-5 rounded-md'><img className='w-12' src="/image/hero/Hand-holdinggift.png" alt="" /> Available Bonus : $200</button>
                    </div>
                </div>
                <div>
                    <div className='flex items-center justify-between gap-5 my-5 border-b-2 border-[#637f5c] py-2 '>
                        <span className='font-medium'>Name:</span>
                        <span>Nerob</span>
                    </div>
                    <div className='flex items-center justify-between gap-5 my-5 border-b-2 border-[#637f5c] py-2 '>
                        <span className='font-medium'>Name:</span>
                        <span>Nerob</span>
                    </div>
                    <div className='flex items-center justify-between gap-5 my-5 border-b-2 border-[#637f5c] py-2 '>
                        <span className='font-medium'>Name:</span>
                        <span>Nerob</span>
                    </div>
                    <div className='flex items-center justify-between gap-5 my-5 border-b-2 border-[#637f5c] py-2 '>
                        <span className='font-medium'>Name:</span>
                        <span>Nerob</span>
                    </div>
                    <div className='flex items-center justify-between gap-5 my-5 border-b-2 border-[#637f5c] py-2 '>
                        <span className='font-medium'>Name:</span>
                        <span>Nerob</span>
                    </div>
                    <div className='flex items-center justify-between gap-5 my-5 border-b-2 border-[#637f5c] py-2 '>
                        <span className='font-medium'>Name:</span>
                        <span>Nerob</span>
                    </div>
                </div>
                <div className='flex items-center justify-end gap-2'>
                    <button className='py-3 px-8 bg-orange-600 text-white rounded-md font-semibold'>Add Admin</button>
                    <button className='py-3 px-8 bg-[#637f5c] text-white rounded-md font-semibold'>Assign Project</button>
                </div>
            </div>
        </div>
    );
}

export default Page;
