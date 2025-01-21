import Image from 'next/image';

import React from 'react'

const Banner = () => {
  return (
    <div>
 


<section className="w-full relative bg-cover bg-center">
  {/* Background Image */}
  <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96">
    <Image
      src="/images/Shop-banner.png"
      alt="Shop Banner"
      layout="fill"
      style={{ objectFit: "cover" }}
      className="w-full"
    />
  </div>

  {/* Overlay Content */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
    {/* Small Image in Center */}
    <div className="mb-16 ">
      <Image
        src="/images/shop.png"
        alt="Shop Icon"
        width={40} // Reduced size for smaller screens
        height={40} // Adjust size for responsiveness
        className="object-cover rounded-full sm:w-[60px] sm:h-[60px]"
      />
    </div>
    </div>
    </section>

         
    </div>
  )
}

export default Banner