'use client';

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";  // Import Image from next/image
import { PRODUCTS } from "@/lib/constants";

const OurProductSection: React.FC = () => {
  const router = useRouter();

  const handleProductClick = (id: string) => {
    router.push(`/shop/product/${id}`);
  };

  return (
    <section className="w-full overflow-x-hidden">
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-8">
        {PRODUCTS.slice(0, 4).map((item) => (
          <div
            key={item.id} // Use unique ID instead of index for better key handling
            className="flex flex-col items-center gap-4 md:gap-6 w-full md:w-1/4"
          >
            {/* Clickable image */}
            <div
              onClick={() => handleProductClick(item.id)}
              className="w-full flex justify-center cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
            >
              {/* Use Next.js Image component for optimization */}
              <Image
                src={item.imageUrl}
                alt={item.title}
                width={500}  // Define an appropriate width
                height={300}  // Define an appropriate height
                className="max-w-full h-auto"
              />
            </div>

            {/* Title and other information */}
            <div>
              <p
                onClick={() => handleProductClick(item.id)}
                className="font-poppins text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-center cursor-pointer hover:text-primary transition-transform duration-200 ease-in-out hover:scale-105"
              >
                {item.title}
              </p>
              <div className="flex justify-between items-center">
                <p className="font-poppins text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-center">
                  Rs. {item.price}.00
                </p>
                {item.otherPrice && (
                  <p className="line-through text-gray-500">
                    Rs. {item.otherPrice}.00
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        {/* Optional "Show More" button */}
        <button
          onClick={() => router.push('/shop')}
          className="font-poppins text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold relative"
        >
          <span className="inline-block border-b-2 border-black">View More</span>

       


        </button>
      </div>
    </section>
  );
};

export default OurProductSection;
