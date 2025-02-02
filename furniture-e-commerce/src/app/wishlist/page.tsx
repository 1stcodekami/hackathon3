
import React from 'react'
import F_banner from "@/components/footerbanner";
import Banner from '@/components/banner';
import { ChevronRight } from "lucide-react";
import Link from "next/link";

import WishlistComponent from '@/components/wishlist/page'

export default function WishlistPage() {
  return (
          <>
          {/* <Hero title="Cart" /> */}
      <div className="relative">
      <Banner />
      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        {/* Adjust spacing and positioning */}
        <div className="mt-20"> {/* Push text down */}
          <h1 className="text-xl text-black sm:text-2xl md:text-3xl lg:text-4xl font-bold font-poppins">
            Wishlist
          </h1>

          {/* Breadcrumb */}
          <p className="text-sm flex text-black sm:text-base md:text-lg lg:text-xl mt-2 font-poppins">
            <Link href="/" className="font-semibold hover:underline">
              Home
            </Link>{' '}
           <ChevronRight className='mt-1'/> Wishlist
          </p>
        </div>
      </div>
    </div> 

   <WishlistComponent />
      <F_banner/>
       



</>
  
  )
}


 