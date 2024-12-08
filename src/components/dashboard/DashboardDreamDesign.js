import React from 'react'

export default function DashboardDreamDesign() {
  return (
    <div className='md:h-screen h-[80vh] relative my-10 md:my-20 w-full'>
       <div className="bg-[url('/image/Dashboard/DashboardDreamDesign.png')] md:min-h-[80vh] h-[60vh] w-[90%] bg-no-repeat rounded-tr-2xl rounded-br-2xl">
       </div>

       <div className='absolute right-0 bottom-10 md:p-10 p-5 bg-[#f1f4f0] md:w-[600px] w-[300px] rounded-tl-2xl rounded-bl-2xl'>
            <h2 className='text-3xl font-medium'>Your Dream Design Project</h2>
            <p className='my-5'>From concept to completion, our team of skilled designers is here to transform your space into something extraordinary. Submit your request today and let{`'`}s get started.</p>
            <button className="py-3 px-10 font-semibold rounded-md text-white bg-[#ea733c]">Request Service</button>
       </div>

    </div>
  )
}
