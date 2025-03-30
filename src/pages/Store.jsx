// function Store() {
//     // Sample data for nail products
//     const nailProducts = [
//       {
//         id: 1,
//         name: "French Manicure",
//         price: "$25",
//         image: "/images/french-manicure.jpg",
//       },
//       {
//         id: 2,
//         name: "Gel Nails",
//         price: "$30",
//         image: "/images/gel-nails.jpg",
//       },
//       {
//         id: 3,
//         name: "Acrylic Nails",
//         price: "$35",
//         image: "/images/acrylic-nails.jpg",
//       },
//       {
//         id: 4,
//         name: "Ombre Nails",
//         price: "$28",
//         image: "/images/ombre-nails.jpg",
//       },
//       {
//         id: 5,
//         name: "Glitter Nails",
//         price: "$32",
//         image: "/images/glitter-nails.jpg",
//       },
//     ];
  
//     return (
//       <section className="p-10 max-w-6xl mx-auto">
//         {/* Store Heading */}
//         <h2 className="text-4xl font-bold text-pink-600 text-center mb-6">Our Nail Collection</h2>
//         <p className="text-gray-700 text-center mb-10">Explore our wide range of beautiful nail styles, designed to perfection.</p>
  
//         {/* Nail Products Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {nailProducts.map((product) => (
//             <div key={product.id} className="bg-white p-6 rounded-lg shadow-md text-center">
//               <img 
//                 src={product.image} 
//                 alt={product.name} 
//                 className="w-full h-56 object-cover rounded-lg mb-4"
//               />
//               <h3 className="text-2xl font-semibold text-gray-800">{product.name}</h3>
//               <p className="text-lg text-gray-600 mt-2">{product.price}</p>
//               <button className="mt-4 bg-pink-500 text-white px-6 py-2 rounded-lg shadow-md">
//                 Buy Now
//               </button>
//             </div>
//           ))}
//         </div>
//       </section>
//     );
//   }
  
//   export default Store;







import products from "../products";

import { useParams } from "react-router-dom";

function Store() {
  const { id } = useParams(); // Get category ID from URL

  // If category ID is not found, show all products
  const filteredProducts = id ? products.filter((product) => product.category === id) : products;

  return (
    <main className="p-10 text-center">
      <h2 className="text-3xl font-bold mb-6">
        {id ? `Category ${id} - Shop Nails` : "All Nail Products"}
      </h2>

      {filteredProducts.length === 0 ? (
        <p className="text-gray-500">No products found in this category.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <a
              key={product.id}
              href={`${product.link}`} // Change to actual product page link
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="p-4 border rounded-lg shadow hover:shadow-lg transition">
                <img src={product.image} alt={product.name} className="w-full h-70 object-cover rounded" />
                <h3 className="text-xl font-bold mt-3">{product.name}</h3>
                <p className="text-pink-600 font-semibold">{product.price}</p>
                <button className="mt-2 bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">
                  Buy Now
                </button>
              </div>
            </a>
          ))}
        </div>
      )}
    </main>
  );
}

export default Store;







// import { useParams } from "react-router-dom";

// function Store() {
//   const { id } = useParams(); // Get category ID from URL

//   // Sample Products Data (Replace with API or Database Data)
//   const products = [
//     { id: 1, name: "Elegant Red Nails", category: "1", price: "$15", image: "/images/nail1.jpg" },
//     { id: 2, name: "Luxury Gold Nails", category: "2", price: "$18", image: "/images/nail2.jpg" },
//     { id: 3, name: "Classic French Nails", category: "3", price: "$12", image: "/images/nail3.jpg" },
//     { id: 4, name: "Glitter Glam Nails", category: "3", price: "$20", image: "/images/nail4.jpg" },
//     { id: 5, name: "Ombre Pink Nails", category: "4", price: "$22", image: "/images/nail5.jpg" },
//   ];

//   // Filter Products by Category
//   const filteredProducts = products.filter((product) => product.category === id);

//   return (
//     <main className="p-10 text-center">
//       <h2 className="text-3xl font-bold mb-6">Category {id} - Shop Nails</h2>

//       {filteredProducts.length === 0 ? (
//         <p className="text-gray-500">No products found in this category.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {filteredProducts.map((product) => (
//             <div key={product.id} className="p-4 border rounded-lg shadow hover:shadow-lg transition">
//               <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded" />
//               <h3 className="text-xl font-bold mt-3">{product.name}</h3>
//               <p className="text-pink-600 font-semibold">{product.price}</p>
//               <button className="mt-2 bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">
//                 Buy Now
//               </button>
//             </div>
//           ))}
//         </div>
//       )}
//     </main>
//   );
// }

// export default Store;
