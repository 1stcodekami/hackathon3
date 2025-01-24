// File: app/shop/product/[product_id]/page.tsx

import React from "react";
import ProductDetailExtraInfoSection from "@/components/sections/shop/product-detail/ProductDetailExtraInfoSection";
import ProductDetailRelatedSection from "@/components/sections/shop/product-detail/ProductDetailRelatedSection";
import ProductDetailShowcaseSection from "@/components/sections/shop/product-detail/ProductDetailShowcaseSection";
import ProductDetailTopSection from "@/components/sections/shop/product-detail/ProductDetailTopSection";
import { Separator } from "@/components/ui/separator";
import { client } from "@/sanity/lib/client";

export interface PageProps {
  params: { product_id: string };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { product_id } = params;

  // Fetch product details from Sanity
  const query = `*[_type == "product" && _id == $product_id][0]{
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

  const product = await client.fetch(query, { product_id });

  // Handle the case where the product is not found
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="mt-24 lg:mt-8">
      <ProductDetailTopSection
        product_id={product._id}
        productTitle={product.name}
      />
      <div className="mt-8 px-4 md:px-[50px] lg:px-[100px]">
        <ProductDetailShowcaseSection productId={product._id} />
      </div>

      <div className="my-[41px]">
        <Separator className="border border-[#D9D9D9]" />
      </div>

      <div className="mt-8 px-4 md:px-[50px] lg:px-[100px]">
        <ProductDetailExtraInfoSection />
      </div>

      <div className="my-[41px]">
        <Separator className="border border-[#D9D9D9]" />
      </div>

      <div className="mt-8 px-4 md:px-[50px] lg:px-[100px]">
        <ProductDetailRelatedSection />
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  // Fetch all products' IDs from Sanity
  const query = `*[_type == "product"]{ _id }`;
  const products = await client.fetch(query);

  return products.map((product: { _id: string }) => ({
    product_id: product._id,
  }));
}
