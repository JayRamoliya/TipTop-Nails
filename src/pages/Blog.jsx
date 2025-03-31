import React from "react";
import { Link } from "react-router-dom";
import blogPosts from "../blogdata"; 

const Blog = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Nail Art Blog</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white shadow-lg rounded-lg p-4">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover rounded-md" />
            <h2 className="text-xl font-semibold mt-4">{post.title}</h2>
            <p className="text-gray-600 mt-2">{post.description}</p>
            <Link to={`/blog/${post.id}`} className="text-pink-500 font-semibold mt-2 inline-block">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
