'use client'
import React, { useState } from "react";
// import ShopBannerSection from "@/components/sections/shop/ShopBannerSection";
import ShopFilterSection from "@/components/sections/shop/ShopFilterSection";
import Banner from "@/components/banner";
import ShopPaginationSection from "@/components/sections/shop/ShopPaginationSection";
import ShopProductSection from "@/components/sections/shop/ShopProductSection";
import Link from "next/link";
// import { IoIosArrowForward } from "react-icons/io";
import { ChevronRight } from "lucide-react";
import F_banner from "@/components/footerbanner";

function ShopPage() {
  // State for the number of items to display
  const [itemCount, setItemCount] = useState<number>(16); // Default to showing 4 items

  return (
    <section>
      <div className="relative">
        <Banner />
        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          {/* Adjust spacing and positioning */}
          <div className="mt-20"> {/* Push text down */}
            <h1 className="text-xl text-black sm:text-2xl md:text-3xl lg:text-4xl font-bold font-poppins">
              Shop
            </h1>

            {/* Breadcrumb */}
            <p className="text-sm flex text-black sm:text-base md:text-lg lg:text-xl mt-2 font-poppins">
              <Link href="/" className="font-semibold hover:underline">
                Home&nbsp;
              </Link>{' '}
              <ChevronRight className="mt-1" />&nbsp;Shop
            </p>
          </div>
        </div>
      </div>
      <div className="mt-6"></div>
      
      {/* Pass required props to ShopFilterSection */}
      <ShopFilterSection itemCount={itemCount} setItemCount={setItemCount} />

      <div className="mx-4 md:mx-[130px]">
        {/* Pass itemCount prop to ShopProductSection */}
        <ShopProductSection itemCount={itemCount} />
      </div>
      
      <div className="my-[70px]">
        <ShopPaginationSection />
      </div>

      {/* <ShopBannerSection /> */}
      <F_banner/>
    </section>
  );
}

export default ShopPage;
