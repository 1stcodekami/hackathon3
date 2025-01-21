// import ShopBannerSection from "@/components/sections/shop/ShopBannerSection";
import F_banner from "@/components/footerbanner";
import Banner from '@/components/banner';
import CartList from "./sections/cart-list";
import CartTotals from "./sections/cart-totals";
import Link from "next/link";
import { ChevronRight } from "lucide-react";



export default function CartPage() {
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
            Cart
          </h1>

          {/* Breadcrumb */}
          <p className="text-sm flex text-black sm:text-base md:text-lg lg:text-xl mt-2 font-poppins">
            <Link href="/" className="font-semibold hover:underline">
              Home
            </Link>{' '}
           <ChevronRight className='mt-1'/> Cart
          </p>
        </div>
      </div>
    </div>

      <section className="w-full grid lg:flex justify-between grid-cols-4 gap-5 lg:gap-10 py-10">
        <div className="w-[80%] mx-auto flex justify-between">
          <CartList />
          <CartTotals />
        </div>
      </section>

      {/* <ShopBannerSection /> */}
      <F_banner/>
    </>
  );
}
