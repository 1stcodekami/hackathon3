import React from "react";
import Image from "next/image";

interface BannerItem {
  iconUrl: string;
  title: string;
  description: string;
}

const ShopBannerSection: React.FC = () => {
  const data: BannerItem[] = [
    {
      iconUrl: "/images/banner_icon_1.png",
      title: "High Quality",
      description: "crafted from top materials",
    },
    {
      iconUrl: "/images/banner_icon_2.png",
      title: "Warranty Protection",
      description: "Over 2 years",
    },
    {
      iconUrl: "/images/banner_icon_3.png",
      title: "Free Shipping",
      description: "Order over 150 $",
    },
    {
      iconUrl: "/images/banner_icon_4.png",
      title: "24 / 7 Support",
      description: "Dedicated support",
    },
  ];

  return (
    <section className="bg-[#FAF3EA] md:h-[270px] py-16 md:py-0 flex px-4 md:px-[53px]">
      <div className="flex flex-col gap-8 md:flex-row justify-between w-full">
        {data.map((item, index) => (
          <div key={index} className="flex gap-4 items-center">
            {/* Optimized Image with Next.js */}
            <div className="flex-shrink-0">
              <Image
                src={item.iconUrl}
                alt={`${item.title} icon`}
                width={64} // Adjust based on design
                height={64} // Adjust based on design
                className="object-contain"
                priority // Ensures faster loading for above-the-fold content
              />
            </div>

            {/* Title and Description */}
            <div>
              <p className="text-customBlack font-semibold text-base xl:text-[25px]">
                {item.title}
              </p>
              <p className="text-customGray text-sm md:text-base">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShopBannerSection;
