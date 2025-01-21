"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

type Product = {
  _id: string;
  title: string;
  price: string;
  quantity: number;
  imageUrl: string;
};

const Checkout = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const [shippingAddress, setShippingAddress] = useState({
    name: "",
    address: "",
    city: "",
    zip: "",
  });
  const [loading, setLoading] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  const calculateTotalPrice = () => {
    return cart
      .reduce(
        (total, product) =>
          total + parseFloat(product.price) * product.quantity,
        0
      )
      .toFixed(2);
  };

  const handlePlaceOrder = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOrderConfirmed(true);
      localStorage.removeItem("cart"); 
    }, 2000);
  };

  return (
    <div className="py-12 bg-gray-100">
      <h1 className="text-4xl font-semibold text-center text-gray-800 mb-12">
        Checkout
      </h1>

      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Order Summary
        </h2>

        <div className="space-y-6">
          {cart.map((product) => (
            <div
              key={product._id}
              className="flex justify-between items-center border-b py-4"
            >
              <div className="flex items-center">
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="w-20 h-20 object-cover rounded-md"
                />
                <div className="ml-4">
                  <p className="text-lg font-semibold text-gray-800">
                    {product.title}
                  </p>
                  <p className="text-gray-600">Quantity: {product.quantity}</p>
                </div>
              </div>
              <div className="text-gray-800">
                ${(parseFloat(product.price) * product.quantity).toFixed(2)}
              </div>
            </div>
          ))}

          <div className="flex justify-between font-semibold text-lg text-gray-800">
            <p>Total Price:</p>
            <p>${calculateTotalPrice()}</p>
          </div>
        </div>
      </div>

      <div className="mt-12 max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Shipping Information
        </h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handlePlaceOrder();
          }}
          className="space-y-4"
        >
          <div>
            <label htmlFor="name" className="block text-gray-700 font-semibold">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={shippingAddress.name}
              onChange={(e) =>
                setShippingAddress({ ...shippingAddress, name: e.target.value })
              }
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div>
            <label
              htmlFor="address"
              className="block text-gray-700 font-semibold"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              value={shippingAddress.address}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  address: e.target.value,
                })
              }
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="city"
                className="block text-gray-700 font-semibold"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                value={shippingAddress.city}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    city: e.target.value,
                  })
                }
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <label
                htmlFor="zip"
                className="block text-gray-700 font-semibold"
              >
                Zip Code
              </label>
              <input
                type="text"
                id="zip"
                value={shippingAddress.zip}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    zip: e.target.value,
                  })
                }
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white py-3 px-8 rounded-lg text-xl hover:bg-blue-500 hover:scale-105 transform transition-all duration-300 ease-in-out"
              disabled={loading}
            >
              {loading ? "Placing Order..." : "Place Order"}
            </button>
          </div>
        </form>
      </div>

      {orderConfirmed && (
        <div className="mt-12 max-w-4xl mx-auto bg-green-100 p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Thank you for your order!
          </h2>
          <p className="text-lg text-gray-800 mb-4">
            Your order has been successfully placed and is on its way!
          </p>
          <Link href="/">
            <button className="bg-blue-600 text-white py-3 px-8 rounded-lg text-xl hover:bg-blue-500 transition-all duration-300 ease-in-out">
              Continue Shopping
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Checkout;
