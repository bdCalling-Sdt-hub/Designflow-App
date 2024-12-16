import React from 'react'

export default function notfound() {
  return (
    <section className="bg-white dark:bg-gray-900 ">
      <div className=" flex justify-center items-center h-screen">
        <div className="mx-auto max-w-screen-sm text-center">
          {/* <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-red-500">404</h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-red-500 md:text-4xl dark:text-red-500">Somethings missing.</p>
            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Sorry, we can not find that page. You will find lots to explore on the home page. </p>
            <a href="/dashboard" className="inline-flex text-white bg-primaryBg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4">Back to Homepage</a>
         */}
          <img className='w-3/3 mx-auto my-20' src="/image/404-page.png" alt="" />


        </div>
      </div>
    </section>
  )
}
