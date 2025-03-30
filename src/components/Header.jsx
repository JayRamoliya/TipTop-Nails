import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex justify-between items-center p-6 bg-white shadow-md">
      <h1 className="text-2xl font-bold">NailDesign</h1>
      <nav>
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:text-pink-500">Home</Link></li>
          <li><Link to="/store" className="hover:text-pink-500">Store</Link></li>
          <li><Link to="/about" className="hover:text-pink-500">About Us</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
