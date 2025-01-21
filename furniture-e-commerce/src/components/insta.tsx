import React from 'react';
import Image from 'next/image';

const Insta = () => {
  return (
    <div className="w-full bg-[#FAF4F4] flex items-center justify-center relative">
      {/* Background Image */}
      <Image
        src="/images/Rectangle 17.png"
        alt="Rectangle 17"
        width={1920}
        height={1080}
        style={{ objectFit: "cover" }}
        className="w-full h-auto"
      />

      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-black">
          Our Instagram
        </h1>
        <p className="mt-4 text-lg sm:text-xl md:text-2xl font-poppins font-medium text-black">
          Follow our store on Instagram
        </p>
        <button className="mt-6 border-2 font-poppins text-lg sm:text-xl md:text-2xl rounded-full bg-[#FAF4F480] py-2 px-6 sm:px-8 md:px-10 lg:px-12 hover:bg-[#FAF4F4] transition-all">
          Follow Us
        </button>
      </div>
    </div>
  );
};

export default Insta;
