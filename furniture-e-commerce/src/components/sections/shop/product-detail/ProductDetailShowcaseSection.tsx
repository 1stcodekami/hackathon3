"use client";

import React, { useState, useEffect } from "react";
import { Separator } from "@/components/ui/separator";
import ReactStars from "react-stars";
import Image from "next/image";
import MainButton from "@/components/common/MainButton";
import { MinusIcon, PlusIcon } from "lucide-react";
import { useAtom } from "jotai";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { cartAtom } from "@/lib/storage/jotai";
import { client } from "@/sanity/lib/client";

export default function ProductDetailShowcaseSection({
  productId,
}: {
  productId: string;
}) {
  const MAX_QUANTITY = 10;
  const [selectedSize, setSelectedSize] = useState<string>("XS");
  const sizeOptions = ["XS", "L", "XL"];
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const colorOptions = [
    { color: "#816DFA" },
    { color: "#000000" },
    { color: "#CDBA7B" },
  ];

  const miniImages = [
    "/images/s2p1c1r1.png",
    "/images/s2p1c1r2.png",
    "/images/s2p1c1r3.png",
    "/images/Maya sofa three seater (1) 1.png",
  ];

 

  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useAtom(cartAtom);
  const { toast } = useToast();
  const [specificProduct, setSpecificProduct] = useState<any>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const query = `*[_type == "product" && _id == $productId][0]{
        _id,
        price,
        description,
       "image": image.asset->url,
        stockLevel,
        id,
        category,
        discountPercentage,
        name,
        isFeaturedProduct,
     }`;

      const product = await client.fetch(query, { productId });
      setSpecificProduct(product);
    };

    fetchProduct();
  }, [productId]);

  if (!specificProduct) return <p>Product not found.</p>;

  const handleQuantityDecrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleQuantityIncrement = () => {
    if (quantity < MAX_QUANTITY) setQuantity(quantity + 1);
  };

  

  
  
  
  const handleAddToCart = () => {
    const productInCart = cart.find((product) => product.id === productId);
  
    if (productInCart) {
      const updatedCart = cart.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity + quantity }
          : product
      );
      setCart(updatedCart);
    } else if (specificProduct?.price !== undefined) {
      const newProduct = {
        id: productId,
        productImageUrl: specificProduct.image,
        productName: specificProduct.name,
        quantity,
        unitPrice: specificProduct.price, // Directly use the numeric price
      };
  
      setCart((prevCart) => [...prevCart, newProduct]);
    } else {
      toast({
        title: "Error",
        description: "Failed to add product to cart due to invalid price.",
        action: <ToastAction altText="Retry">Retry</ToastAction>,
      });
      return;
    }
  
    toast({
      title: "Success",
      description: "Product added to cart successfully.",
      action: <ToastAction altText="Close">Close</ToastAction>,
    });
  };
  







  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left Section */}
      <div className="flex gap-8">
        <div className="hidden md:flex flex-col gap-4">
          {miniImages.map((imgSrc, index) => (
            <Image
              key={index}
              src={imgSrc}
              alt={`Thumbnail ${index + 1}`}
              width={150}
              height={150}
              className="object-contain mx-auto bg-[#FFF9E5] rounded-md"
            />
          ))}
        </div>
        <div className="flex flex-col bg-[#FFF9E5] rounded-md justify-center items-center h-[650px]">
          <Image
            src={specificProduct.image }  // Fallback image
            alt={specificProduct.name || 'No Image Available'}
            width={550}
            height={500}
            className="object-cover rounded-md"
            priority
          />
        </div>
      </div>

      {/* Right Section */}
      <div>
        {/* <h1 className="text-[42px]">{specificProduct.title}</h1> */}
        <p className="text-customGray text-[24px] font-medium">${specificProduct.price}</p>
        <div className="flex items-center gap-[22px] mt-2">
          <ReactStars count={5} value={4} size={24} color2="#FFC700" />
          <Separator orientation="vertical" className="h-[40px] border border-customGray2" />
          <p>5 Customer Reviews</p>
        </div>
        <p className="mt-4">{specificProduct.description}</p>

        {/* Size Options */}
        <div className="mt-4">
          <p className="font-poppins text-sm text-[#9F9F9F]">Size</p>
          <div className="flex gap-2 mt-2">
            {sizeOptions.map((size) => (
              <button
                key={size}
                className={`px-4 py-2 border rounded-md ${selectedSize === size ? "bg-[#FBEBB5] text-black" : "bg-[#FAF4F4]"}`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Color Options */}
        <div className="mt-4">
          <p className="font-poppins text-sm text-[#9F9F9F]">Color</p>
          <div className="flex gap-2 mt-2">
            {colorOptions.map(({ color }, index) => (
              <button
                key={index}
                className={`w-8 h-8 rounded-full border ${selectedColor === color ? "ring-2 ring-offset-2 ring-[#91876a]" : ""}`}
                style={{ backgroundColor: color }}
                onClick={() => setSelectedColor(color)}
              />
            ))}
          </div>
        </div>

        {/* Quantity and Add to Cart */}
        <div className="flex items-center gap-6 mt-8">
          <div className="flex items-center border border-customGray2 rounded-md px-4 py-2">
            <MinusIcon onClick={handleQuantityDecrement} className="cursor-pointer" />
            <p className="mx-4 select-none">{quantity}</p>
            <PlusIcon onClick={handleQuantityIncrement} className="cursor-pointer" />
          </div>
          <MainButton
            text="Add to Cart"
            classes="bg-white hover:bg-[#FFF9E5] text-black border border-black rounded-md"
            action={handleAddToCart}
          />
        </div>

        {/* Extra Details */}
        <div className="mt-8">
          <Separator className="border-[#D9D9D9]" />
          <div className="mt-4 space-y-2">
        <p className="text-customGray text-[24px] font-medium"></p>

          
        <div className="flex gap-4 flex-wrap">
  <div className="flex gap-4">
    <p className="text-[#9F9F9F]">SKU:</p>
    <div>SS001</div>
  </div>
  
  <div className="w-full flex gap-4">
    <p className="text-[#9F9F9F]">Category:</p>
    <div>{specificProduct.category}</div>
  </div>

  <div className="flex gap-4">
    <p className="text-[#9F9F9F]">Tags:</p>
    <div>Sofa, Chair, Home, Shop</div>
  </div>
</div>


              <div className="flex gap-[23px]">
          <Image src="/images/facebook.png" alt="Facebook" width={24} height={24} />
          <Image src="/images/linkedin.png" alt="LinkedIn" width={24} height={24} />
          <Image src="/images/twitter.png" alt="Twitter" width={24} height={24} />
        </div>
          
          </div>
        </div>
      </div>
    </section>
  );
}
