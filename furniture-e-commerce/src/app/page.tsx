
import Hero1 from "@/components/hero1";
import Hero2 from "@/components/hero2";
// import Hero3 from "@/components/hero3";
import Blogs1 from "@/components/blogs";
import Insta from "@/components/insta";
import Head from "@/components/head";


export default function Home() {
  return (
   <div className="">
    <Head/>
<Hero1/>
<Hero2/>
{/* <Hero3/> */}
<Blogs1/>
<Insta/>
   </div>
  );
}
