"use client";

import React, { useEffect, useState } from "react";
import { client, urlFor } from "@/sanity/lib/client";
import Image from "next/image";
import { useRouter } from "next/navigation";

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
  const [currentPage, setCurrentPage] = useState(1); // Track the current page
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

  const startIndex = (currentPage - 1) * itemCount;
  const endIndex = startIndex + itemCount;
  const currentProducts = products.slice(startIndex, endIndex);

  return (
    <section className="mt-[46px]">
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
  {/* <li
    onClick={() => currentPage > 1 && setCurrentPage((prev) => prev - 1)}
    className={`flex items-center justify-center shrink-0 cursor-pointer text-base font-bold ${
      currentPage === 1 ? "text-gray-400" : "text-blue-600"
    } h-9 rounded-md`}
  >
    Prev
  </li> */}
  {Array.from(Array(Math.ceil(products.length / itemCount)).keys()).map((page) => (
    <li
      key={page + 1}
      onClick={() => setCurrentPage(page + 1)}
      className={`flex items-center justify-center shrink-0 cursor-pointer text-base font-bold px-[23px] h-12 rounded-md ${
        currentPage === page + 1 ? "bg-blue-500 text-white" : "hover:bg-gray-50 text-gray-800"
      }`}
    >
      {page + 1}
    </li>
  ))}
  <li
    onClick={() =>
      currentPage < Math.ceil(products.length / itemCount) &&
      setCurrentPage((prev) => prev + 1)
    }
    className={`flex items-center justify-center shrink-0 cursor-pointer text-base font-bold ${
      currentPage === Math.ceil(products.length / itemCount)
        ? "text-gray-400"
        : "text-blue-600"
    } h-9 rounded-md`}
  >
    Next
  </li>
</ul>

      {/* Pagination */}


    </section>
  );
};

export default ShopProductSection;
