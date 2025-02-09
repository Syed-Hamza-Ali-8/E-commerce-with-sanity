"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

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

      <div className="py-20 bg-white flex justify-center">
        <div className="max-w-7xl mt-20 w-full mx-auto px-6 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
            Pakistan Champions Trophy 2025 – The Jersey of Champions!
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Show your support with the official Pakistan Champions Trophy 2025
            jersey.
          </p>
          <div className="flex justify-center w-full">
            <Image
              src="/Home/Ct25_jersey.jpg"
              alt="Pakistan Champions Trophy 2025 Jersey"
              width={1200}
              height={800}
              className="w-full max-w-7xl sm:h-[500px] md:h-[600px] lg:h-auto bg-[#A7D129] rounded-lg shadow-lg transition duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>

      <div className="py-20 mt-10 sm:mt-10 md:mt-16 lg:mt-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
            Featured Products
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Discover the latest in premium cricket equipment.
          </p>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            navigation
            pagination={{ clickable: true }}
          >
            {[
              "Cricket Bats",
              "Cricket Balls",
              "Protection",
              "Shoes",
              "Clothing",
            ].map((product, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105">
                  <Image
                    src={`/HomeSection/${product}.webp`}
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
                    href={`/${product}`}
                    passHref
                    className="text-blue-600 hover:text-blue-700 transition duration-300"
                  >
                    View Product
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div
        className="relative h-96 mt-24 bg-cover bg-center"
        style={{
          backgroundImage: "url('/HomeSection/KIT.webp')",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="py-20 mt-32 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-10">
            What Players Are Saying
          </h2>
          <Swiper
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            pagination={{ clickable: true }}
          >
            {[
              {
                name: "Kane Williamson",
                feedback:
                  "The best cricket bat I’ve ever used! Highly recommend to serious players.",
                image: "/HomeSection/Kane_Williamson.jpg",
              },
              {
                name: "Pat Cummins",
                feedback:
                  "Fantastic cricket balls! They perform extremely well in all conditions.",
                image: "/HomeSection/Pat_Cummins.jpeg",
              },
              {
                name: "Steve Smith",
                feedback:
                  "The protection gear is top-notch. Never felt more confident on the field!",
                image: "/HomeSection/Steve_Smith.jpg",
              },
            ].map((testimonial, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="w-48 h-48 mx-auto mb-4 flex items-center justify-center">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={200}
                      height={200}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-lg text-gray-600 mb-4">
                    {testimonial.feedback}
                  </p>
                  <h4 className="font-semibold text-gray-800">
                    {testimonial.name}
                  </h4>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="py-16 mb-16 bg-blue-600 text-center text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Stay Updated</h2>
          <p className="text-lg mb-8">
            Subscribe to our newsletter for the latest products, deals, and
            more!
          </p>
          <div className="flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-lg focus:outline-none text-gray-800 placeholder-gray-500 bg-white"
            />
            <button className="bg-blue-700 px-6 py-2 rounded-r-lg text-white hover:bg-blue-800 transition duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
