// import { Link } from "react-router-dom";

// function Header() {
//   return (
//     <header className="flex justify-between items-center p-6 bg-white shadow-md">
//       <h1 className="text-2xl font-bold">NailDesign</h1>
//       <nav>
//         <ul className="flex space-x-6">
//           <li><Link to="/" className="hover:text-pink-500">Home</Link></li>
//           <li><Link to="/store" className="hover:text-pink-500">Store</Link></li>
//           <li><Link to="/about" className="hover:text-pink-500">About Us</Link></li>
//         </ul>
//       </nav>
//     </header>
//   );
// }

// export default Header;

import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center p-4 md:p-6 bg-white shadow-md relative">
      <h1 className="text-2xl font-bold">Tip Top Nails</h1>

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Navigation */}
      <nav
        className={`z-50 absolute top-16 left-0 w-full bg-white shadow-md md:shadow-none md:static md:w-auto md:bg-transparent transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        } md:flex`}
      >
        <ul className="flex flex-col md:flex-row md:space-x-6">
          <li>
            <Link
              to="/"
              className="block py-2 px-4 text-center hover:text-pink-500"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/store"
              className="block py-2 px-4 text-center hover:text-pink-500"
              onClick={() => setIsOpen(false)}
            >
              Store
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className="block py-2 px-4 text-center hover:text-pink-500"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="block py-2 px-4 text-center hover:text-pink-500"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
