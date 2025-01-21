'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Head = () => {
  const router = useRouter();

  // Navigate to the specific product page
  const handleShopNowClick = () => {
    // Example item ID for Shop Now
    //const exampleProductId = 'example-product-id'; // Replace with actual product ID if available
    router.push(`/shop/product/${170}`);
  };

  return (
    <div className="w-full flex flex-col md:flex-row bg-[#FBEBB5] items-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-4">
        {/* Left Section */}
        <div className="flex flex-col gap-4 md:gap-6 text-center md:text-left">
          <h1 className="text-[32px] md:text-[64px] font-bold leading-tight">
            Rocket single <br /> seater
          </h1>
          <div>
            {/* Shop Now Button */}
            <button
              onClick={handleShopNowClick}
              className="text-base font-normal relative focus:outline-none"
            >
              <span className="inline-block">Shop Now</span>
              <span
                className="absolute bottom-[-8px] left-0 h-[2px] bg-black"
                style={{ width: 'calc(100% - 2px)' }}
              ></span>
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex justify-center md:justify-end w-full md:w-1/2 mt-4 md:mt-0">
          <Image
            src="/images/Rocket single seater 1.png"
            alt="Rocket single seater 1"
            width={853}
            height={1000}
            objectFit="contain"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Head;
