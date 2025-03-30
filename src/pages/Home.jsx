// import { Link } from "react-router-dom";

// function Home() {
//   // Sample product data (Replace with dynamic data if needed)
//   const products = [
//     { id: 1, name: "Elegant Red Nails", price: "$15", image: "/images/nail1.jpg" },
//     { id: 2, name: "Luxury Gold Nails", price: "$18", image: "/images/nail2.jpg" },
//     { id: 3, name: "Classic French Nails", price: "$12", image: "/images/nail3.jpg" },
//     { id: 4, name: "Glitter Glam Nails", price: "$20", image: "/images/nail4.jpg" },
//   ];

//   return (
//     <main className="text-center">
//       {/* Banner Section */}
//       <section className="relative w-full h-[400px]">
//         <img
//           src="/images/banner.jpg" 
//           alt="Nail Design Banner"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white">
//           <h2 className="text-5xl font-bold">Perfect Nails for Every Occasion</h2>
//           <p className="mt-2 text-lg">We bring perfection to your nails</p>
//           <Link to="/services" className="mt-4 bg-pink-500 text-white px-6 py-2 rounded">
//             Explore Services →
//           </Link>
//         </div>
//       </section>

//       {/* Product Section */}
//       <section className="p-10">
//         <h2 className="text-3xl font-bold mb-6">Shop Our Best Nail Designs</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {products.map((product) => (
//             <div key={product.id} className="p-4 border rounded-lg shadow hover:shadow-lg transition">
//               <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded" />
//               <h3 className="text-xl font-bold mt-3">{product.name}</h3>
//               <p className="text-pink-600 font-semibold">{product.price}</p>
//               <button className="mt-2 bg-pink-500 text-white px-4 py-2 rounded">
//                 Buy Now
//               </button>
//             </div>
//           ))}
//         </div>
//       </section>
//     </main>
//   );
// }

// export default Home;



import { Link } from "react-router-dom";
import { useState } from "react";

function Home() {
  // Sample product data
  const products = [
    { id: 1, name: "Elegant Red Nails", category: "1", price: "$3.5", image: "/nails/Elegant Red Nails.jpg", link: "https://amzn.to/3DYkoi5" },
    { id: 2, name: "Luxury Gold Nails", category: "2", price: "$3.1", image: "/nails/Luxury Gold Nails.jpg", link: "https://amzn.to/4iNEKdd" },
    { id: 3, name: "Classic French Nails", category: "3", price: "$4", image: "/nails/Classic French Nails.jpg", link: "https://amzn.to/4hMuvnT" },
    { id: 4, name: "Glitter Glam Nails", category: "3", price: "$2.9", image: "/nails/Glitter Glam Nails.jpg", link: "https://amzn.to/3QVXXgn" },
  ];

  // Sample categories
  const categories = [
    { id: 1, name: "Acrylic Nails", image: "/type/Acrylic Nails.jpg" },
    { id: 2, name: "Gel Nails", image: "/type/Gel Nails.jpg" },
    { id: 3, name: "French Nails", image: "/type/French Nails.jpg" },
    { id: 4, name: "Ombre Nails", image: "/type/Ombre Nails.jpg" },
  ];

  // Special Offers
  const offers = [
    { id: 1, name: "Buy 1 Get 1 Free", description: "On all acrylic nails", image: "/type/French Nails.jpg" },
    { id: 2, name: "20% Off", description: "On gel nail extensions", image: "/type/Ombre Nails.jpg" },
  ];

  return (
    <main className="text-center">
      {/* Banner Section */}
      <section className="relative w-full h-[400px]">
        <img
          src="/banner.png"
          alt="Nail Design Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white animate-fadeIn">
          <h2 className="text-5xl font-bold">Perfect Nails for Every Occasion</h2>
          <p className="mt-2 text-lg">We bring perfection to your nails</p>
          <Link to="/store" className="mt-4 bg-pink-500 text-white px-6 py-2 rounded hover:bg-pink-600 transition">
            Explore Shop →
          </Link>
        </div>
      </section>

      {/* Category Section */}
      <section className="p-10">
        <h2 className="text-3xl font-bold mb-6">Browse by Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div key={category.id} className="p-4 border rounded-lg shadow hover:shadow-lg transition">
              <img src={category.image} alt={category.name} className="w-full h-50 object-cover rounded" />
              <h3 className="text-xl font-bold mt-3">{category.name}</h3>
              <Link to={`/category/${category.id}`} className="mt-2 text-pink-500 font-semibold hover:underline">
                View More →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Product Section */}
      <section className="p-10">
        <h2 className="text-3xl font-bold mb-6">Shop Our Best Nail Designs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="p-4 border rounded-lg shadow hover:shadow-lg transition">
              <img src={product.image} alt={product.name} className="w-full h-60 object-cover rounded" />
              <h3 className="text-xl font-bold mt-3">{product.name}</h3>
              <p className="text-pink-600 font-semibold">{product.price}</p>
              <button className="mt-2 bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="bg-gray-100 py-10">
        <h2 className="text-3xl font-bold mb-6">Special Offers & Discounts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-6">
          {offers.map((offer) => (
            <div key={offer.id} className="bg-white p-4 rounded-lg shadow-md text-center">
              <img src={offer.image} alt={offer.name} className="w-full h-40 object-cover rounded mb-4" />
              <h3 className="text-xl font-bold">{offer.name}</h3>
              <p className="text-gray-700 mt-2">{offer.description}</p>
              <button className="mt-4 bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">
                Grab Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="bg-gray-100 py-10">
        <h2 className="text-3xl font-bold mb-6">What Our Customers Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <p className="text-gray-700 italic">"Absolutely love my nails! The best quality ever!"</p>
            <p className="mt-2 font-semibold text-pink-600">- Emma W.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <p className="text-gray-700 italic">"Beautiful designs, and they last so long!"</p>
            <p className="mt-2 font-semibold text-pink-600">- Sophia M.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <p className="text-gray-700 italic">"Great service and stunning nails!"</p>
            <p className="mt-2 font-semibold text-pink-600">- Olivia R.</p>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="p-10 bg-pink-100 text-center">
        <h2 className="text-3xl font-bold mb-4">Subscribe for Exclusive Offers</h2>
        <p className="text-gray-700">Be the first to know about new arrivals and special discounts.</p>
        <div className="mt-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 border rounded-lg focus:outline-none w-64"
          />
          <button className="ml-2 bg-pink-500 text-white px-6 py-2 rounded hover:bg-pink-600">
            Subscribe
          </button>
        </div>
      </section>
    </main>
  );
}

export default Home;
