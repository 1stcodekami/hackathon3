"use client";

import React from "react";
import { PRODUCTS } from "@/lib/constants";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface ShopProductSectionProps {
  itemCount: number; // Number of products to display
}

const ShopProductSection: React.FC<ShopProductSectionProps> = ({ itemCount }) => {
  const router = useRouter();

  // Limit the number of products displayed based on itemCount
  const visibleProducts = PRODUCTS.slice(0, itemCount);

  const handleProductClick = (id: string) => {
    router.push(`/shop/product/${id}`);
  };

  return (
    <section className="mt-[46px]">
      <div className="grid grid-cols-1 font-poppins md:grid-cols-2 xl:grid-cols-4 gap-[32px]">
        {visibleProducts.map((item) => (
          <div
            key={item.id}
            className="p-4 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 "
            onClick={() => handleProductClick(item.id)}
          >
            {/* Optimized Image */}
            <div className="relative w-full h-[250px]">
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover rounded-md"
                priority
              />
            </div>

            {/* Product Details */}
            <h3 className="font-medium text-lg mt-4 text-gray-800">{item.title}</h3>
            <p className="text-gray-500 text-sm">{item.description}</p>
            <p className="text-black font-semibold text-2xl mt-2">Rs. {item.price}.00</p>
            {item.otherPrice && (
              <p className="line-through text-gray-400 text-sm">Rs. {item.otherPrice}.00</p>
            )}
            {item.typeValue && (
              <span className="bg-primary text-white text-xs font-bold px-2 py-1 rounded-md mt-2 inline-block">
                {item.typeValue}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShopProductSection;
