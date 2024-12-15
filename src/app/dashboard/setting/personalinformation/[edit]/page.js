import Link from 'next/link';
import React from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { MdOutlineModeEditOutline } from 'react-icons/md';

const Page = () => {
    return (
        <div>
            <Link className='text-2xl font-semibold my-10 flex items-center gap-2' href={'/dashboard/setting'}>
                <FaChevronLeft className="text-xl font-semibold" />
                Personal Information
            </Link>
            <div className='w-1/2 mx-auto'>
                <div className='flex items-center'>
                    <div className='flex items-center gap-5'>
                        <img className='w-36 rounded-full' src="/image/Dashboard/userImage.png" alt="" />
                        <h2 className='text-2xl font-semibold'>Jae</h2>
                    </div>
                </div>
                <form className='my-10' action="">
                    {/* Full Name */}
                    <label className='block mt-3' htmlFor="">
                        <span className='font-semibold block mb-2'>Full Name</span>
                        <div className='relative'>
                            <input
                                className='p-3 w-full rounded-md border-2 border-gray-400 pr-10'
                                type="text"
                                name="Jae"
                                defaultValue={'Jae'}
                                id=""
                            />
                            <MdOutlineModeEditOutline className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 cursor-pointer' />
                        </div>
                    </label>

                    {/* Email */}
                    <label className='block mt-3' htmlFor="">
                        <span className='font-semibold block mb-2'>Email</span>
                        <div className='relative'>
                            <input
                                className='p-3 w-full rounded-md border-2 border-gray-400 pr-10'
                                type="email"
                                name="Email"
                                defaultValue={'jae@gmail.com'}
                                id=""
                            />
                            <MdOutlineModeEditOutline className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 cursor-pointer' />
                        </div>
                    </label>

                    {/* Address */}
                    <label className='block mt-3' htmlFor="">
                        <span className='font-semibold block mb-2'>Address</span>
                        <div className='relative'>
                            <input
                                className='p-3 w-full rounded-md border-2 border-gray-400 pr-10'
                                type="text"
                                name="Address"
                                value={'ABC'}
                                id=""
                            />
                            <MdOutlineModeEditOutline className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 cursor-pointer' />
                        </div>
                    </label>

                    {/* Contact Number */}
                    <label className='block mt-3' htmlFor="">
                        <span className='font-semibold block mb-2'>Contact number</span>
                        <div className='relative'>
                            <input
                                className='p-3 w-full rounded-md border-2 border-gray-400 pr-10'
                                type="text"
                                name="number"
                                value={'+88 0170000000744'}
                                id=""
                            />
                            <MdOutlineModeEditOutline className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 cursor-pointer' />
                        </div>
                    </label>

                    <button className='mt-5 w-full bg-primaryBg text-white py-3 px-10 rounded-md'>
                        Update Profile
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Page;
