import { Separator } from "@/components/ui/separator";
import { ChevronRight } from "lucide-react";
import React from "react";

export default function ProductDetailTopSection({
  productTitle,
}: {
  product_id: string;
  productTitle: string;
}) {
  return (
    <section className="px-4 md:px-[70px] flex h-[100px] gap-3 font-poppins font-normal text-base items-center">
      <div className="text-[#9F9F9F]">Home</div>
      <ChevronRight />
      <div className="text-[#9F9F9F]">Shop</div>
      <ChevronRight />
      <Separator
        orientation="vertical"
        className="h-[40px] border border-[#9F9F9F]"
      />
      <div className="font-normal text-base">{productTitle}</div>
    </section>
  );
}
