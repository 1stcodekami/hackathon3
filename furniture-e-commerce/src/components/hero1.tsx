import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero1 = () => {
  return (
    <div className="w-full mx-auto bg-[#FAF4F4] flex flex-col md:flex-row md:mx-auto items-center">
      {/* Inner container to structure content */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-8">
        
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start gap-4 md:gap-6 w-full md:w-1/2">
          {/* Image */}
          <div className="w-full flex justify-center md:justify-start">
            <Image
              src="/images/Granite square side table.png"
              alt="Granite square side table 1"
              width={1092}
              height={1641}
              objectFit="contain"
              className="max-w-full h-auto"
            />
          </div>

          {/* Text */}
          <h1 className="text-[32px] md:text-[48px] lg:text-[64px] font-bold leading-tight text-center md:text-left">
            Side Table
          </h1>

          {/* Link */}
          <div>
            <Link href="/shop" className="text-base font-normal relative">
              <span className="inline-block">View More</span>
              <span className="absolute bottom-[-6px] left-0 h-[2px] bg-black w-full"></span>
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center md:items-start gap-4 md:gap-6 w-full md:w-1/2">
          {/* Image */}
          <div className="w-full flex justify-center md:justify-end">
            <Image
              src="/images/Cloud sofa three seater + ottoman_3 1.png"
              alt="Cloud sofa three seater + ottoman"
              width={1055}
              height={473}
              objectFit="contain"
              className="max-w-full h-auto"
            />
          </div>

          {/* Text */}
          <h1 className="text-[32px] md:text-[48px] lg:text-[64px] font-bold leading-tight text-center md:text-left">
            Cloud Sofa
          </h1>

          {/* Link */}
          <div>
            <Link href="/shop" className="text-base font-normal relative">
              <span className="inline-block">View More</span>
              <span className="absolute bottom-[-6px] left-0 h-[2px] bg-black w-full"></span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero1;
