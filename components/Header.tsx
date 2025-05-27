"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import LogoIcon from "@/public/icons/LogoIcon";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const cleanPath = pathname.replace(/^\/|\/$/g, "");

  const menuItems = [
    { label: "The Infinity Villa", link: "Infinity" },
    { label: "The Horizon Retreat", link: "Horizon" },
    { label: "Gallery", link: "Gallery" },
    { label: "Home", link: "" }, // "/" → ""
  ];

  // เทียบโดยใช้ startsWith แบบไม่มี /
  const activeLabel =
    menuItems.find((item) => cleanPath.startsWith(item.link))?.label || "Home";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomeActive = activeLabel === "Home";

  const mdTextColorClass = isHomeActive
    ? scrolled
      ? "lg:text-black/50"
      : "lg:text-white"
    : "lg:text-black/50";
  // alert(activeLabel)


  return (
    <header
      className={`fixed top-0 left-0 right-0 h-[72px] z-50 ${
        scrolled ? "bg-white" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 py-4">
        <div className="site-logo">
          <Link href={"/"}>
            {scrolled ? (
              <LogoIcon color="#F79009"/>
            ) : (
              activeLabel === 'Home' ? <LogoIcon/> : <LogoIcon color="#F79009"/>
            )} 
          </Link>
        </div>
        <nav className="site-link">
          <div
            className={`flex lg:hidden ${
              mdTextColorClass
            }  text-sm font-medium cursor-pointer transition duration-300 ease-in-out`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✖" : "☰"}
          </div>
          <ul
            className={`${
              menuOpen ? "" : "hidden"
            } lg:flex flex-col items-center justify-center text-center lg:flex-row gap-4 lg:gap-[50px] text-sm font-medium absolute lg:static top-18 right-4 bg-white border-[3px] border-gray-200 shadow-lg rounded-lg z-50 lg:z-auto lg:shadow-none lg:border-none lg:bg-transparent w-[200px] lg:w-auto`}
          >
            {[
              { label: "Home", link: "/" },
              { label: "The Infinity Villa", link: "/Infinity" },
              { label: "The Horizon Retreat", link: "/Horizon" },
              { label: "Gallery", link: "/Gallery" },
            ].map((label, i) => (
              <li
                key={i}
                className={`border-b border-gray-200 lg:border-0 py-2 ${
                  i === 3 ? "border-none" : ""
                }`}
              >
                <Link
                  href={label.link}
                  className={`${mdTextColorClass} text-black/50 relative inline-block lg:hover:text-black hover:text-orange-600 font-medium lg:hover:font-medium hover:font-bold transition duration-200 transform ${
                    activeLabel === label.label
                      ? "text-orange-500 font-bold"
                      : ""
                  }`}
                >
                  <span className="inline-block transform transition-transform duration-200 ">
                    {label.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
