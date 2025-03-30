import { Link } from "react-router-dom";

function Categories({ categories }) {
  return (
    <section className="p-6 md:p-10">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
        Browse by Category
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="p-4 border rounded-lg shadow hover:shadow-lg transition text-center"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-40 md:h-48 lg:h-56 object-cover rounded"
            />
            <h3 className="text-lg md:text-xl font-bold mt-3">{category.name}</h3>
            <Link
              to={`/category/${category.id}`}
              className="mt-2 text-pink-500 font-semibold hover:underline block"
            >
              View More →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;
