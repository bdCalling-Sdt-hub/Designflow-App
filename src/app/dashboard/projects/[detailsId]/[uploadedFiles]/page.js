'use client'
import { Modal } from 'antd';
import Link from 'next/link';
import React, { useState } from 'react';

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



    return (
        <div>
            <div className='md:pr-10 md:px-0 px-5 mb-10'>
                <h2 className='my-10 font-semibold text-2xl'>Uploaded Files</h2>
                <div className='grid xl:grid-cols-4 sm:grid-cols-2 gap-10'>
                    <Link href={'/dashboard/projects/details/upload/uploadDetails'}><img className='rounded-xl' src="/image/Dashboard/home/select-project-1.png" alt="" /></Link>
                    <Link href={'/dashboard/projects/details/upload/uploadDetails'}><img className='rounded-xl' src="/image/Dashboard/home/select-project-1.png" alt="" /></Link>
                    <Link href={'/dashboard/projects/details/upload/uploadDetails'}><img className='rounded-xl' src="/image/Dashboard/home/select-project-1.png" alt="" /></Link>
                    <Link href={'/dashboard/projects/details/upload/uploadDetails'}><img className='rounded-xl' src="/image/Dashboard/home/select-project-1.png" alt="" /></Link>
                    <Link href={'/dashboard/projects/details/upload/uploadDetails'}><img className='rounded-xl' src="/image/Dashboard/home/select-project-1.png" alt="" /></Link>
                    <Link href={'/dashboard/projects/details/upload/uploadDetails'}><img className='rounded-xl' src="/image/Dashboard/home/select-project-1.png" alt="" /></Link>

                </div>
                <div>
                    <h2 className='my-10 font-semibold text-2xl'>Provided Description</h2>
                    <p className='p-5 bg-[#c3d1c02f] border-2 border-black'>Lorem ipsum dolor sit amet, perfecto urbanitas ne qui, dicta commodo cu mei. Id eirmod alienum eloquentiam has. Saepe utamur vim in. Et adhuc intellegat vim. Elitr graecis mandamus cu eos. Dicta alienum sadipscing cu mel, at has elit putent feugait, iusto fierent persequeris eam et.</p>
                </div>
                <div className='flex items-center justify-end mt-10'>
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

            </div >
        </div>
    );
}

export default Page;
