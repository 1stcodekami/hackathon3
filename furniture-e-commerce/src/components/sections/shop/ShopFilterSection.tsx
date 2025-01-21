import React from "react";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

interface ShopFilterSectionProps {
  itemCount: number;
  setItemCount: React.Dispatch<React.SetStateAction<number>>;
}

const ShopFilterSection: React.FC<ShopFilterSectionProps> = ({
  itemCount,
  setItemCount,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(4, parseInt(e.target.value || "4", 10)); // Minimum value of 4
    setItemCount(Math.min(32, Math.max(4, value))); // Clamp value between 4 and 32
  };

  return (
    <section className="bg-[#FAF4F4] px-4 py-[31px] flex flex-col md:flex-row gap-8 justify-around items-center">
      {/* LHS Section */}
      <div className="flex gap-8 items-center">
        <div className="flex gap-2 items-center hover:cursor-pointer">
          <Image
            src="/images/filter_icon.png"
            alt="Filter icon"
            width={24}
            height={24}
            className="block"
            priority
          />
          <p className="text-base">Filter</p>
        </div>

        <div className="hover:cursor-pointer">
          <Image
            src="/images/grid_icon.png"
            alt="Grid icon"
            width={24}
            height={24}
            className="block"
            priority
          />
        </div>
        <div className="hover:cursor-pointer">
          <Image
            src="/images/list_icon.png"
            alt="List icon"
            width={24}
            height={24}
            className="block"
            priority
          />
        </div>
        <div className="hidden md:block">
          <Separator
            orientation="vertical"
            className="h-[37px] border border-[#9F9F9F]"
          />
        </div>
        <p className="text-base">Showing 1 - {itemCount} of 32 results</p>
      </div>

      {/* RHS Section */}
      <div className="flex gap-8 items-center">
        {/* Show Item Count */}
        <div className="flex gap-4 items-center">
          <p className="text-[20px]">Show</p>
          <input
            type="number"
            value={itemCount}
            onChange={handleInputChange}
            min={4}
            max={32}
            className="bg-white w-[65px] h-[55px] text-center border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
          />
        </div>

        {/* Sort By Options */}
        <div className="flex gap-4 items-center">
          <p className="text-[20px]">Sort by</p>
          <Select>
            <SelectTrigger className="w-[180px] h-[55px] bg-white border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary">
              <SelectValue placeholder="Select a filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Filter</SelectLabel>
                <SelectItem value="default">Default</SelectItem>
                <SelectItem value="type">Type</SelectItem>
                <SelectItem value="price">Price</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </section>
  );
};

export default ShopFilterSection;
