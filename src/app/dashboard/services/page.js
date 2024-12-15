import Link from 'next/link';
import React from 'react';
import { FaArrowLeft, FaChevronLeft, FaSearch } from 'react-icons/fa';

const Page = () => {
    return (
        <div className='mr-10'>
            <div className='my-10'>
                <div className='flex justify-between items-center flex-wrap my-10'>
                    <Link href={'/'} className='flex items-center gap-5 text-2xl font-semibold'><FaChevronLeft />Service List</Link>
                    <div className='flex items-center gap-5'>
                        {/* Date Picker and Search */}
                        <div className="flex gap-5 items-center my-5">
                            {/* Search Input */}
                            <div>
                                <button className='p-3 border-[#637f5c] border min-w-48 text-[#637f5c] rounded-lg font-semibold'>+  Edit Service</button>
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
                            <button className='min-h-12 min-w-12 flex items-center justify-center rounded-full bg-[#212721]'><FaSearch className=" text-white" /></button>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-6 gap-5'>
                    {[...Array(5)].map((_, idx) => (
                        <div key={idx} className="p-5 border border-primaryBg rounded-lg">
                            <img className="w-full" src="/image/Dashboard/home/servicesImage.png" alt="Service" />
                            <h2 className="text-center mt-5 font-semibold text-xl">3D Rendering</h2>
                            <h3 className="text-center mb-5 font-semibold">$122.20</h3>
                            <div className="flex items-center gap-2 justify-center">
                                <button className="py-2 px-8 border-[#637f5c] border text-[#637f5c] rounded-lg font-semibold">
                                    Delete
                                </button>
                                <Link href={'/dashboard/services/1'} className="py-2 px-8 bg-[#637f5c] border text-white rounded-lg font-semibold">
                                    Edit
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className='my-10'>
                <div className='flex justify-between items-center flex-wrap my-10'>
                    <Link href={'/'} className='flex items-center gap-5 text-2xl font-semibold'><FaChevronLeft />Category List</Link>
                    <div className='flex items-center gap-5'>
                        {/* Date Picker and Search */}
                        <div className="flex gap-5 items-center my-5">
                            {/* Search Input */}
                            <div>
                                <button className='p-3 border-[#637f5c] border min-w-48 text-[#637f5c] rounded-lg font-semibold'>+  Edit Service</button>
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
                            <button className='min-h-12 min-w-12 flex items-center justify-center rounded-full bg-[#212721]'><FaSearch className=" text-white" /></button>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-6 gap-5'>
                    {[...Array(5)].map((_, idx) => (
                        <div key={idx} className="p-5 border border-primaryBg rounded-lg">
                            <img className="w-full" src="/image/Dashboard/home/servicesImage.png" alt="Service" />
                            <h2 className="text-center mt-5 font-semibold text-xl">3D Rendering</h2>
                            <h3 className="text-center mb-5 font-semibold">$122.20</h3>
                            <div className="flex items-center gap-2 justify-center">
                                <button className="py-2 px-8 border-[#637f5c] border text-[#637f5c] rounded-lg font-semibold">
                                    Delete
                                </button>
                                <Link href={'/dashboard/services/1'} className="py-2 px-8 bg-[#637f5c] border text-white rounded-lg font-semibold">
                                    Edit
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className='my-10'>
                <div className='flex justify-between items-center flex-wrap my-10'>
                    <Link href={'/'} className='flex items-center gap-5 text-2xl font-semibold'><FaChevronLeft />Style List</Link>
                    <div className='flex items-center gap-5'>
                        {/* Date Picker and Search */}
                        <div className="flex gap-5 items-center my-5">
                            {/* Search Input */}
                            <div>
                                <button className='p-3 border-[#637f5c] border min-w-48 text-[#637f5c] rounded-lg font-semibold'>+  Edit Service</button>
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
                            <button className='min-h-12 min-w-12 flex items-center justify-center rounded-full bg-[#212721]'><FaSearch className=" text-white" /></button>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-6 gap-5'>
                    {[...Array(5)].map((_, idx) => (
                        <div key={idx} className="p-5 border border-primaryBg rounded-lg">
                            <img className="w-full" src="/image/Dashboard/home/servicesImage.png" alt="Service" />
                            <h2 className="text-center mt-5 font-semibold text-xl">3D Rendering</h2>
                            <h3 className="text-center mb-5 font-semibold">$122.20</h3>
                            <div className="flex items-center gap-2 justify-center">
                                <button className="py-2 px-8 border-[#637f5c] border text-[#637f5c] rounded-lg font-semibold">
                                    Delete
                                </button>
                                <Link href={'/dashboard/services/1'} className="py-2 px-8 bg-[#637f5c] border text-white rounded-lg font-semibold">
                                    Edit
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className='my-10'>
                <div className='flex justify-between items-center flex-wrap my-10'>
                    <Link href={'/'} className='flex items-center gap-5 text-2xl font-semibold'><FaChevronLeft />Type List</Link>
                    <div className='flex items-center gap-5'>
                        {/* Date Picker and Search */}
                        <div className="flex gap-5 items-center my-5">
                            {/* Search Input */}
                            <div>
                                <button className='p-3 border-[#637f5c] border min-w-48 text-[#637f5c] rounded-lg font-semibold'>+  Edit Service</button>
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
                            <button className='min-h-12 min-w-12 flex items-center justify-center rounded-full bg-[#212721]'><FaSearch className=" text-white" /></button>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-6 gap-5'>
                    {[...Array(5)].map((_, idx) => (
                        <div key={idx} className="p-5 border border-primaryBg rounded-lg">
                            <img className="w-full" src="/image/Dashboard/home/servicesImage.png" alt="Service" />
                            <h2 className="text-center mt-5 font-semibold text-xl">3D Rendering</h2>
                            <h3 className="text-center mb-5 font-semibold">$122.20</h3>
                            <div className="flex items-center gap-2 justify-center">
                                <button className="py-2 px-8 border-[#637f5c] border text-[#637f5c] rounded-lg font-semibold">
                                    Delete
                                </button>
                                <Link href={'/dashboard/services/1'} className="py-2 px-8 bg-[#637f5c] border text-white rounded-lg font-semibold">
                                    Edit
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


        </div>
    );
}

export default Page;
