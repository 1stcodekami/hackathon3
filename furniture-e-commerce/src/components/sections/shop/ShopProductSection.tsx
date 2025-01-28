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
  const { searchTerm, setSearchTerm } = useSearch(); // Use global search term
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

  const handleSearchIconClick = () => {
    setIsSearchVisible(!isSearchVisible); // Toggle search bar visibility
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const startIndex = (currentPage - 1) * itemCount;
  const endIndex = startIndex + itemCount;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  return (
    <section className="mt-[46px]">
      <div className="relative">
        <div
          className="absolute top-0 right-0 flex items-center pr-3 cursor-pointer"
          onClick={handleSearchIconClick}
        >
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        {isSearchVisible && (
          <form
            className="absolute top-8 right-0 max-w-md mx-auto mb-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="relative">
              <input
                type="text"
                id="default-search"
                className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search furniture..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} // Update global search term
              />
            </div>
          </form>
        )}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 font-poppins md:grid-cols-2 xl:grid-cols-4 gap-[32px]">
        {currentProducts.map((item) => (
          <div
            key={item._id}
            className="p-4 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
            onClick={() => handleProductClick(item._id)}
          >
            <div className="relative w-full h-[250px]">
              {item.image ? (
                <Image
                  src={urlFor(item.image).url()}
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
            <p className="text-gray-500 text-sm">{item.name}</p>
            <p className="text-black font-semibold text-2xl mt-2">${item.price}.00</p>
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
    </section>
  );
};

export default ShopProductSection;
