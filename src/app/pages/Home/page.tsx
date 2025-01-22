"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className="bg-gray-50">
      <div
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('/HomeSection/babar-azam.webp')",
          backgroundPosition: "center 35%",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 sm:px-8 md:px-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Elevate Your Cricket Game
          </h1>
          <p className="text-lg sm:text-xl mb-8">
            Premium cricket gear for every player. Quality that speaks for
            itself.
          </p>
          <Link
            href="/pages/Products"
            passHref
            className="bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-lg text-lg hover:bg-blue-700 transition duration-300"
          >
            Shop Now
          </Link>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6 animate__animated animate__fadeInUp">
            Featured Products
          </h2>
          <p className="text-lg text-gray-600 mb-12 animate__animated animate__fadeInUp animate__delay-1s">
            Discover the latest in premium cricket equipment.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              "gray-nicolls-bat",
              "kookaburra-ball",
              "protection",
              "shoes",
              "clothing",
            ].map((product, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105"
              >
                <Image
                  src={`/HomeSection/${product}.jpeg`}
                  alt={product}
                  width={500}
                  height={400}
                  className="w-full h-64 sm:h-72 object-cover rounded-md mb-4 transition duration-300 transform filter grayscale hover:grayscale-0"
                />
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
                  {product.charAt(0).toUpperCase() + product.slice(1)}
                </h3>
                <p className="text-gray-600 mb-4">
                  Premium quality {product} designed for maximum performance.
                </p>
                <Link
                  href={`/products/${product}`}
                  passHref
                  className="text-blue-600 hover:text-blue-700 transition duration-300"
                >
                  View Product
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 animate__animated animate__fadeInUp">
            About Us
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-12">
            At Cricket Hub, we offer the finest cricket gear to players of all
            skill levels. Our mission is to deliver quality products that
            enhance performance and passion for the game.
          </p>
          <Link
            href="/pages/About"
            passHref
            className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700 transition duration-300"
          >
            Learn More About Us
          </Link>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
            What Our Customers Say
          </h2>
          <div className="flex flex-col sm:flex-row justify-center space-y-8 sm:space-y-0 sm:space-x-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full sm:w-1/2">
              <p className="text-lg sm:text-xl text-gray-600 mb-4">
                &quot;Cricket Hub&apos;s products have elevated my game to the
                next level! I couldn&apos;t be happier with the quality of their
                gear.&quot;
              </p>
              <p className="font-semibold text-gray-800">Virat Kohli</p>
              <p className="text-gray-500">Professional Cricketer</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full sm:w-1/2">
              <p className="text-lg sm:text-xl text-gray-600 mb-4">
                &quot;The best cricket bat I have ever used! Cricket Hub offers
                top-notch gear that is well worth the investment.&quot;
              </p>
              <p className="font-semibold text-gray-800">Steve Smith</p>
              <p className="text-gray-500">Cricket Enthusiast</p>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Stay Updated with Us
          </h3>
          <p className="text-lg sm:text-xl mb-8">
            Subscribe to our newsletter for the latest product updates, offers,
            and more.
          </p>
          <div className="flex justify-center items-center space-x-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-3 rounded-l-md text-gray-800"
            />
            <button className="bg-white text-blue-600 px-8 py-3 rounded-r-md hover:bg-gray-100 transition duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to take your game to the next level?
          </h3>
          <p className="text-lg sm:text-xl mb-8">
            Explore our collection and discover the perfect gear for you.
          </p>
          <Link
            href="/pages/Products"
            passHref
            className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg hover:bg-gray-100 transition duration-300"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
