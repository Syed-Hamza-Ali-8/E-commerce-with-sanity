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
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
            Featured Products
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Discover the latest in premium cricket equipment.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <Image
                src="/HomeSection/gray-nicolls-bat.jpeg"
                alt="Product 1"
                width={500}
                height={350}
                className="w-full h-48 sm:h-56 object-cover rounded-md mb-4 transition duration-300 filter grayscale hover:grayscale-0"
              />
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
                Cricket Bat
              </h3>
              <p className="text-gray-600 mb-4">
                Premium quality cricket bat designed for maximum performance.
              </p>
              <Link
                href="/products/bat"
                passHref
                className="text-blue-600 hover:text-blue-700 transition duration-300"
              >
                View Product
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <Image
                src="/HomeSection/kookaburra-ball.jpeg"
                alt="Product 2"
                width={500}
                height={350}
                className="w-full h-48 sm:h-56 object-cover rounded-md mb-4 transition duration-300 filter grayscale hover:grayscale-0"
              />
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
                Cricket Ball
              </h3>
              <p className="text-gray-600 mb-4">
                Durable and high-quality cricket ball, perfect for all levels of
                play.
              </p>
              <Link
                href="/products/ball"
                passHref
                className="text-blue-600 hover:text-blue-700 transition duration-300"
              >
                View Product
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <Image
                src="/HomeSection/protection.jpeg"
                alt="Product 3"
                width={500}
                height={350}
                className="w-full h-48 sm:h-56 object-cover rounded-md mb-4 transition duration-300 filter grayscale hover:grayscale-0"
              />
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
                Protective Gear
              </h3>
              <p className="text-gray-600 mb-4">
                Comfortable and reliable protective gear for all cricket
                players.
              </p>
              <Link
                href="/products/protection"
                passHref
                className="text-blue-600 hover:text-blue-700 transition duration-300"
              >
                View Product
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <Image
                src="/HomeSection/shoes.jpeg"
                alt="Product 4"
                width={500}
                height={350}
                className="w-full h-48 sm:h-56 object-cover rounded-md mb-4 transition duration-300 filter grayscale hover:grayscale-0"
              />
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
                Shoes
              </h3>
              <p className="text-gray-600 mb-4">
                Cricket shoes with superior grip and comfort for all players.
              </p>
              <Link
                href="/products/protection"
                passHref
                className="text-blue-600 hover:text-blue-700 transition duration-300"
              >
                View Product
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <Image
                src="/HomeSection/clothing.jpeg"
                alt="Product 5"
                width={500}
                height={350}
                className="w-full h-48 sm:h-56 object-cover rounded-md mb-4 transition duration-300 filter grayscale hover:grayscale-0"
              />
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
                Clothing
              </h3>
              <p className="text-gray-600 mb-4">
                Comfortable, breathable cricket clothing for peak performance.
              </p>
              <Link
                href="/products/protection"
                passHref
                className="text-blue-600 hover:text-blue-700 transition duration-300"
              >
                View Product
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
            About Us
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-12">
            At Cricket Hub, we offer the finest cricket gear to players of all
            skill levels. Our mission is to deliver quality products that
            enhance performance and passion for the game.
          </p>
          <p className="text-lg sm:text-xl text-gray-600 mb-12">
            With a dedicated team of professionals, we focus on providing
            cutting-edge technology and expert advice to ensure you perform at
            your best. We&apos;re committed to bringing you the latest cricket
            innovations for your game.
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

      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
            What Our Customers Say
          </h2>
          <div className="space-y-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <p className="text-lg sm:text-xl text-gray-600 mb-4">
                &quot;Cricket Hub&apos;s products have elevated my game to the
                next level! I couldn&apos;t be happier with the quality of their
                gear.&quot;
              </p>
              <p className="font-semibold text-gray-800">Virat Kohli</p>
              <p className="text-gray-500">Professional Cricketer</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
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

      <div className="bg-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Stay Updated with Us
          </h3>
          <p className="text-lg sm:text-xl mb-8">
            Subscribe to our newsletter for the latest product updates, offers,
            and more.
          </p>
          <div className="flex justify-center">
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
