'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { MdOutlineModeEditOutline, MdVisibility, MdVisibilityOff } from 'react-icons/md';

const Page = () => {
    // State to manage password visibility
    const [showPassword, setShowPassword] = useState(false);

    // Toggle password visibility
    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };

    return (
        <div>
            <Link className='text-2xl font-semibold my-10 flex items-center gap-2' href={'/dashboard/setting'}>
                <FaChevronLeft className="text-xl font-semibold" />
                Change Password
            </Link>
            <div className='w-1/2 mx-auto'>
                <form className='my-10' action="">
                    {/* Current Password */}
                    <label className='block mt-3' htmlFor="current-password">
                        <span className='font-semibold block mb-2'>Current password</span>
                        <div className='relative'>
                            <input
                                className='p-3 w-full rounded-md border-2 border-gray-400 pr-10 pl-3'
                                type={showPassword ? "text" : "password"}
                                name="current-password"
                                id="current-password"
                            />
                            {/* <MdOutlineModeEditOutline className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 cursor-pointer' /> */}
                            <div 
                                onClick={togglePasswordVisibility}
                                className='absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer'
                            >
                                {showPassword ? <MdVisibilityOff className='text-gray-600' /> : <MdVisibility className='text-gray-600' />}
                            </div>
                        </div>
                    </label>

                    {/* New Password */}
                    <label className='block mt-3' htmlFor="new-password">
                        <span className='font-semibold block mb-2'>New password</span>
                        <div className='relative'>
                            <input
                                className='p-3 w-full rounded-md border-2 border-gray-400 pr-10 pl-3'
                                type={showPassword ? "text" : "password"}
                                name="new-password"
                                id="new-password"
                            />
                            {/* <MdOutlineModeEditOutline className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 cursor-pointer' /> */}
                            <div 
                                onClick={togglePasswordVisibility}
                                className='absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer'
                            >
                                {showPassword ? <MdVisibilityOff className='text-gray-600' /> : <MdVisibility className='text-gray-600' />}
                            </div>
                        </div>
                    </label>

                    {/* Re-enter New Password */}
                    <label className='block mt-3' htmlFor="re-enter-password">
                        <span className='font-semibold block mb-2'>Re-enter new password</span>
                        <div className='relative'>
                            <input
                                className='p-3 w-full rounded-md border-2 border-gray-400 pr-10 pl-3'
                                type={showPassword ? "text" : "password"}
                                name="re-enter-password"
                                id="re-enter-password"
                            />
                            {/* <MdOutlineModeEditOutline className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 cursor-pointer' /> */}
                            <div 
                                onClick={togglePasswordVisibility}
                                className='absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer'
                            >
                                {showPassword ? <MdVisibilityOff className='text-gray-600' /> : <MdVisibility className='text-gray-600' />}
                            </div>
                        </div>
                    </label>

                    <button className='mt-5 w-full bg-primaryBg text-white py-3 px-10 rounded-md'>
                        Update Password
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Page;
