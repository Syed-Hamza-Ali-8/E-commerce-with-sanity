"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa"; 

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-gray-800">
            <Link href="/">Cricket Hub</Link>
          </div>

          <nav className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-gray-600 hover:text-gray-800">
              Home
            </Link>
            <Link
              href="/pages/About"
              className="text-gray-600 hover:text-gray-800"
            >
              About
            </Link>
            <Link
              href="/pages/Products"
              className="text-gray-600 hover:text-gray-800"
            >
              Products
            </Link>

            <Link
              href="/pages/Blogs"
              className="text-gray-600 hover:text-gray-800"
            >
              Blog
            </Link>
            <Link
              href="/pages/Contact"
              className="text-gray-600 hover:text-gray-800"
            >
              Contact
            </Link>
          </nav>

          <div className="relative">
            <Link href="/components/Cart">
              <FaShoppingCart className="h-6 w-6 text-gray-600 hover:text-gray-800 cursor-pointer" />
            </Link>
          </div>

          <button
            className="md:hidden flex items-center text-gray-600 hover:text-gray-800"
            aria-label="Open Menu"
            onClick={toggleMobileMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-md p-4 space-y-4">
            <Link
              href="/"
              className="block text-gray-600 hover:text-gray-800"
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
            <Link
              href="/pages/About"
              className="block text-gray-600 hover:text-gray-800"
              onClick={toggleMobileMenu}
            >
              About
            </Link>
            <Link
              href="/pages/Products"
              className="block text-gray-600 hover:text-gray-800"
              onClick={toggleMobileMenu}
            >
              Products
            </Link>
            <Link
              href="/pages/Blogs"
              className="block text-gray-600 hover:text-gray-800"
              onClick={toggleMobileMenu}
            >
              Blog
            </Link>
            <Link
              href="/pages/Contact"
              className="block text-gray-600 hover:text-gray-800"
              onClick={toggleMobileMenu}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
