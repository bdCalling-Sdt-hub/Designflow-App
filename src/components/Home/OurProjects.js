import React from 'react'
import { CiHome } from "react-icons/ci";


export default function OurProjects() {
  return (
    <div className='md:w-[80%] w-[90%] mx-auto my-10 md:my-20'>
      <div className='text-center '>
        <h2 className='text-5xl font-semibold uppercase mb-2'>our projects</h2>
        <p className=''>Explore Our Diverse Portfolio of Stunning Interior Designs</p>
      </div>
      <div className='my-10 grid xl:grid-cols-3 md:grid-cols-2 gap-5'>
        <div className='bg-[#f1f4f0] p-5 rounded-xl'>
            <img className='w-full' src="/image/hero/Project-image.png" alt="" />
            <h2 className='my-5 font-medium flex items-center gap-2'><CiHome className='text-xl' />  <span className='text-[#EA733C]'>Project Name </span></h2>
            <p>Lorem ipsum dolor sit amet consectetur. Convallis cras placerat dignissim aliquam massa. Aliquet volutpat rhoncus in convallis consectetur. Cras adipiscing volutpat non hac enim odio enim.
                <span className='font-semibold underline block'>Read More...</span>
            </p>
        </div>
        <div className='bg-[#f1f4f0] p-5 rounded-xl'>
            <img className='w-full' src="/image/hero/Project-image.png" alt="" />
            <h2 className='my-5 font-medium flex items-center gap-2'><CiHome className='text-xl' />  <span className='text-[#EA733C]'>Project Name </span></h2>
            <p>Lorem ipsum dolor sit amet consectetur. Convallis cras placerat dignissim aliquam massa. Aliquet volutpat rhoncus in convallis consectetur. Cras adipiscing volutpat non hac enim odio enim.
                <span className='font-semibold underline block'>Read More...</span>
            </p>
        </div>
        <div className='bg-[#f1f4f0] p-5 rounded-xl'>
            <img className='w-full' src="/image/hero/Project-image.png" alt="" />
            <h2 className='my-5 font-medium flex items-center gap-2'><CiHome className='text-xl' />  <span className='text-[#EA733C]'>Project Name </span></h2>
            <p>Lorem ipsum dolor sit amet consectetur. Convallis cras placerat dignissim aliquam massa. Aliquet volutpat rhoncus in convallis consectetur. Cras adipiscing volutpat non hac enim odio enim.
                <span className='font-semibold underline block'>Read More...</span>
            </p>
        </div>
      </div>
      <div className='flex justify-end'>
      <button className="py-3 px-10 font-semibold rounded-md text-white bg-[#ea733c]">Show All</button>
      </div>
    </div>
  )
}
