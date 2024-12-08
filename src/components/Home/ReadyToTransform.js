import React from 'react'

export default function ReadyToTransform() {
  return (
    <div className='md:h-screen h-[80vh] relative'>
       <div className="bg-[url('/image/hero/ReadyToTarnsform.png')] md:min-h-[90vh] h-[60vh] w-[90%] bg-no-repeat rounded-tr-2xl rounded-br-2xl">
       </div>

       <div className='absolute right-0 bottom-0 md:p-10 p-5 bg-[#f1f4f0] md:w-[600px] w-[300px] rounded-tl-2xl rounded-bl-2xl'>
            <h2 className='text-3xl font-medium'>Ready to Transform Your Space?</h2>
            <p className='my-5'>Log in to book and start your design journey today. Connect with expert designers and bring your vision to life. It{`'`}s time to create a space you{`'`}ll love.</p>
            <button className="py-3 px-10 font-semibold rounded-md text-white bg-[#ea733c]">Login</button>
       </div>

    </div>
  )
}
