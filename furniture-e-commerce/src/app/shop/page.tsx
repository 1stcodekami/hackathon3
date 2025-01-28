// src/app/shop/page.tsx
'use client';

import React, { useState } from 'react';
import { useSearch } from '@/context/SearchContext';
import ShopFilterSection from '@/components/sections/shop/ShopFilterSection';
import ShopProductSection from '@/components/sections/shop/ShopProductSection';
import Banner from '@/components/banner';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import F_banner from '@/components/footerbanner';

function ShopPage() {
  const [itemCount, setItemCount] = useState<number>(16);
  const { searchTerm } = useSearch();

  return (
    <section>
      <div className="relative">
        <Banner />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <div className="mt-20">
            <h1 className="text-xl text-black sm:text-2xl md:text-3xl lg:text-4xl font-bold font-poppins">
              Shop
            </h1>
            <p className="text-sm flex text-black sm:text-base md:text-lg lg:text-xl mt-2 font-poppins">
              <Link href="/" className="font-semibold hover:underline">
                Home&nbsp;
              </Link>
              <ChevronRight className="mt-1" />&nbsp;Shop
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6"></div>

      <ShopFilterSection itemCount={itemCount} setItemCount={setItemCount} />

      <div className="mx-4 md:mx-[130px]">
      <ShopProductSection itemCount={itemCount} />

        {/* <ShopProductSection searchTerm={searchTerm} itemCount={itemCount} /> */}
      </div>

      <div className="my-[70px]"></div>

      <F_banner />
    </section>
  );
}

export default ShopPage;
