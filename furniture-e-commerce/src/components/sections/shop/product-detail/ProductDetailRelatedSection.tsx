
import React from "react";
import OurProductSection from "@/components/sections/OurProductSection";

// import Link from "next/link";

function ProductDetailRelatedSection() {
 
  return (
    <section className="w-full mx-auto bg-[#FFFFFF] py-12 flex flex-col items-center">

      
    <div className="w-full mx-auto bg-[#FFFFFF] py-12 flex flex-col items-center">
      {/* Title */}
      <div>
        <h1 className="font-poppins font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
        Related Products
        </h1>
      </div>

     
      {/* Inner container to structure content */}
      <OurProductSection/>

      {/* View More Link */}
     
    </div>
    {/* <div>
        <Link href="/shop" className="font-poppins text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold relative">
          <span className="inline-block">View More</span>
          <span className="absolute bottom-[-4px] left-0 h-[2px] bg-black w-full"></span>
        </Link>
      </div> */}
    </section>


  );
};
  
  

export default ProductDetailRelatedSection;