"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Product = {
  _id: string;
  title: string;
  price: number;
  description: string;
  imageUrl: string;
  quantity: number;
};

const Cart = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");

    const sanitizedCart = storedCart.map((product: Partial<Product>) => ({
      _id: product._id || "",
      title: product.title || "Unknown Product",
      price: isNaN(parseFloat(String(product.price)))
        ? 0
        : parseFloat(String(product.price)),
      description: product.description || "",
      imageUrl: product.imageUrl || "",
      quantity: Math.max(product.quantity || 1, 1),
    }));

    setCart(sanitizedCart);
    setLoading(false);
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
            : Math.max(product.quantity - 1, 1);
        return { ...product, quantity: newQuantity };
      }
      return product;
    });

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  const calculateTotalPrice = (product: Product) => {
    const price = isNaN(product.price) ? 0 : product.price;
    return price * product.quantity;
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cart.reduce(
    (sum, item) => sum + calculateTotalPrice(item),
    0
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 flex justify-center items-center">
      <div className="max-w-6xl w-full px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center text-gray-800 mb-8">
          Your Shopping Cart
        </h1>

        {loading ? (
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600"></div>
          </div>
        ) : cart.length === 0 ? (
          <p className="text-center text-xl sm:text-2xl text-gray-600">
            Your cart is currently empty. Start shopping now!
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {cart.map((product) => (
              <div
                key={product._id}
                className="flex flex-col sm:flex-row items-center bg-white shadow-xl rounded-lg p-6 hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="w-32 h-32 object-cover rounded-lg mb-4 sm:mb-0 sm:mr-6"
                />
                <div className="flex-grow">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 text-sm my-2">
                    {product.description}
                  </p>
                  <p className="text-lg font-bold text-blue-600">
                    ${product.price.toFixed(2)}
                  </p>

                  <div className="flex justify-center items-center mt-4 space-x-4 mb-4">
                    <button
                      onClick={() => updateQuantity(product._id, "decrement")}
                      className="w-8 h-8 flex items-center justify-center bg-gray-200 text-gray-800 font-bold rounded hover:bg-gray-300 transition"
                    >
                      -
                    </button>
                    <span className="text-lg font-semibold">
                      {product.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(product._id, "increment")}
                      className="w-8 h-8 flex items-center justify-center bg-gray-200 text-gray-800 font-bold rounded hover:bg-gray-300 transition"
                    >
                      +
                    </button>
                  </div>

                  <div className="flex justify-center">
                    <p className="text-lg font-bold text-gray-800">
                      Total: ${calculateTotalPrice(product).toFixed(2)}
                    </p>
                  </div>
                </div>
                <div className="ml-6 text-right">
                  <button
                    onClick={() => removeItem(product._id)}
                    className="mt-4 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-400 transition"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-12 sm:mt-8 text-center flex flex-col items-center">
          <p className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            Total Items: <span className="text-blue-600">{totalItems}</span>
          </p>
          <p className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            Cart Total:{" "}
            <span className="text-blue-600">${cartTotal.toFixed(2)}</span>
          </p>
          <button className="bg-blue-600 text-white py-3 px-12 rounded-full text-lg font-medium shadow-lg hover:bg-blue-500 transition">
            <Link href="/components/CheckOut">Proceed to Checkout</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
