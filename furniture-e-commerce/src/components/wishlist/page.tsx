// src/components/wishlist/page.tsx
"use client";

import React from "react";
import { useWishlist } from "../../context/WishlistContext";
import { useAtom } from "jotai";
import { cartAtom } from "@/lib/storage/jotai";
import { WishlistItem } from "../../context/WishlistContext"; // Import the WishlistItem type
import Image from "next/image";

const WishlistComponent = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const [cart, setCart] = useAtom(cartAtom);

  const moveToCart = (item: WishlistItem) => {
    const isItemInCart = cart.some((cartItem) => cartItem.id === item.id);

    if (!isItemInCart) {
      setCart((prevCart) => [
        ...prevCart,
        {
          id: item.id,
          productName: item.name,
          productImageUrl: item.image,
          unitPrice: item.price,
          quantity: 1,
        },
      ]);

      removeFromWishlist(item.id);
    } else {
      console.log("Item is already in the cart");
    }
  };

  return (
    <div className="font-sans bg-gray-50 min-h-screen py-10 px-4 md:py-16 lg:py-20 flex justify-center">
      <div className="w-full max-w-4xl">
        <div className="bg-white divide-y p-4 shadow-md rounded-lg">
          {wishlist.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-10">
              <Image
                src="/images/no-wish-list.png"
                alt="No items in wishlist"
                width={350}
                height={350}
                className="w-64 sm:w-80 md:w-96"
              />
              {/* <p className="mt-4 text-gray-500 text-center">
                Your wishlist is empty.
              </p> */}
            </div>
          ) : (
            wishlist.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-start gap-4 py-4"
              >
                <div className="w-24 sm:w-32 h-auto shrink-0">
                  <img
                    src={item.image}
                    className="w-full aspect-[112/149] object-contain"
                    alt={item.name}
                  />
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full">
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-gray-800 mb-1">
                      {item.name}
                    </h3>
                    <div className="mt-2">
                      <button
                        type="button"
                        onClick={() => removeFromWishlist(item.id)}
                        className="text-red-500 text-sm font-semibold flex items-center gap-2"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z" />
                          <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z" />
                        </svg>
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="ml-auto flex flex-col items-end">
                    <button
                      type="button"
                      onClick={() => moveToCart(item)}
                      className="px-5 py-2.5 rounded-lg text-white text-sm font-medium border bg-blue-700 hover:bg-blue-800"
                    >
                      Move to Cart
                    </button>
                    <div className="mt-4 text-right">
                      <h4 className="text-sm text-gray-500 line-through">
                        $22.5
                      </h4>
                      <h4 className="text-base font-bold text-gray-800">
                        ${item.price}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default WishlistComponent;
