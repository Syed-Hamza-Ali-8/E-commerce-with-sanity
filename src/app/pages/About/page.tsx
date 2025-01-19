import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          About Cricket Hub
        </h1>
        <p className="text-lg text-gray-600 text-center mb-10">
          Your ultimate destination for premium cricket gear and accessories.
        </p>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Story</h2>
          <p className="text-gray-600 mb-6">
            At Cricket Hub, we are passionate about cricket. Founded with a
            mission to provide cricket enthusiasts with high-quality gear and
            accessories, we strive to be your go-to store for everything
            cricket. Whether you&apos;re a seasoned professional or just
            starting out, our products are designed to enhance your game and
            fuel your love for cricket.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-6">
            We aim to empower cricketers at all levels by offering a curated
            selection of cricket bats, balls, protective gear, shoes, and
            accessories. We are committed to delivering exceptional quality and
            value to help you achieve your best performance on the field.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Why Choose Us
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Wide range of premium cricket products</li>
            <li>Affordable pricing without compromising on quality</li>
            <li>Fast and reliable shipping</li>
            <li>Customer-focused support team</li>
          </ul>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Meet the Team
          </h3>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <div className="flex flex-col items-center mb-8 md:mb-0">
              <img
                src="/AboutSection/pic1.jpeg"
                alt="Director"
                className="w-40 h-40 lg:w-48 lg:h-48 rounded-full object-cover mb-4"
              />
              <p className="text-lg text-gray-800 font-semibold">
                Syed Hamza Ali
              </p>
              <p className="text-gray-600">Founder & Director</p>
            </div>

            <div className="flex flex-col items-center mb-8 md:mb-0">
              <img
                src="/AboutSection/pic2.jpeg"
                alt="Team Member 1"
                className="w-40 h-40 lg:w-48 lg:h-48 rounded-full object-cover mb-4"
              />
              <p className="text-lg text-gray-800 font-semibold">Lorem ipsum</p>
              <p className="text-gray-600">Head of Operations</p>
            </div>

            <div className="flex flex-col items-center">
              <img
                src="/AboutSection/pic3.jpeg"
                alt="Team Member 2"
                className="w-40 h-40 lg:w-48 lg:h-48 rounded-full object-cover mb-4"
              />
              <p className="text-lg text-gray-800 font-semibold">Lorem ipsum</p>
              <p className="text-gray-600">Marketing Lead</p>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <h3 className="text-xl font-bold text-gray-800">
            Ready to take your cricket game to the next level?
          </h3>
          <p className="text-gray-600 mb-4">
            Explore our collection and discover your perfect gear.
          </p>
          <a
            href="/products"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
