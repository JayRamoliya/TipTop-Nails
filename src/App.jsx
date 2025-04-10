import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Store from "./pages/Store";
import Blog from "./pages/Blog";
import SingleBlog from "./pages/SingleBlog";
import Services from "./pages/Services";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/store" element={<Store />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<SingleBlog />} />
        <Route path="/category/:id" element={<Store />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
