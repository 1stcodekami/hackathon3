"use client";

import React, { useEffect, useState } from "react";
import { client, urlFor } from "@/sanity/lib/client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSearch } from "@/context/SearchContext"; // Import SearchContext

interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  discountPercentage?: number;
  image?: { asset: { _ref: string } };
  id: number;
  category: string;
  isFeaturedProduct: boolean;
  stockLevel: number;
}

interface ShopProductSectionProps {
  itemCount: number; // Number of products to display per page
}

const ShopProductSection: React.FC<ShopProductSectionProps> = ({ itemCount }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isSearchVisible, setIsSearchVisible] = useState(false); // State to toggle search bar
  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const { searchTerm} = useSearch(); // Use global search term
  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == 'product']{
        image,
        stockLevel,
        id,
        category,
        description,
        discountPercentage,
        name,
        isFeaturedProduct,
        _id,
        price,    
      }`;
      const data = await client.fetch(query);
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const handleProductClick = (id: string) => {
    router.push(`/shop/product/${id}`);
  };

  // const handleSearchIconClick = () => {
  //   setIsSearchVisible(!isSearchVisible); // Toggle search bar visibility
  // };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const startIndex = (currentPage - 1) * itemCount;
  const endIndex = startIndex + itemCount;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  return (
    <div className="font-[sans-serif] bg-white p-4 mx-auto max-w-[1400px]">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {currentProducts.map((item) => (
          <div
            key={item._id}
            className="group overflow-hidden cursor-pointer relative"
            onClick={() => handleProductClick(item._id)}
          >
            <div className="bg-gray-100 w-full rounded-md overflow-hidden">
              {item.image ? (
                <Image
                  src={urlFor(item.image).url()}
                  alt={item.name}
                  width={300}
                  height={400}
                  className="aspect-[3/4] w-full object-cover object-top hover:scale-110 transition-all duration-700"
                  priority
                />
              ) : (
                <div className="aspect-[3/4] w-full bg-gray-200 flex items-center justify-center text-gray-500">
                  No Internet,Check your internet.
                </div>
              )}
            </div>
            <div className="p-4 relative">
              <div
                className="flex flex-wrap justify-between gap-2 w-full absolute px-4 pt-3 z-10
                transition-all duration-500
                left-0 right-0
                group-hover:bottom-20
                lg:bottom-5 lg:opacity-0 lg:bg-white lg:group-hover:opacity-100
                max-lg:bottom-20 max-lg:py-3 max-lg:bg-white/60"
              >
                <button
                  type="button"
                  title="Add to wishlist"
                  className="bg-transparent outline-none border-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-gray-800 w-5 h-5 inline-block"
                    viewBox="0 0 64 64"
                  >
                    <path
                      d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                      data-original="#000000"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  title="Add to cart"
                  className="bg-transparent outline-none border-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-gray-800 w-5 h-5 inline-block"
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                      data-original="#000000"
                    />
                  </svg>
                </button>
              </div>
              <div className="z-20 relative bg-white">
                <h6 className="text-sm font-semibold text-gray-800 truncate">
                  {item.name}
                </h6>
                <h6 className="text-sm text-gray-600 mt-2">${item.price}.00</h6>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <ul className="flex space-x-5 justify-center font-[sans-serif] mt-6">
        {Array.from(Array(Math.ceil(filteredProducts.length / itemCount)).keys()).map((page) => (
          <li
            key={page + 1}
            onClick={() => setCurrentPage(page + 1)}
            className={`flex items-center justify-center shrink-0 cursor-pointer text-base font-bold px-[23px] h-12 rounded-md ${
              currentPage === page + 1
                ? "bg-blue-500 text-white"
                : "hover:bg-gray-50 text-gray-800"
            }`}
          >
            {page + 1}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShopProductSection;