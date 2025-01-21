// import Hero from "@/components/common/Hero";
import BlogSection from "./sections/blog-section";
import RecentBlog from "./sections/recent-blog";
import Link from "next/link";
import Banner from "@/components/banner";

export default function BlogPage() {
  return (
    <>
      {/* Banner Section Start  */}
      <div className="relative">
        <Banner />
        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          {/* Adjust spacing and positioning */}
          <div className="mt-20">
            {" "}
            {/* Push text down */}
            <h1 className="text-xl text-black sm:text-2xl md:text-3xl lg:text-4xl font-bold font-poppins">
              Blog
            </h1>
            {/* Breadcrumb */}
            <p className="text-sm text-black sm:text-base md:text-lg lg:text-xl mt-2 font-poppins">
              <Link href="/" className="font-semibold hover:underline">
                Home
              </Link>{" "}
              &gt; Blog
            </p>
          </div>
        </div>
      </div>
      {/* Banner Section End  */}
      <div className="w-screen flex justify-center">
        <section className="w-[90%] flex flex-col lg:flex-row gap-[60px] py-[60px]">
          <BlogSection />
          <RecentBlog />
        </section>
      </div>
    </>
  );
}
