import { Calendar } from 'antd';
import Link from 'next/link';
import React from 'react';
import { FaArrowLeft, FaExchangeAlt } from 'react-icons/fa';


const page = () => {
    return (
        <div className='my-10 mr-10'>
            <div className='flex items-center justify-between gap-5 flex-wrap'>
                <Link href={'/dashboard/home'} className='flex items-center gap-3 text-3xl font-semibold' > <FaArrowLeft />Service Requests</Link>
                <div className='flex items-center gap-5'>
                    <button className='py-3 px-8 bg-primaryBg text-white flex items-center gap-3 justify-center rounded-md'><FaExchangeAlt /> Today’s Req</button>
                    <Link href={'/dashboard/servicerequests/details'} className='py-3 px-8 bg-primaryBg text-white flex items-center gap-3 justify-center rounded-md'><FaExchangeAlt />  All Req</Link>
                </div>
            </div>
            <div className='mt-10 grid grid-cols-3 gap-10 items-start'>
                <div className='border-2  rounded-md col-span-2 overflow-hidden p-5'>
                    <Calendar></Calendar>
                </div>
                <div className='col-span-1 px-5 py-10 bg-gray-200 rounded-md'>
                    <h2 className='font-semibold'>Today’s Requests</h2>

                    <div className='mt-5 bg-white p-5 flex items-center justify-between'>
                        <div className='flex items-center gap-2'>
                            <img className='w-10 rounded-full' src="/image/Dashboard/userImage.png" alt="" />
                            <span className='font-semibold capitalize'>anika</span>
                        </div>
                        <p className='font-semibold text-sm text-gray-500'>Info@gmail.com</p>
                        <p className='font-semibold text-sm text-gray-500'>11 oct 24, 11.10PM</p>
                    </div>

                    <div className='mt-5 bg-white p-5 flex items-center justify-between'>
                        <div className='flex items-center gap-2'>
                            <img className='w-10 rounded-full' src="/image/Dashboard/userImage.png" alt="" />
                            <span className='font-semibold capitalize'>anika</span>
                        </div>
                        <p className='font-semibold text-sm text-gray-500'>Info@gmail.com</p>
                        <p className='font-semibold text-sm text-gray-500'>11 oct 24, 11.10PM</p>
                    </div>

                    <div className='mt-5 bg-white p-5 flex items-center justify-between'>
                        <div className='flex items-center gap-2'>
                            <img className='w-10 rounded-full' src="/image/Dashboard/userImage.png" alt="" />
                            <span className='font-semibold capitalize'>anika</span>
                        </div>
                        <p className='font-semibold text-sm text-gray-500'>Info@gmail.com</p>
                        <p className='font-semibold text-sm text-gray-500'>11 oct 24, 11.10PM</p>
                    </div>

                    <div className='mt-5 bg-white p-5 flex items-center justify-between'>
                        <div className='flex items-center gap-2'>
                            <img className='w-10 rounded-full' src="/image/Dashboard/userImage.png" alt="" />
                            <span className='font-semibold capitalize'>anika</span>
                        </div>
                        <p className='font-semibold text-sm text-gray-500'>Info@gmail.com</p>
                        <p className='font-semibold text-sm text-gray-500'>11 oct 24, 11.10PM</p>
                    </div>

                    <div className='mt-5 bg-white p-5 flex items-center justify-between'>
                        <div className='flex items-center gap-2'>
                            <img className='w-10 rounded-full' src="/image/Dashboard/userImage.png" alt="" />
                            <span className='font-semibold capitalize'>anika</span>
                        </div>
                        <p className='font-semibold text-sm text-gray-500'>Info@gmail.com</p>
                        <p className='font-semibold text-sm text-gray-500'>11 oct 24, 11.10PM</p>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default page;
