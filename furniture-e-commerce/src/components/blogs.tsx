import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GoClock } from "react-icons/go";
import { CiCalendar } from "react-icons/ci";

const Blogs1 = () => {
  return (
    <div className="w-full mx-auto bg-[#FFFFFF] py-12 flex flex-col items-center">
      {/* Title */}
      <div>
        <h1 className="font-poppins font-[500] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          Our Blogs
        </h1>
        <br />
      </div>

      {/* Subtitle */}
      <div>
        <p className="font-poppins text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[#9F9F9F] text-center">
          Find a bright ideal to suit your taste with our great selection
        </p>
      </div>

      {/* Inner container to structure content */}
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-10 px-6 sm:px-8 mx-auto py-12">
        {/* Blog Card */}
        {[1, 2, 3].map((item) => (
          <div key={item} className="flex flex-col items-center gap-4 md:gap-6 w-full md:w-1/4">
            <div className="w-full flex justify-center">
              <Image
                src={`/images/Rectangle ${12 + item}.png`}
                alt={`Rectangle ${12 + item}`}
                width={393}
                height={393}
                objectFit="contain"
                className="max-w-full h-auto rounded-lg"
              />
            </div>
            <div className="text-center">
              <p className="font-poppins text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                Going all-in with millennial design
              </p>
              <div className="mt-2">
                <Link
                  href="/"
                  className="font-poppins text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold relative"
                >
                  <span className="inline-block">Read More</span>
                  <span className="absolute bottom-[-4px] left-0 h-[2px] bg-black w-full"></span>
                </Link>
              </div>
            </div>
            <div className="flex gap-2 mt-2">
              <div className="flex gap-2 items-center">
                <GoClock />
                <span>5 min</span>
              </div>
              <div className="flex gap-2 items-center">
                <CiCalendar />
                <span>12th Oct 2022</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View More Link */}
      <div>
        <Link
          href="/blog"
          className="font-poppins text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold relative"
        >
          <span className="inline-block">View All Post</span>
          <span className="absolute bottom-[-15px] left-0 h-[2px] bg-black w-full"></span>
        </Link>
      </div>
    </div>
  );
};

export default Blogs1;
