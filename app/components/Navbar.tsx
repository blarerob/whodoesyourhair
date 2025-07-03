"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="w-full flex items-center h-20 px-4 relative">
      {/* Desktop Menu */}
      <div className="hidden md:flex w-full justify-center items-center">
      <div className="text-white ml-28 space-x-10 text-lg font-medium h-full">
          <Link href="/about" className={pathname === '/about' ? 'text-red-500' : ''}>ABOUT</Link>
          <Link href="/services" className={pathname === '/services' ? 'text-red-500' : ''}>SERVICES</Link>
          <Link href="/gallery" className={pathname === '/gallery' ? 'text-red-500' : ''}>GALLERY</Link>
          <Link href="/salon" className={pathname === '/salon' ? 'text-red-500' : ''}>SALON 6</Link>
          <Link href="/contact" className={pathname === '/contact' ? 'text-red-500' : ''}>CONTACT</Link>
        </div>
      </div>
        <a
          href="#book"
          className="hidden md:flex justify-end items-end rounded-full text-white text-nowrap
          hover:bg-red-600 transition"
            >
          BOOK A CONSULTATION
        </a>


      {/* Mobile Menu */}
      <div className="flex md:hidden w-full justify-between items-center">
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
        <a
          href="#book"
          className="px-4 py-2 rounded-full text-white bg-red-500 hover:bg-red-600 transition"
        >
          BOOK
        </a>
      </div>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-gray-800 text-white flex flex-col items-center space-y-4 py-4 md:hidden">
          <Link href="/about" className={pathname === '/about' ? 'text-red-500' : ''}>ABOUT</Link>
          <Link href="/services" className={pathname === '/services' ? 'text-red-500' : ''}>SERVICES</Link>
          <Link href="/gallery" className={pathname === '/gallery' ? 'text-red-500' : ''}>GALLERY</Link>
          <Link href="/salon" className={pathname === '/salon' ? 'text-red-500' : ''}>SALON 6</Link>
          <Link href="/contact" className={pathname === '/contact' ? 'text-red-500' : ''}>CONTACT</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;