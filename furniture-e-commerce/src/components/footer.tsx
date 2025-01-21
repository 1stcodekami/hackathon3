

import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="text-gray-600 body-font">
  <div className="container px-8 pt-24 border-b-2 mx-auto">
    <div className="flex flex-wrap md:text-left text-center order-first ">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4 pt-14">
        
        <p className='text-[16px] '>400 University Drive Suite 200 <br /> Coral Gables, <br />
        FL 33134 USA</p>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-[#9F9F9F] tracking-widest text-sm mb-3 gap-5">
          Links
        </h2>
        <nav className="list-none mb-10 pt-6  space-y-10 font-bold text-black">
        <li>
           <Link href={'/Home'} className="text-gray-600 hover:text-gray-800">Home</Link>
          </li>
          <li>
           <Link href={'/shop'} className="text-gray-600 hover:text-gray-800">Shop</Link>
          </li>
          <li>
           <Link href={'/about'} className="text-gray-600 hover:text-gray-800">About</Link>
          </li>
          <li>
           <Link href={'/contact'} className="text-gray-600 hover:text-gray-800">Contact</Link>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
      <h2 className="title-font font-medium text-[#9F9F9F] tracking-widest text-sm mb-3 gap-5">
          Help 
        </h2>
        <nav className="list-none mb-10 pt-6  space-y-10 font-bold text-black">
        <li>
           <Link href={'/'} className="text-gray-600 hover:text-gray-800">Payment Options</Link>
          </li>
          <li>
           <Link href={'/'} className="text-gray-600 hover:text-gray-800">Returns</Link>
          </li>
          <li>
           <Link href={'/'} className="text-gray-600 hover:text-gray-800">Privacy Policy</Link>
          </li>
          <li>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-[#9F9F9F] tracking-widest text-sm mb-3">
          Newsletter
        </h2>
        <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
        <div className="pt-7 w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2 flex sm:flex-row flex-col gap-2">
        <input
          type="text"
          id="footer-field"
          placeholder="Enter Your Email Address"
          name="footer-field"
          className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 text-gray-700 mt-1"
        />
        <button className="underline font-medium pt-3 text-[18px] hover:text-blue-500 focus:text-blue-500">
          SUBSCRIBE
        </button>
      </div>
    </div>
        
      </div>
    </div>
  </div>
  <div className="bg-white">
    <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
      
      <p className="text-sm  sm:ml-6 sm:mt-0 mt-4 text-[15px] text-black">
      2022 Meubel House. All rights reverved        
          
        
      </p>
      
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer