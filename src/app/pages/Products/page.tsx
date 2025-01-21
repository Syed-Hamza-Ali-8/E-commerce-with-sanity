"use client";
import { client } from "@/sanity/lib/client";
import React, { useEffect, useState } from "react";

type Product = {
  _id: string;
  title: string;
  price: string;
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
    setTimeout(() => setNotification(null), 5000);
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
    <div className="py-8">
      <h1 className="text-3xl font-semibold text-center mb-8">Our Products</h1>

      {notification && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50">
          {notification}
        </div>
      )}

      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search for products (e.g., bat, ball, shoes)..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      {/* Loader */}
      {loading ? (
        <div className="flex justify-center items-center py-8">
          <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product._id}
                className="bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden flex flex-col group relative"
              >
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="w-full h-72 object-contain"
                />
                <div className="flex flex-col justify-between p-4 h-full">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {product.title}
                  </h2>
                  <p className="text-gray-600 mb-4 flex-grow">
                    {product.description}
                  </p>
                  <p className="text-lg font-semibold text-gray-800 mb-4">
                    ${product.price}
                  </p>
                </div>

                <button
                  onClick={() => {
                    if (isProductInCart(product._id)) {
                      removeFromCart(product._id);
                    } else {
                      addToCart(product);
                    }
                  }}
                  className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 py-2 px-6 rounded transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 group-hover:translate-y-0 bg-slate-600 text-white hover:bg-transparent hover:text-slate-600 hover:border hover:border-slate-600 shadow-lg ${
                    isProductInCart(product._id)
                      ? "bg-transparent text-slate-600 border-slate-600 cursor-not-allowed"
                      : ""
                  }`}
                  disabled={isProductInCart(product._id)}
                >
                  {isProductInCart(product._id)
                    ? "Added to Cart"
                    : "Add to Cart"}
                </button>
              </div>
            ))
          ) : (
            <div className="col-span-4 text-center">
              <p className="text-red-600 text-xl font-semibold mb-2">
                <span role="img" aria-label="cricket bat and ball">
                  🏏
                </span>{" "}
                Oops! No matches found for &quot;
                {searchTerm.replace(/'/g, "&apos;")}&quot;!
              </p>
              <p className="text-gray-600">
                <span role="img" aria-label="stumps">
                  🛑
                </span>{" "}
                Looks like you have hit the stumps! Try searching for something
                else like &quot;bat,&quot; &quot;ball,&quot; or
                &quot;pads.&quot;
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Products;
