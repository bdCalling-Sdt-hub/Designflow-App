import Link from 'next/link';
import React from 'react';
import { FaChevronLeft } from 'react-icons/fa';

const ChatHeader = () => {
    return (
        <div className='bg-primaryBg  py-10 px-5 rounded-lg'>
            <Link className='text-white font-semibold my-5 flex items-center gap-2 text-xl' href={'/dashboard/home'}><FaChevronLeft /> Ongoing Clients</Link>
            <Link href={'/dashboard/chat/1'} className='w-[350px] block mt-3 bg-[#69341b] cursor-pointer rounded-3xl  p-5'>
                <div className='  rounded-xl flex items-center gap-2'>
                    <img src="/image/Dashboard/userImage.png" alt="" />
                    <div className='text-white'>
                        <h2 className='text-xl'>Floyd</h2>
                        <span className='text-sm mt-2'>12345</span>
                    </div>
                </div>
                <h2 className='mt-5 p-3 rounded-full border-[2px] border-black text-gray-400 flex items-center justify-between'><span className=''>New access required</span> <button className='text-sm bg-[#ea733c] text-white py-1 px-3 rounded'>High</button></h2>
            </Link>
            <Link href={'/dashboard/chat/2'} className='w-[350px] block mt-3 bg-[#323533] cursor-pointer rounded-3xl  p-5'>
                <div className='  rounded-xl flex items-center gap-2'>
                    <img src="/image/Dashboard/userImage.png" alt="" />
                    <div className='text-white'>
                        <h2 className='text-xl'>Floyd</h2>
                        <span className='text-sm mt-2'>12345</span>
                    </div>
                </div>
                <h2 className='mt-5 p-3 rounded-full border-[2px] border-black text-gray-400 flex items-center justify-between'><span className=''>New access required</span> <button className='text-sm bg-[#f08959] text-white py-1 px-3 rounded'>Mid</button></h2>
            </Link>
            <Link href={'/dashboard/chat/3'} className='w-[350px] block mt-3 bg-[#323533] cursor-pointer rounded-3xl  p-5'>
                <div className='  rounded-xl flex items-center gap-2'>
                    <img src="/image/Dashboard/userImage.png" alt="" />
                    <div className='text-white'>
                        <h2 className='text-xl'>Floyd</h2>
                        <span className='text-sm mt-2'>12345</span>
                    </div>
                </div>
                <h2 className='mt-5 p-3 rounded-full border-[2px] border-black text-gray-400 flex items-center justify-between'><span className=''>New access required</span> <button className='text-sm bg-[#f08959] text-white py-1 px-3 rounded'>Mid</button></h2>
            </Link>
        </div>
    );
}

export default ChatHeader;
