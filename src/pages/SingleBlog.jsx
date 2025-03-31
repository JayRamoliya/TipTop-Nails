import React from "react";
import { useParams } from "react-router-dom";
import blogPosts from "../blogdata"; // Import blog data
import products from "../products";

const SingleBlog = () => {
    const { id } = useParams();
    const post = blogPosts.find((post) => post.id === parseInt(id));

    if (!post) {
        return <div className="text-center text-red-500">Blog post not found!</div>;
    }

    return (
        <div className="max-w-3xl mx-auto p-6">
            <img src={post.image} alt={post.title} className="w-full h-64 object-cover rounded-md" />
            <h1 className="text-3xl font-bold mt-6">{post.title}</h1>
            <p className="text-gray-600 mt-4">{post.description}</p>

            <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">Recommended Nail Products</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {products.map((product) => (
                        <div key={product.id} className="border p-4 rounded-lg shadow-md">
                            <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md" />
                            <p className="text-lg font-semibold mt-2">{product.name}</p>
                            <div className="flex justify-between items-center">
                                <p className="text-gray-500">{product.price}</p>
                                <a href={product.link} target="_blank" rel="noopener noreferrer" className="text-pink-500 font-semibold mt-2 inline-block">
                                    Buy Now
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SingleBlog;
