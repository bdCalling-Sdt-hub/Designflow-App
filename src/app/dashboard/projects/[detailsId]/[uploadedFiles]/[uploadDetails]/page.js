'use client'
import { Avatar, Modal, Tooltip } from 'antd';
import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { MdModeEditOutline } from 'react-icons/md';

import { useState } from 'react';
import { IoAdd } from 'react-icons/io5';
import { FaMinus } from 'react-icons/fa';

const Page = () => {


    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };



    const [scale, setScale] = useState(1); // Set initial zoom level

    const zoomIn = () => {
        if (scale < 3) {
            setScale(scale + 0.2); // Increase zoom level
        }
    };

    const zoomOut = () => {
        if (scale > 1) {
            setScale(scale - 0.2); // Decrease zoom level
        }
    };

    return (
        <div className='my-10 md:mr-10 md:px-0 px-5 grid md:grid-cols-4 gap-10 items-center'>
            <div className='md:col-span-3 relative overflow-hidden'>
                <div className='w-full h-full'>
                    {/* Image with scaling */}
                    <img
                        className='w-full h-full object-cover transition-transform duration-300'
                        src='/image/Dashboard/home/ProjectsUploadDetailsImage.png'
                        alt='Project'
                        style={{ transform: `scale(${scale})` }} // Apply scaling to image
                    />
                </div>
                {/* Zoom In / Zoom Out buttons */}
                <div className='absolute bottom-10 left-0 w-full'>
                    <div className='flex justify-center items-center gap-5'>
                        <button
                            className='w-16 h-16 bg-gray-100 rounded-md flex items-center justify-center'
                            onClick={zoomIn}
                        >
                            <IoAdd className='text-3xl' />
                        </button>
                        <button
                            className='w-16 h-16 bg-gray-100 rounded-md flex items-center justify-center'
                            onClick={zoomOut}
                        >
                            <FaMinus className='text-2xl' />
                        </button>
                    </div>
                </div>
            </div>
            <div className='md:col-span-1'>

                <div className=' my-5 '>

                    <div className="flex -space-x-4 rtl:space-x-reverse px-10">
                        <img className="w-16 h-16 border-2 border-white rounded-full dark:border-gray-800" src="/image/Dashboard/userImage.png" alt="" />
                        <img className="w-16 h-16 border-2 border-white rounded-full dark:border-gray-800" src="/image/Dashboard/userImage.png" alt="" />
                        <img className="w-16 h-16 border-2 border-white rounded-full dark:border-gray-800" src="/image/Dashboard/userImage.png" alt="" />
                        <img className="w-16 h-16 border-2 border-white rounded-full dark:border-gray-800" src="/image/Dashboard/userImage.png" alt="" />
                        <a className="flex items-center justify-center w-16 h-16 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800" href="#">+99</a>
                    </div>


                    <div className='bg-[#dee6dc] p-5 rounded-xl my-5 w-full '>
                        <input
                            className="bg-transparent border-none focus:border-none focus:ring-0 focus:outline-none"
                            type="text"
                            placeholder="Add Comment...."
                        />

                        <div className='flex justify-end gap-2 mt-5'>
                            <button className='px-8 py-2  bg-[#ddcebc]  text-black rounded-md'>Show all</button>
                            <button className='px-8 py-2  bg-orange-600 text-white rounded-md'>Submit</button>
                        </div>
                    </div>

                    <div>
                        <img className='rounded-xl' src="/image/Dashboard/home/select-project-1.png" alt="" />
                    </div>

                    <div className='w-full py-20 bg-orange-600  rounded-xl my-5 flex items-center  justify-center flex-col cursor-pointer '>
                        <FiPlus className='text-5xl text-white' />
                        <p className='text-white border-b-2 mt-5'>Add Images</p>
                    </div>

                    <div className='p-5 bg-orange-100 rounded-md border-[1px] border-black'>
                        <div className='p-3 w-14 h-14 flex items-center justify-center rounded-md bg-orange-600'>
                            <MdModeEditOutline className='text-3xl text-white' />
                        </div>
                    </div>

                    <div className='flex items-center justify-center mt-5'>
                        <button onClick={showModal} className='px-20 rounded-md py-3 bg-[#637f5c] text-white '>Send Feedback</button>
                    </div>



                    <Modal open={isModalOpen} footer={false} onCancel={handleCancel}>


                        <form
                            className="p-6 w-full max-w-lg mx-auto"
                            onSubmit={(e) => {
                                e.preventDefault(); // Prevent default form submission
                                handleFormSubmit(); // Custom function to handle form submission
                            }}
                        >
                            {/* Project Name */}
                            <label className="block mb-4">
                                <span className="block mb-2 text-gray-700 font-medium">Write Feedback</span>
                                <input
                                    type="text"
                                    placeholder="Enter Feedback ..."
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300 focus:outline-none"
                                />
                            </label>



                            {/* Submit Button */}
                            <div>
                                <button
                                    type="submit"
                                    onClick={handleOk}
                                    className="w-48 mt-48 mx-auto flex justify-center font-semibold text-xl items-center bg-primaryBg text-white py-3 px-4 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                                >
                                    Send
                                </button>
                            </div>
                        </form>
                    </Modal>



                </div>
            </div>
        </div>
    );
}

export default Page;
