"use client";
import React, { useState } from "react";
import Link from "next/link";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSuccess(true);
      setFormData({ username: "", email: "", password: "" });
      setIsSubmitting(false);
    }, 2000);
  };

  const closeModal = () => {
    setIsSuccess(false);
  };

  return (
    <div className="relative min-h-screen bg-gray-100">
      <div className="flex items-center justify-center min-h-screen relative z-10">
        <div className="bg-white p-8 rounded-xl shadow-xl max-w-md w-full space-y-6 animate__animated animate__fadeIn animate__delay-1s">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-green-600 mb-4">
              Join the Cricket Hub
            </h1>
            <p className="text-lg text-gray-600">
              Create your account and be part of the action!
            </p>
          </div>

          {error && (
            <div className="text-red-600 text-center mb-4">{error}</div>
          )}

          {isSuccess && (
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-20">
              <div className="bg-white p-6 rounded-md shadow-md text-center">
                <h2 className="text-xl text-green-600">
                  User Registered Successfully!
                </h2>
                <button
                  onClick={closeModal}
                  className="mt-4 p-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                >
                  Close
                </button>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="username"
                className="block text-gray-700 text-sm font-medium"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-medium"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-medium"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            <button
              type="submit"
              className={`w-full p-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300 ease-in-out ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Signing Up..." : "Sign Up"}
            </button>
          </form>

          <div className="text-center">
            <p className="text-sm text-gray-500">
              Already have an account?{" "}
              <Link
                href="/components/Login"
                className="text-green-600 hover:underline"
              >
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
