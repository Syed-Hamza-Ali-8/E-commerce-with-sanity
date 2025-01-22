"use client";
import { client } from "@/sanity/lib/client";
import React, { useEffect, useState } from "react";

type Product = {
  _id: string;
  title: string;
  price: number;
  description: string;
  imageUrl: string;
};

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [notification, setNotification] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "product"]{
          _id, 
          title, 
          price, 
          description, 
          "imageUrl": image.asset->url
      }`
      )
      .then((data) => {
        const sortedProducts = data.sort((a: Product, b: Product) =>
          a.title.localeCompare(b.title)
        );
        setProducts(sortedProducts);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });

    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  const addToCart = (product: Product) => {
    const updatedCart = [...cart, product];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);

    setNotification(`${product.title} has been added to your cart!`);
    setTimeout(() => setNotification(null), 3000);
  };

  const removeFromCart = (productId: string) => {
    const updatedCart = cart.filter((item) => item._id !== productId);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  const isProductInCart = (productId: string) => {
    return cart.some((item) => item._id === productId);
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="py-12 bg-gray-50">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Our Products
      </h1>

      {notification && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50">
          {notification}
        </div>
      )}

      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Search for products (e.g., bat, ball, shoes)..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md px-4 py-3 border border-gray-300 rounded-full shadow focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-16">
          <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product._id}
                className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col"
              >
                <div className="relative overflow-hidden group">
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="w-full h-72 object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                </div>
                <div className="flex flex-col justify-between flex-grow p-4">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">
                      {product.title}
                    </h2>
                    <p className="text-gray-600 text-sm mb-4">
                      {product.description}
                    </p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-gray-900 mb-4">
                      ${product.price}
                    </p>
                    <button
                      onClick={() =>
                        isProductInCart(product._id)
                          ? removeFromCart(product._id)
                          : addToCart(product)
                      }
                      className={`w-full py-2 text-sm font-medium rounded transition-all duration-300 ${
                        isProductInCart(product._id)
                          ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                          : "bg-blue-600 text-white hover:bg-blue-700"
                      }`}
                      disabled={isProductInCart(product._id)}
                    >
                      {isProductInCart(product._id)
                        ? "Added to Cart"
                        : "Add to Cart"}
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-4 text-center">
              <p className="text-red-600 text-xl font-semibold mb-2">
                <span role="img" aria-label="cricket bat and ball">
                  🏏
                </span>{" "}
                Oops! No matches found for &quot;{searchTerm}&quot;!
              </p>
              <p className="text-gray-600">
                Try searching for something else like &quot;bat,&quot;
                &quot;ball,&quot; or &quot;pads.&quot;
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Products;
