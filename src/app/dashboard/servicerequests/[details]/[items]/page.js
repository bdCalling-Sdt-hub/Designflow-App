'use client'
import React, { useState } from 'react';
import { CiFilter } from 'react-icons/ci';
import { FaRegLightbulb, FaRegStar, FaSearch, FaStar } from 'react-icons/fa';

const page = () => {

    const [showFilter, setShowFilter] = useState(false)

    const handleFilterShow =()=>{
        setShowFilter(!showFilter)
    }

    return (
        <div className='my-10 mr-10'>
            <div className=' flex items-center gap-3 justify-end'>
                <div className='relative'>
                    <CiFilter onClick={handleFilterShow} className='text-4xl cursor-pointer' />

                    {
                        showFilter &&
                        <div className='absolute top-10 border-2 right-0 min-w-60 bg-white'>
                            <button className='flex w-full hover:bg-gray-100 items-center gap-2 justify-center p-2 border-b-2'><FaRegLightbulb />Available Designers </button>
                            <button className='flex w-full hover:bg-gray-100 items-center gap-2 justify-center p-2'><FaStar className='text-orange-500' />Top Rated Designers </button>
                        </div>
                    }


                </div>

                <div className="relative w-full max-w-sm">
                    <input
                        type="text"
                        // value={searchQuery}
                        // onChange={handleSearchChange}
                        placeholder="Search requests..."
                        className="py-2 px-4 w-full border border-gray-300 rounded-md pl-10"
                    />
                    <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
                </div>
            </div>


            <div className='flex justify-between p-5 border-2 border-black rounded-md mt-10'>
                <div className=' flex items-center gap-5'>
                    <img className='w-16 rounded-full' src="/image/Dashboard/userImage.png" alt="" />
                    <div>
                        <h2 className='font-medium mb-2'>Designer ID: 10201929129</h2>
                        <h3 className='font-medium'>Completed Work: 3</h3>
                    </div>
                </div>
                <div className='text-center'>
                    <h2 className='font-semibold mb-2'>Avaibility</h2>
                    <button className='bg-blue-800 text-white p-1 rounded-md'>Available</button>
                </div>
                <div className='text-cneter flex   flex-col items-center'>
                    <h2 className='font-semibold text-sm mb-2'>No.  of Expired Invites</h2>
                    <span>0</span>
                </div>
                <div className='text-cneter flex   flex-col items-center '>
                    <h2 className='font-semibold text-sm mb-2'>Last Project completion Date</h2>
                    <span>21st November, 2024</span>
                </div>
                <div className='text-cneter flex   flex-col items-center'>
                    <h2 className='font-semibold text-sm'>Ratings</h2>

                    <div className='flex items-center gap-1 mt-2'>
                        <FaStar className='text-orange-500' />
                        <FaStar className='text-orange-500' />
                        <FaStar className='text-orange-500' />
                        <FaStar className='text-orange-500' />
                        <FaRegStar className='text-gray-500' />
                    </div>
                </div>
            </div>

            <div className='flex justify-between p-5 border-2 border-black rounded-md mt-5'>
                <div className=' flex items-center gap-5'>
                    <img className='w-16 rounded-full' src="/image/Dashboard/userImage.png" alt="" />
                    <div>
                        <h2 className='font-medium mb-2'>Designer ID: 10201929129</h2>
                        <h3 className='font-medium'>Completed Work: 3</h3>
                    </div>
                </div>
                <div className='text-center'>
                    <h2 className='font-semibold mb-2'>Avaibility</h2>
                    <button className='bg-red-800 text-white p-1 rounded-md'>Available</button>
                </div>
                <div className='text-cneter flex   flex-col items-center'>
                    <h2 className='font-semibold text-sm mb-2'>No.  of Expired Invites</h2>
                    <span>0</span>
                </div>
                <div className='text-cneter flex   flex-col items-center '>
                    <h2 className='font-semibold text-sm mb-2'>Last Project completion Date</h2>
                    <span>21st November, 2024</span>
                </div>
                <div className='text-cneter flex   flex-col items-center'>
                    <h2 className='font-semibold text-sm'>Ratings</h2>

                    <div className='flex items-center gap-1 mt-2'>
                        <FaStar className='text-orange-500' />
                        <FaStar className='text-orange-500' />
                        <FaStar className='text-orange-500' />
                        <FaStar className='text-orange-500' />
                        <FaRegStar className='text-gray-500' />
                    </div>
                </div>
            </div>

            <div className='flex justify-between p-5 border-2 border-black rounded-md mt-5'>
                <div className=' flex items-center gap-5'>
                    <img className='w-16 rounded-full' src="/image/Dashboard/userImage.png" alt="" />
                    <div>
                        <h2 className='font-medium mb-2'>Designer ID: 10201929129</h2>
                        <h3 className='font-medium'>Completed Work: 3</h3>
                    </div>
                </div>
                <div className='text-center'>
                    <h2 className='font-semibold mb-2'>Avaibility</h2>
                    <button className='bg-blue-800 text-white p-1 rounded-md'>Available</button>
                </div>
                <div className='text-cneter flex   flex-col items-center'>
                    <h2 className='font-semibold text-sm mb-2'>No.  of Expired Invites</h2>
                    <span>0</span>
                </div>
                <div className='text-cneter flex   flex-col items-center '>
                    <h2 className='font-semibold text-sm mb-2'>Last Project completion Date</h2>
                    <span>21st November, 2024</span>
                </div>
                <div className='text-cneter flex   flex-col items-center'>
                    <h2 className='font-semibold text-sm'>Ratings</h2>

                    <div className='flex items-center gap-1 mt-2'>
                        <FaStar className='text-orange-500' />
                        <FaStar className='text-orange-500' />
                        <FaStar className='text-orange-500' />
                        <FaStar className='text-orange-500' />
                        <FaRegStar className='text-gray-500' />
                    </div>
                </div>
            </div>

            <div className='flex justify-between p-5 border-2 border-black rounded-md mt-5'>
                <div className=' flex items-center gap-5'>
                    <img className='w-16 rounded-full' src="/image/Dashboard/userImage.png" alt="" />
                    <div>
                        <h2 className='font-medium mb-2'>Designer ID: 10201929129</h2>
                        <h3 className='font-medium'>Completed Work: 3</h3>
                    </div>
                </div>
                <div className='text-center'>
                    <h2 className='font-semibold mb-2'>Avaibility</h2>
                    <button className='bg-blue-800 text-white p-1 rounded-md'>Available</button>
                </div>
                <div className='text-cneter flex   flex-col items-center'>
                    <h2 className='font-semibold text-sm mb-2'>No.  of Expired Invites</h2>
                    <span>0</span>
                </div>
                <div className='text-cneter flex   flex-col items-center '>
                    <h2 className='font-semibold text-sm mb-2'>Last Project completion Date</h2>
                    <span>21st November, 2024</span>
                </div>
                <div className='text-cneter flex   flex-col items-center'>
                    <h2 className='font-semibold text-sm'>Ratings</h2>

                    <div className='flex items-center gap-1 mt-2'>
                        <FaStar className='text-orange-500' />
                        <FaStar className='text-orange-500' />
                        <FaStar className='text-orange-500' />
                        <FaStar className='text-orange-500' />
                        <FaRegStar className='text-gray-500' />
                    </div>
                </div>
            </div>

            <div className='flex justify-between p-5 border-2 border-black rounded-md mt-5'>
                <div className=' flex items-center gap-5'>
                    <img className='w-16 rounded-full' src="/image/Dashboard/userImage.png" alt="" />
                    <div>
                        <h2 className='font-medium mb-2'>Designer ID: 10201929129</h2>
                        <h3 className='font-medium'>Completed Work: 3</h3>
                    </div>
                </div>
                <div className='text-center'>
                    <h2 className='font-semibold mb-2'>Avaibility</h2>
                    <button className='bg-blue-800 text-white p-1 rounded-md'>Available</button>
                </div>
                <div className='text-cneter flex   flex-col items-center'>
                    <h2 className='font-semibold text-sm mb-2'>No.  of Expired Invites</h2>
                    <span>0</span>
                </div>
                <div className='text-cneter flex   flex-col items-center '>
                    <h2 className='font-semibold text-sm mb-2'>Last Project completion Date</h2>
                    <span>21st November, 2024</span>
                </div>
                <div className='text-cneter flex   flex-col items-center'>
                    <h2 className='font-semibold text-sm'>Ratings</h2>

                    <div className='flex items-center gap-1 mt-2'>
                        <FaStar className='text-orange-500' />
                        <FaStar className='text-orange-500' />
                        <FaStar className='text-orange-500' />
                        <FaStar className='text-orange-500' />
                        <FaRegStar className='text-gray-500' />
                    </div>
                </div>
            </div>

            <div className='flex justify-between p-5 border-2 border-black rounded-md mt-5'>
                <div className=' flex items-center gap-5'>
                    <img className='w-16 rounded-full' src="/image/Dashboard/userImage.png" alt="" />
                    <div>
                        <h2 className='font-medium mb-2'>Designer ID: 10201929129</h2>
                        <h3 className='font-medium'>Completed Work: 3</h3>
                    </div>
                </div>
                <div className='text-center'>
                    <h2 className='font-semibold mb-2'>Avaibility</h2>
                    <button className='bg-blue-800 text-white p-1 rounded-md'>Available</button>
                </div>
                <div className='text-cneter flex   flex-col items-center'>
                    <h2 className='font-semibold text-sm mb-2'>No.  of Expired Invites</h2>
                    <span>0</span>
                </div>
                <div className='text-cneter flex   flex-col items-center '>
                    <h2 className='font-semibold text-sm mb-2'>Last Project completion Date</h2>
                    <span>21st November, 2024</span>
                </div>
                <div className='text-cneter flex   flex-col items-center'>
                    <h2 className='font-semibold text-sm'>Ratings</h2>

                    <div className='flex items-center gap-1 mt-2'>
                        <FaStar className='text-orange-500' />
                        <FaStar className='text-orange-500' />
                        <FaStar className='text-orange-500' />
                        <FaStar className='text-orange-500' />
                        <FaRegStar className='text-gray-500' />
                    </div>
                </div>
            </div>


        </div>
    );
}

export default page;
