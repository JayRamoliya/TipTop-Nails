function SubscriptionSection() {
    return (
      <section className="p-6 md:p-10 bg-pink-100 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Subscribe for Exclusive Offers
        </h2>
        <p className="text-gray-700">
          Be the first to know about new arrivals and special discounts.
        </p>
  
        {/* Input & Button */}
        <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 border rounded-lg focus:outline-none w-full sm:w-64"
          />
          <button className="bg-pink-500 text-white px-6 py-2 rounded hover:bg-pink-600 transition">
            Subscribe
          </button>
        </div>
      </section>
    );
  }
  
  export default SubscriptionSection;
  