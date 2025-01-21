import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

import OurProductSection from "@/components/sections/OurProductSection";


const Hero2 = () => {
  return (
    <div className="w-full mx-auto bg-[#FFFFFF] py-12 flex flex-col items-center">
      {/* Title */}
      <div>
        <h1 className="font-poppins font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          Top Picks For You
        </h1>
      </div>

      {/* Subtitle */}
      <div>
        <p className="font-poppins text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[#9F9F9F] text-center">
          Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.
        </p>
      </div>

      {/* Inner container to structure content */}
      <OurProductSection/>

      {/* View More Link */}
      {/* <div>
        <Link href="/shop" className="font-poppins text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold relative">
          <span className="inline-block">View More</span>
          <span className="absolute bottom-[-4px] left-0 h-[2px] bg-black w-full"></span>
        </Link>
      </div> */}
    </div>
  );
};

export default Hero2;
