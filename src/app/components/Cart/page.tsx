"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Product = {
  _id: string;
  title: string;
  price: string;
  description: string;
  imageUrl: string;
  quantity: number;
};

const Cart = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // State to manage loading

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
    setLoading(false); // Once the data is fetched, set loading to false
  }, []);

  const removeItem = (productId: string) => {
    const updatedCart = cart.filter((item) => item._id !== productId);

    localStorage.setItem("cart", JSON.stringify(updatedCart));

    setCart(updatedCart);
  };

  const updateQuantity = (
    productId: string,
    operation: "increment" | "decrement"
  ) => {
    const updatedCart = cart.map((product) => {
      if (product._id === productId) {
        const newQuantity =
          operation === "increment"
            ? product.quantity + 1
            : product.quantity > 1
              ? product.quantity - 1
              : 1;
        return { ...product, quantity: newQuantity };
      }
      return product;
    });

    localStorage.setItem("cart", JSON.stringify(updatedCart));

    setCart(updatedCart);
  };

  const calculateTotalPrice = (product: Product) => {
    const price = parseFloat(product.price);
    if (isNaN(price)) {
      return "Invalid Price";
    }
    return (price * product.quantity).toFixed(2);
  };

  return (
    <div className="py-12 bg-gray-100">
      <h1 className="text-4xl font-semibold text-center text-gray-800 mb-12">
        Your Shopping Cart
      </h1>

      {loading ? (
        // Loader/Loading state
        <div className="flex justify-center items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600"></div>
        </div>
      ) : cart.length === 0 ? (
        <p className="text-center text-xl text-gray-600">
          Your cart is currently empty. Start shopping now!
        </p>
      ) : (
        <div className="overflow-x-auto rounded-lg shadow-lg bg-white p-4">
          <div className="hidden sm:block">
            <table className="w-full table-auto border-separate border-spacing-4 text-sm sm:text-base lg:text-lg">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left font-medium text-gray-700 border-b-2">
                    Image
                  </th>
                  <th className="px-4 py-2 text-left font-medium text-gray-700 border-b-2">
                    Product
                  </th>
                  <th className="px-4 py-2 text-left font-medium text-gray-700 border-b-2">
                    Price (per item)
                  </th>
                  <th className="px-4 py-2 text-left font-medium text-gray-700 border-b-2">
                    Quantity
                  </th>
                  <th className="px-4 py-2 text-left font-medium text-gray-700 border-b-2">
                    Total Price
                  </th>
                  <th className="px-4 py-2 text-left font-medium text-gray-700 border-b-2">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {cart.map((product) => (
                  <tr
                    key={product._id}
                    className="transition-all hover:bg-gray-50"
                  >
                    <td className="px-4 py-2 text-center border-b">
                      <img
                        src={product.imageUrl}
                        alt={product.title}
                        className="w-24 h-24 object-cover rounded-md mx-auto"
                      />
                    </td>
                    <td className="px-4 py-2 border-b">{product.title}</td>
                    <td className="px-4 py-2 border-b text-gray-800">
                      ${product.price}
                    </td>
                    <td className="px-4 py-2 border-b text-center">
                      <div className="flex items-center justify-center space-x-2">
                        <button
                          onClick={() =>
                            updateQuantity(product._id, "decrement")
                          }
                          className="bg-gray-300 text-black py-1 px-4 rounded-md hover:bg-gray-400 transition-all duration-300"
                        >
                          -
                        </button>
                        <span className="text-lg font-semibold">
                          {product.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(product._id, "increment")
                          }
                          className="bg-gray-300 text-black py-1 px-4 rounded-md hover:bg-gray-400 transition-all duration-300"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="px-4 py-2 border-b text-gray-800">
                      {calculateTotalPrice(product) === "Invalid Price"
                        ? "Invalid Price"
                        : `$${calculateTotalPrice(product)}`}
                    </td>
                    <td className="px-4 py-2 border-b text-center">
                      <button
                        onClick={() => removeItem(product._id)}
                        className="bg-red-600 text-white py-2 px-6 rounded-lg hover:bg-red-500 transition-all duration-300 ease-in-out"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile View - Display Product Details Vertically */}
          <div className="sm:hidden grid grid-cols-1 gap-6">
            {cart.map((product) => (
              <div
                key={product._id}
                className="bg-white border border-gray-300 rounded-lg shadow-lg p-4"
              >
                <div className="flex justify-between items-center mb-4">
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <div className="ml-4 flex-grow">
                    <h3 className="text-xl font-semibold">{product.title}</h3>
                    <p className="text-gray-600">{product.description}</p>
                    <p className="text-lg font-semibold text-gray-800">
                      ${product.price}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => updateQuantity(product._id, "decrement")}
                      className="bg-gray-300 text-black py-1 px-4 rounded-md hover:bg-gray-400"
                    >
                      -
                    </button>
                    <span className="text-lg font-semibold">
                      {product.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(product._id, "increment")}
                      className="bg-gray-300 text-black py-1 px-4 rounded-md hover:bg-gray-400"
                    >
                      +
                    </button>
                  </div>
                  <p className="text-gray-800">
                    {calculateTotalPrice(product) === "Invalid Price"
                      ? "Invalid Price"
                      : `$${calculateTotalPrice(product)}`}
                  </p>
                </div>
                <div className="mt-4">
                  <button
                    onClick={() => removeItem(product._id)}
                    className="bg-red-600 text-white py-2 px-6 rounded-lg hover:bg-red-500 w-full transition-all duration-300 ease-in-out"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <button className="bg-blue-600 text-white py-3 px-8 rounded-lg text-xl hover:bg-blue-500 transition-all duration-300 ease-in-out">
              <Link href="/components/CheckOut">Proceed to Checkout</Link>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
