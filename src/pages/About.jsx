function About() {
    return (
      <section className="p-10 max-w-4xl mx-auto text-center">
        {/* Heading Section */}
        <h2 className="text-4xl font-bold text-pink-600 mb-6">About Us</h2>
  
        {/* Introduction */}
        <p className="text-lg text-gray-700 leading-relaxed">
          Welcome to <span className="font-semibold">Nail Design Studio</span>, your ultimate destination for 
          elegance and beauty. We specialize in premium nail care, professional 
          beauty treatments, and expert education for aspiring nail artists.
        </p>
  
        {/* Image */}
        <div className="mt-6">
          <img 
            src="/images/salon.jpg" 
            alt="Nail Design Studio"
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
        </div>
  
        {/* Our Story */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold mb-3">Our Story</h3>
          <p className="text-gray-700 leading-relaxed">
            Founded with a passion for beauty, we have been dedicated to providing 
            high-quality nail services and beauty training for over a decade. Our 
            team of expert nail technicians ensures that every client leaves with 
            stunning nails and a memorable experience.
          </p>
        </div>
  
        {/* Why Choose Us */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold mb-3">Why Choose Us?</h3>
          <ul className="text-gray-700 leading-relaxed list-disc list-inside">
            <li>Over 10 years of experience in nail design</li>
            <li>Professional and certified nail artists</li>
            <li>High-quality, long-lasting nail products</li>
            <li>Personalized services tailored to your style</li>
            <li>Education and training for aspiring nail professionals</li>
          </ul>
        </div>
  
        {/* Call to Action */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold mb-3">Visit Us Today!</h3>
          <p className="text-gray-700 leading-relaxed">
            Whether you're looking for a fresh manicure, nail extensions, or expert training, 
            we are here to bring your nail dreams to life.
          </p>
          <button className="mt-4 bg-pink-500 text-white px-6 py-2 rounded-lg shadow-md">
            Book an Appointment
          </button>
        </div>
      </section>
    );
  }
  
  export default About;
  