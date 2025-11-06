"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { headerData } from "../Header/Navigation/menuData";
import Logo from "./Logo";
import HeaderLink from "../Header/Navigation/HeaderLink";
import MobileHeaderLink from "../Header/Navigation/MobileHeaderLink";
import { useTheme } from "next-themes";
import { Icon } from "@iconify/react/dist/iconify.js";

const Header: React.FC = () => {
  const pathUrl = usePathname();
  const { theme, setTheme } = useTheme();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    setSticky(window.scrollY >= 80);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to close mobile menu
  const closeMenu = () => setNavbarOpen(false);

  return (
    <header
      className={`fixed top-0 z-40 w-full pb-5 transition-all duration-300 bg-white bg-gradient-to-r from-indigo-200 to-violet-200 ${
        sticky ? "shadow-lg py-5" : "shadow-none py-6"
      }`}
    >
      <div className="lg:py-0 py-2">
        <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md flex items-center justify-between px-4">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex flex-grow items-center gap-8 justify-center">
            {headerData.map((item, index) => (
              <HeaderLink key={index} item={item} />
            ))}
          </nav>

          {/* --- RIGHT SIDE ICONS --- */}
          <div className="flex items-center gap-4">
            {/* WhatsApp Icon Button */}
            <div className="relative">
              <span className="absolute inset-0 rounded-full bg-green-400 opacity-50 animate-ping"></span>
              <Link
                href="https://wa.me/94760325720"
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center bg-green-500 hover:bg-green-600 text-white rounded-full p-2 transition-transform duration-300 hover:scale-110 shadow-md"
                aria-label="Contact on WhatsApp"
              >
                <Icon icon="logos:whatsapp-icon" className="w-6 h-6" />
                <h1 className="hidden lg:block ml-2 font-semibold tracking-wide">
                  +94 760 325 720
                </h1>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="block lg:hidden p-2 rounded-lg"
              aria-label="Toggle mobile menu"
            >
              <span className="block w-6 h-0.5 bg-black"></span>
              <span className="block w-6 h-0.5 bg-black mt-1.5"></span>
              <span className="block w-6 h-0.5 bg-black mt-1.5"></span>
            </button>
          </div>
        </div>

        {/* Mobile Overlay */}
        {navbarOpen && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40"
            onClick={closeMenu}
          />
        )}

        {/* Mobile Menu */}
        <div
          ref={mobileMenuRef}
          className={`lg:hidden fixed top-0 right-0 h-full w-full shadow-lg transform transition-transform duration-300 max-w-xs ${
            navbarOpen
              ? "translate-x-0 bg-slate-100"
              : "translate-x-full bg-slate-100"
          } z-50`}
        >
          <div className="flex items-center justify-between p-4">
            <button
              onClick={closeMenu}
              className="bg-red-500 p-3 rounded-3xl text-white"
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>

          <nav className="flex flex-col items-start p-4">
            {headerData.map((item, index) => (
              <MobileHeaderLink
                key={index}
                item={item}
                closeMenu={closeMenu}
              />
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
