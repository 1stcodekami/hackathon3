'use client';

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { client, urlFor } from "@/sanity/lib/client"; // Sanity client and image URL builder

interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  discountPercentage?: number;
  image?: { asset: { _ref: string } }; // Use _ref for the image asset
  id: number;
  category: string;
  isFeaturedProduct: boolean;
  stockLevel: number;
}

const OurProductSection: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == 'product']{
        _id,
        name,
        price,
        description,
        discountPercentage,
        image,
        id,
        category,
        isFeaturedProduct,
        stockLevel
      }`;

      try {
        const data = await client.fetch(query);
        setProducts(data.slice(0, 4)); // Display the first 4 products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleProductClick = (id: string) => {
    router.push(`/shop/product/${id}`);
  };

  return (
    <section className="w-full overflow-x-hidden">
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-8">
        {products.map((item) => (
          <div
            key={item._id}
            className="flex flex-col items-center gap-4 md:gap-6 w-full md:w-1/4"
          >
            {/* Clickable image */}
            <div
              onClick={() => handleProductClick(item._id)}
              className="w-full flex justify-center cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
            >
              <div className="relative w-full h-[250px]">
                           {item.image ? (
                             <Image
                               src={urlFor(item.image).url()} // Generate the URL
                               alt={item.name}
                               fill
                               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                               className="object-cover rounded-md"
                               priority
                             />
                           ) : (
                             <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500 rounded-md">
                               No Image Available
                             </div>
                           )}
                         </div>
            </div>

            {/* Title and other information */}
            <div>
              <p
                onClick={() => handleProductClick(item._id)}
                className="font-poppins text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-center cursor-pointer hover:text-primary transition-transform duration-200 ease-in-out hover:scale-105"
              >
                {item.name}
              </p>
              <div className="flex justify-between items-center">
                <p className="font-poppins text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-center">
                  ${item.price}.00
                </p>
                {item.discountPercentage && (
                  <p className="line-through text-gray-500">
                    {`Rs. ${(item.price / (1 - item.discountPercentage / 100)).toFixed(2)}`}
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
