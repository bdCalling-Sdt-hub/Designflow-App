import Link from 'next/link';
import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Page = () => {


    

    return (
        <div>

            <div className='mr-10 my-10'>

                <Link className='flex items-center font-semibold text-2xl gap-2 ' href={'/dashboard/home/'}>
                    <FaChevronLeft className='text-xl' /> Settings
                </Link>

                <Link className='p-5 font-medium border-2 duration-300 border-[#7ea0759d] hover:bg-transparent hover:text-black bg-[#7ea0759d] text-black mt-10 rounded-lg flex items-center justify-between' href={'/dashboard/setting/personalinformation'}>
                    Personal Information <FaChevronRight className='text-xl' />
                </Link>

                <Link className='p-5 font-medium border-2 duration-300 border-[#7ea0759d] hover:bg-transparent hover:text-black bg-[#7ea0759d] text-black mt-10 rounded-lg flex items-center justify-between' href={'/dashboard/setting/changepassword'}>
                    Change Password <FaChevronRight className='text-xl' />
                </Link>

                <Link className='p-5 font-medium border-2 duration-300 border-[#7ea0759d] hover:bg-transparent hover:text-black bg-[#7ea0759d] text-black mt-10 rounded-lg flex items-center justify-between' href={'/dashboard/setting/previousprojects'}>
                    Previous Projects <FaChevronRight className='text-xl' />
                </Link>

                <Link className='p-5 font-medium border-2 duration-300 border-[#7ea0759d] hover:bg-transparent hover:text-black bg-[#7ea0759d] text-black mt-10 rounded-lg flex items-center justify-between' href={'/dashboard/setting/privacypolicy'}>
                    Privacy Policy <FaChevronRight className='text-xl' />
                </Link>

                <Link className='p-5 font-medium border-2 duration-300 border-[#7ea0759d] hover:bg-transparent hover:text-black bg-[#7ea0759d] text-black mt-10 rounded-lg flex items-center justify-between' href={'/dashboard/setting/tramscondition'}>
                    Terms & Conditions<FaChevronRight className='text-xl' />
                </Link>
{/* 
                <Link className='p-5 font-medium border-2 duration-300 border-[#7ea0759d] hover:bg-transparent hover:text-black bg-[#7ea0759d] text-black mt-10 rounded-lg flex items-center justify-between' href={'/dashboard/setting/previousprojects'}>
                    Previous Projects <FaChevronRight className='text-xl' />
                </Link> */}
            </div>
        </div>
    );
}

export default Page;
