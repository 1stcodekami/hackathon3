"use client";
import React, { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { MenuIcon, X } from "lucide-react";
import Link from "next/link";
import CartSection from "../sections/shop/CartSection";
import { RemoveScroll } from "react-remove-scroll";
import { useAtomValue } from "jotai";
import { Badge } from "../ui/badge";
import { cartAtom } from "@/lib/storage/jotai";
import Image from "next/image";
import { useSearch } from "@/context/SearchContext";
import { useWishlist } from "@/context/WishlistContext"; // Import Wishlist Context

function NavBar() {
  const [showCart, setShowCart] = useState(false);
  const [menu, setMenu] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const searchRef = useRef<HTMLDivElement | null>(null); // Typed ref
  const cartValue = useAtomValue(cartAtom);
  const { setSearchTerm, searchTerm } = useSearch();
  const { wishlist } = useWishlist(); // Access wishlist context
  const router = useRouter();
  const pathname = usePathname();

  const links = [
    { title: "Home", link: "/" },
    { title: "Shop", link: "/shop" },
    { title: "Blog", link: "/blog" },
    { title: "Contact", link: "/contact" },
  ];

  const icons = [
    { iconUrl: "/images/user_icon.png", alt: "user icon", action: () => console.log("You just clicked on the user icon") },
    { iconUrl: "/images/heart_icon.png", alt: "heart icon", action: () => router.push("/wishlist") }, // Navigate to wishlist page
    { iconUrl: "/images/cart_icon.png", alt: "cart icon", action: () => setShowCart(!showCart), badgeValue: cartValue?.length },
  ];

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      router.push(`/shop?search=${encodeURIComponent(searchTerm)}`);
    }
  };

  const handleSearchIconClick = () => {
    setIsSearchVisible(true);
  };

  // Close search box when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsSearchVisible(false);
      }
    };

    if (isSearchVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isSearchVisible]);

  const navBarBackground = pathname === "/" ? "bg-[#FBEBB5]" : "bg-white";

  return (
    <div className="relative">
      {/* Background overlay when cart is visible */}
      {showCart && (
        <div className="fixed inset-0 bg-black/20 z-[98]" onClick={() => setShowCart(false)}></div>
      )}

      <div className={`md:sticky font-poppins pt-2 md:top-0 md:shadow-none z-20 relative ${navBarBackground}`}>
        <div className="hidden lg:block animate-in fade-in zoom-in p-4">
          <div className="flex justify-between mx-[41px] items-center">
            <div></div>
            <div className="flex gap-[20px] xl:gap-[50px] text-[16px] items-center select-none">
              {links.map((link, index) => (
                <Link href={link.link} key={index} className="hover:text-primary cursor-pointer flex items-center gap-2 font-[500] text-gray">
                  <p>{link.title}</p>
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-[40px] select-none">
              {/* Search Section */}
              <div className="relative" ref={searchRef}>
                <Image
                  src="/images/search_icon.png"
                  alt="search icon"
                  width={25}
                  height={25}
                  onClick={handleSearchIconClick}
                  className="cursor-pointer"
                />
                {isSearchVisible && (
                  <form className="absolute left-[-210px]" onSubmit={handleSearchSubmit}>
                    <input
                      type="text"
                      id="default-search"
                      className="block w-[200px] p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Search products..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </form>
                )}
              </div>

              {/* Icons */}
              {icons.map((icon, index) => (
                <div key={index} className="relative">
                  <Image
                    src={icon.iconUrl}
                    onClick={icon.action}
                    alt={icon.alt}
                    width={25}
                    height={25}
                    className="cursor-pointer"
                  />
                  {/* Wishlist Badge */}
                  {icon.alt === "heart icon" && wishlist.length > 0 && (
                    <Badge variant="destructive" className="absolute -top-3 -right-5">
                      {wishlist.length}
                    </Badge>
                  )}
                  {/* Cart Badge */}
                  {icon.alt === "cart icon" && cartValue && cartValue.length > 0 && (
                    <Badge variant="destructive" className="absolute -top-3 -right-5">
                      {cartValue.length}
                    </Badge>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className={`block lg:hidden shadow-sm font-poppins fixed top-0 w-full z-[999] py-4 animate-in fade-in zoom-in ${menu ? "!bg-[#FFF3E3] py-2" : ""}`}>
          <div className="flex justify-between mx-[10px]">
            <div></div>
            <div className="flex items-center gap-[40px]">
              {menu ? (
                <X className="cursor-pointer animate-in fade-in zoom-in text-black" onClick={toggleMenu} />
              ) : (
                <MenuIcon onClick={toggleMenu} className="cursor-pointer animate-in fade-in zoom-in" />
              )}
            </div>
          </div>
          {menu && (
            <div className="my-8 select-none animate-in slide-in-from-right">
              <div className="flex flex-col gap-8 mt-8 mx-4">
                {links.map((link, index) => (
                  <Link key={index} href={link.link} className="text-black cursor-pointer">
                    <p>{link.title}</p>
                  </Link>
                ))}
                <div className="flex flex-col gap-[40px] select-none">
                  {icons.map((icon, index) => (
                    <div key={index} className="relative">
                      <Image
                        src={icon.iconUrl}
                        onClick={icon.action}
                        alt={icon.alt}
                        width={30}
                        height={30}
                        className="cursor-pointer w-[28px] h-[28px] object-contain"
                      />
                      {/* Wishlist Badge */}
                      {icon.alt === "heart icon" && wishlist.length > 0 && (
                        <Badge variant="destructive" className="absolute -top-3 -right-5">
                          {wishlist.length}
                        </Badge>
                      )}
                      {/* Cart Badge */}
                      {icon.alt === "cart icon" && cartValue && cartValue.length > 0 && (
                        <Badge variant="destructive" className="absolute -top-3 -right-5">
                          {cartValue.length}
                        </Badge>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Cart Section */}
      {showCart && (
        <div className="fixed top-0 right-0 z-[100] w-full md:w-auto">
          <RemoveScroll>
            <CartSection toggleShowCart={() => setShowCart(!showCart)} />
          </RemoveScroll>
        </div>
      )}
    </div>
  );
}

export default NavBar;