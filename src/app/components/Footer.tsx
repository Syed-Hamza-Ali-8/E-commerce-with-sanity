import React from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="flex flex-col w-full md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-lg font-bold text-white">About Us</h3>
            <p className="mt-2 text-sm">
              Cricket Hub is your one-stop destination for premium cricket
              products. From bats to protective gear, we ensure quality and
              affordability for players of all levels.
            </p>
          </div>

          <div className="flex flex-col items-center w-full md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-lg font-bold text-white">Quick Links</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link href="/pages/FAQ" className="hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/pages/PrivacyPolicy" className="hover:text-white">
                  Privacy & Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/TermsAndConditions"
                  className="hover:text-white"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-end w-full md:w-1/3">
            <h3 className="text-lg font-bold text-white">Follow Us</h3>
            <div className="mt-4 flex space-x-4 justify-center md:justify-end">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
                aria-label="Facebook"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Cricket Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
