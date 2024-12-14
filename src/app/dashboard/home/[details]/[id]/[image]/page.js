'use client'
import React, { useState } from 'react';
import { Button, Modal } from 'antd';



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
        <div className='mr-10 py-10'>
            <div>
                <img className='w-full rounded-xl' src="/image/Dashboard/home/select-project-1.png" alt="" />
            </div>
            <div className='mt-10 flex items-center justify-end'>
                <div>
                    <button className='py-3 px-10 border-2 border-[#637f5c] text-[#637f5c] font-semibold mr-2 rounded-md'>Download File</button>
                    <button onClick={showModal} className='py-3 px-10 border-2 border-[#637f5c] bg-[#637f5c] text-white font-semibold mr-2 rounded-md'>Send Offer</button>
                </div>
            </div>

            <Modal open={isModalOpen} footer={false} onCancel={handleCancel}>
                <div className="flex justify-between items-center pb-4 border-b">
                    <h2 className="font-semibold text-2xl">Project Offer</h2>
                    <button
                        onClick={handleCancel}
                        className="text-white bg-red-500 hover:bg-red-600 p-2 rounded-full focus:outline-none focus:ring focus:ring-red-300"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <form
                    className="p-6 w-full max-w-lg mx-auto"
                    onSubmit={(e) => {
                        e.preventDefault(); // Prevent default form submission
                        handleFormSubmit(); // Custom function to handle form submission
                    }}
                >
                    {/* Project Name */}
                    <label className="block mb-4">
                        <span className="block mb-2 text-gray-700 font-medium">Project Name</span>
                        <input
                            type="text"
                            placeholder="Enter project name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300 focus:outline-none"
                        />
                    </label>

                    {/* Timeline */}
                    <label className="block mb-4">
                        <span className="block mb-2 text-gray-700 font-medium">Timeline</span>
                        <input
                            type="text"
                            placeholder="e.g., 3 weeks"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300 focus:outline-none"
                        />
                    </label>

                    {/* Budget */}
                    <label className="block mb-6">
                        <span className="block mb-2 text-gray-700 font-medium">Budget</span>
                        <input
                            type="number"
                            placeholder="Enter budget amount"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300 focus:outline-none"
                        />
                    </label>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            onClick={handleOk}
                            className="w-48 mx-auto flex justify-center font-semibold text-xl items-center bg-primaryBg text-white py-3 px-4 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                        >
                            Send
                        </button>
                    </div>
                </form>
            </Modal>


        </div>
    );
}

export default Page;
