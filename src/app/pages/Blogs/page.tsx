"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";

// Define the shape of the blog data
interface BlogPost {
  _id: string;
  title: string;
  description: string;
  date: string;
  imageUrl?: string;
}

const builder = imageUrlBuilder(client);

function urlFor(source: string) {
  return builder.image(source);
}

const Blog = () => {
  const [blogData, setBlogData] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const data: BlogPost[] = await client.fetch(
        `*[_type == "blog"] | order(date desc) {
          _id,
          title,
          description,
          date,
          "imageUrl": image.asset->url
        }`
      );
      setBlogData(data);
    };

    fetchBlogs();
  }, []);

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Our Blog
        </h1>
        <p className="text-lg text-gray-600 text-center mb-12">
          Stay up-to-date with the latest news, tips, and insights from the
          world of cricket.
        </p>

        <div className="space-y-8">
          {blogData.map((post) => (
            <div
              key={post._id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              {post.imageUrl && (
                <img
                  src={urlFor(post.imageUrl).width(800).height(450).url()}
                  alt={post.title}
                  className="w-full object-cover rounded-md mb-4"
                />
              )}
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                <Link href={`/blog/${post._id}`}>{post.title}</Link>
              </h2>
              <p className="text-gray-600 mb-4">{post.description}</p>
              <p className="text-gray-500 text-sm">
                Posted on {new Date(post.date).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
