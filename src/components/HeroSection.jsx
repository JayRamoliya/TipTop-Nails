import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
      {/* Background Image */}
      <img
        src="/banner.png"
        alt="Nail Design Banner"
        className="w-full h-full object-cover"
      />
      
      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center px-4">
        <h2 className="text-3xl md:text-5xl font-bold">
          Perfect Nails for Every Occasion
        </h2>
        <p className="mt-2 text-base md:text-lg">
          We bring perfection to your nails
        </p>
        <Link
          to="/store"
          className="mt-4 bg-pink-500 text-white px-6 py-2 rounded hover:bg-pink-600 transition"
        >
          Explore Shop →
        </Link>
      </div>
    </section>
  );
}

export default HeroSection;
