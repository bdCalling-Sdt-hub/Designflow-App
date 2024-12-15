
import React from 'react';
import { CiCalendarDate, CiLocationOn } from 'react-icons/ci';
import { MdOutlineEmail, MdOutlinePhoneIphone } from 'react-icons/md';
import { PiMapPinLineLight } from "react-icons/pi";
import { IoCalendarClearOutline } from 'react-icons/io5';
import Link from 'next/link';



const page = () => {



    return (
        <div className='md:p-10 p-5'>
            <div className='flex justify-between flex-wrap gap-5 items-center'>
                <div className='flex items-center gap-5'>
                    <img src='/image/Dashboard/userImage.png' />
                    <div>
                        <h2 className='text-2xl font-semibold'>Richard Co.</h2>
                        <h3 className='flex items-center gap-2'><PiMapPinLineLight /> Dhaka Bangladesh</h3>
                    </div>
                </div>
                <div>
                    <button className='px-8 py-3 bg-yellow-400 font-semibold '>Pending Work</button>
                </div>
            </div>
        
            <h2 className='my-10 text-xl font-semibold'>Employee Details</h2>
            <div className='grid xl:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-10'>
                <div>
                    <h2 className='font-semibold mb-2'>Client Name</h2>
                    <div className='flex items-center gap-2'>
                        <img className='w-8' src='/image/Dashboard/userImage.png' alt='' />
                        <span>Nerob</span>
                    </div>
                </div>
                <div>
                    <h2 className='font-semibold mb-2'>Email</h2>
                    <div className='flex items-center gap-2'>
                        <div>
                            <MdOutlineEmail className='text-2xl' />
                        </div>
                        <span>nimur@gmail.com</span>
                    </div>
                </div>

                <div>
                    <h2 className='font-semibold mb-2'>Phone Number</h2>
                    <div className='flex items-center gap-2'>
                        <div>
                            <MdOutlinePhoneIphone className='text-2xl' />
                        </div>
                        <span>52654565656</span>
                    </div>
                </div>

                <div>
                    <h2 className='font-semibold mb-2'>Location</h2>
                    <div className='flex items-center gap-2'>
                        <div>
                            <CiLocationOn className='text-2xl' />
                        </div>
                        <span>Dhaka Bangladesh</span>
                    </div>
                </div>

                <div>
                    <h2 className='font-semibold mb-2'>Starting Date</h2>
                    <div className='flex items-center gap-2'>
                        <div>
                            <IoCalendarClearOutline className='text-2xl' />
                        </div>
                        <span>1 Jan 2025</span>
                    </div>
                </div>

                <div>
                    <h2 className='font-semibold mb-2'>Delivery Date</h2>
                    <div className='flex items-center gap-2'>
                        <div>
                            <IoCalendarClearOutline className='text-2xl' />
                        </div>
                        <span>1 Jan 2025</span>
                    </div>
                </div>

            </div>

            <div className='my-10 grid xl:grid-cols-3 md:grid-cols-2 gap-10'>
                <div>
                    <h2 className='py-2 border-b-[1px] border-primaryBg mb-2 text-xl font-semibold'>Project Type</h2>
                    <div className='bg-primaryBg p-5 rounded-xl'>
                        <img className='rounded-xl w-full' src='/image/Dashboard/home/select-project-4.png' alt='' />
                        <h2 className='font-semibold text-white mt-5'>Normal</h2>
                    </div>
                </div>
                <div>
                    <h2 className='py-2 border-b-[1px] border-primaryBg mb-2 text-xl font-semibold'>Select Style</h2>
                    <div className='bg-primaryBg p-5 rounded-xl'>
                        <img className='rounded-xl w-full' src='/image/Dashboard/home/select-project-4.png' alt='' />
                        <h2 className='font-semibold text-white mt-5'>Medium</h2>
                    </div>
                </div>
                <div>
                    <div>
                        <h2 className='py-2 border-b-[1px] border-primaryBg mb-2 text-xl font-semibold'>Select Category</h2>
                        <button className='bg-primaryBg p-5 rounded-full w-full font-semibold text-white'>
                            Interior
                        </button>
                    </div>
                    <div className='mt-5'>
                        <h2 className='py-2 border-b-[1px] border-primaryBg mb-2 text-xl font-semibold'>Select Service</h2>
                        <button className='bg-primaryBg p-2 rounded-full w-full font-semibold text-white flex items-center gap-5'>
                            <div className='w-12 h-12 rounded-full bg-black flex items-center justify-center'><img className='rounded-full w-8' src='/image/Dashboard/home/services-1.png' alt='' /></div> 3D Rendering
                        </button>
                    </div>
                    <div className='my-5 block'>
                        <h2 className='py-2 border-b-[1px] border-primaryBg mb-2 text-xl font-semibold'>Required Visuals</h2>
                        <select className='w-full p-2 border-2 border-black' name="" id="">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>

                    <div className='my-5 block'>
                        <h2 className='py-2 border-b-[1px] border-primaryBg mb-2 text-xl font-semibold'>Timeline</h2>
                        <p className='flex items-center gap-2 border p-2 mt-5 border-black justify-center'><CiCalendarDate className='font-semibold text-2xl' />12 December 2025 - 20 December 2025</p>
                    </div>

                    <div className='flex items-center justify-end'>
                        <Link className='mt-20  px-20 rounded-md py-3 bg-[#637f5c] text-white ' href={'/dashboard/home/id/id'}>Next</Link>
                    </div>
                </div>


            </div>
            <div></div>
        </div>
    );
}

export default page;
