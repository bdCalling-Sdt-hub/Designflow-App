import { DatePicker, Pagination } from 'antd';
import Link from 'next/link';
import React from 'react';
import { CiCalendar, CiHome } from 'react-icons/ci';
import { FaSearch } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';

const Page = () => {
    return (
        <div className="  ">
            {/* <DashboardHomeHeader></DashboardHomeHeader> */}
            {/* <DashboardHome></DashboardHome> */}

            <div className='md:mr-10 md:px-0 px-5 my-10'>
                <div className='mt-5 bg-[#f2f6f5] p-5 rounded-lg border-green-400 border'>

                    <div className='flex items-center gap-5 flex-wrap '>
                        <img className='w-14 rounded-full' src="/image/Dashboard/userImage.png" alt="" />
                        <div>
                            <h2 className='text-xl font-semibold'>12345</h2>
                            <p className='flex items-center gap-2'><IoLocationSharp />Dhaka Bangladesh</p>
                        </div>
                    </div>
                    <div className='pl-10 my-5'>
                        <hr />
                    </div>

                    <div className='md:grid grid-cols-5 pl-10 mt-5'>
                        <div className='md:col-span-4 flex justify-center items-center flex-wrap md:gap-48 gap-5'>
                            <div>
                                <h3 className='font-semibold mb-2'>Starting Date</h3>
                                <p className='flex items-center gap-2'><CiCalendar className='text-2xl' />Dhaka Bangladesh</p>
                            </div>
                            <div>
                                <h3 className='font-semibold mb-2'>Delivery Date</h3>
                                <p className='flex items-center gap-2'><CiCalendar className='text-2xl' />Dhaka Bangladesh</p>
                            </div>
                            <div>
                                <h3 className='font-semibold mb-2'>Project</h3>
                                <p className='flex items-center gap-2'><CiHome className='text-2xl' />Dhaka Bangladesh</p>
                            </div>
                        </div>
                        <div className='md:col-span-1 md:mt-0 mt-5'>
                            <Link href={'/dashboard/projects/details'} className='py-3 w-full block text-center bg-[#3aa063] text-white font-semibold'>Complete</Link>
                        </div>
                    </div>


                </div>
                <div className='mt-5 bg-[#f2f6f5] p-5 rounded-lg border-green-400 border'>

                    <div className='flex items-center gap-5 flex-wrap '>
                        <img className='w-14 rounded-full' src="/image/Dashboard/userImage.png" alt="" />
                        <div>
                            <h2 className='text-xl font-semibold'>12345</h2>
                            <p className='flex items-center gap-2'><IoLocationSharp />Dhaka Bangladesh</p>
                        </div>
                    </div>
                    <div className='pl-10 my-5'>
                        <hr />
                    </div>

                    <div className='md:grid grid-cols-5 pl-10 mt-5'>
                        <div className='md:col-span-4 flex justify-center items-center flex-wrap md:gap-48 gap-5'>
                            <div>
                                <h3 className='font-semibold mb-2'>Starting Date</h3>
                                <p className='flex items-center gap-2'><CiCalendar className='text-2xl' />Dhaka Bangladesh</p>
                            </div>
                            <div>
                                <h3 className='font-semibold mb-2'>Delivery Date</h3>
                                <p className='flex items-center gap-2'><CiCalendar className='text-2xl' />Dhaka Bangladesh</p>
                            </div>
                            <div>
                                <h3 className='font-semibold mb-2'>Project</h3>
                                <p className='flex items-center gap-2'><CiHome className='text-2xl' />Dhaka Bangladesh</p>
                            </div>
                        </div>
                        <div className='md:col-span-1 md:mt-0 mt-5'>
                            <Link href={'/dashboard/projects/details'} className='py-3 w-full block text-center bg-[#3aa063] text-white font-semibold'>Complete</Link>
                        </div>
                    </div>


                </div>
                <div className='mt-5 bg-[#f2f6f5] p-5 rounded-lg border-green-400 border'>

                    <div className='flex items-center gap-5 flex-wrap '>
                        <img className='w-14 rounded-full' src="/image/Dashboard/userImage.png" alt="" />
                        <div>
                            <h2 className='text-xl font-semibold'>12345</h2>
                            <p className='flex items-center gap-2'><IoLocationSharp />Dhaka Bangladesh</p>
                        </div>
                    </div>
                    <div className='pl-10 my-5'>
                        <hr />
                    </div>

                    <div className='md:grid grid-cols-5 pl-10 mt-5'>
                        <div className='md:col-span-4 flex justify-center items-center flex-wrap md:gap-48 gap-5'>
                            <div>
                                <h3 className='font-semibold mb-2'>Starting Date</h3>
                                <p className='flex items-center gap-2'><CiCalendar className='text-2xl' />Dhaka Bangladesh</p>
                            </div>
                            <div>
                                <h3 className='font-semibold mb-2'>Delivery Date</h3>
                                <p className='flex items-center gap-2'><CiCalendar className='text-2xl' />Dhaka Bangladesh</p>
                            </div>
                            <div>
                                <h3 className='font-semibold mb-2'>Project</h3>
                                <p className='flex items-center gap-2'><CiHome className='text-2xl' />Dhaka Bangladesh</p>
                            </div>
                        </div>
                        <div className='md:col-span-1 md:mt-0 mt-5'>
                            <Link href={'/dashboard/projects/details'} className='py-3 w-full block text-center bg-[#3aa063] text-white font-semibold'>Complete</Link>
                        </div>
                    </div>


                </div>
            </div>


            <div className='flex items-center justify-between mx-5 md:mx-0'>
                <h2 className='font-semibold'>SHOWING 1-12 OF 250</h2>
                <div className='flex items-center justify-end'>
                    <Pagination defaultCurrent={1} total={50} />
                </div>
            </div>

        </div>
    );
}

export default Page;
