"use client";
import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(true);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

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

            <div
              className="relative"
              onMouseEnter={toggleDropdown}
              onMouseLeave={closeDropdown}
            >
              <button className="text-gray-600 hover:text-gray-800">
                Products
              </button>
              {isDropdownOpen && (
                <div className="absolute bg-white shadow-lg rounded-md mt-2 w-48">
                  <ul className="py-2">
                    <li>
                      <Link
                        href="/products/cricket-bats"
                        className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-800"
                      >
                        Cricket Bats
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/products/cricket-balls"
                        className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-800"
                      >
                        Cricket Balls
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/products/protections"
                        className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-800"
                      >
                        Protections
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/products/shoes"
                        className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-800"
                      >
                        Shoes
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/products/accessories"
                        className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-800"
                      >
                        Accessories
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>

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
              href="/blog"
              className="block text-gray-600 hover:text-gray-800"
              onClick={toggleMobileMenu}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="block text-gray-600 hover:text-gray-800"
              onClick={toggleMobileMenu}
            >
              Contact
            </Link>

            <div className="space-y-2">
              <Link
                href="/products/cricket-bats"
                className="block text-gray-600 hover:text-gray-800"
                onClick={toggleMobileMenu}
              >
                Cricket Bats
              </Link>
              <Link
                href="/products/cricket-balls"
                className="block text-gray-600 hover:text-gray-800"
                onClick={toggleMobileMenu}
              >
                Cricket Balls
              </Link>
              <Link
                href="/products/protections"
                className="block text-gray-600 hover:text-gray-800"
                onClick={toggleMobileMenu}
              >
                Protections
              </Link>
              <Link
                href="/products/shoes"
                className="block text-gray-600 hover:text-gray-800"
                onClick={toggleMobileMenu}
              >
                Shoes
              </Link>
              <Link
                href="/products/accessories"
                className="block text-gray-600 hover:text-gray-800"
                onClick={toggleMobileMenu}
              >
                Accessories
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
