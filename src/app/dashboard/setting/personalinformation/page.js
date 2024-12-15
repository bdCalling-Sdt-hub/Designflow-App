import Link from 'next/link';
import React from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { MdOutlineModeEditOutline } from 'react-icons/md';

const Page = () => {
    return (
        <div>
            <Link className='text-2xl font-semibold my-10 flex items-center gap-2' href={'/dashboard/setting'}><FaChevronLeft className="text-xl font-semibold" />Personal Information</Link>
            <div className='w-1/2 mx-auto'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-5'>
                        <img className='w-36 rounded-full' src="/image/Dashboard/userImage.png" alt="" />
                        <h2 className='text-2xl font-semibold'>Jae</h2>
                    </div>
                    <Link href={'/dashboard/setting/personalinformation/profile-1'} className='flex items-center gap-2 bg-primaryBg text-white py-3 px-10 rounded-md'><MdOutlineModeEditOutline /> Edit Profile</Link>
                </div>
                <form className='my-10' action="">
                    <label htmlFor="">
                        <span className='font-semibold block mb-2'>Full Name</span>
                        <input className='p-3 w-full rounded-md border-2 border-gray-400' type="text" name="Jae" defaultValue={'Jae'} id="" />
                    </label>
                    <label className='block mt-3' htmlFor="">
                        <span className='font-semibold block mb-2'>Email</span>
                        <input className='p-3 w-full rounded-md border-2 border-gray-400' type="email" name="Email" defaultValue={'jae@gmail.com'} id="" />
                    </label>
                    <label className='block mt-3' htmlFor="">
                        <span className='font-semibold block mb-2'>Address</span>
                        <input className='p-3 w-full rounded-md border-2 border-gray-400' type="text" name="Address" value={'ABC'} id="" />
                    </label>
                    <label className='block mt-3' htmlFor="">
                        <span className='font-semibold block mb-2'>Contact number</span>
                        <input className='p-3 w-full rounded-md border-2 border-gray-400' type="text" name="number" value={'+88 0170000000744'} id="" />
                    </label>
                </form>
            </div>
        </div>
    );
}

export default Page;
