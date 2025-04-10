import React from 'react'
import salons from '../salons';

const Services = () => {
  return (
    <>
      <section className="relative bg-gradient-to-r from-pink-50 to-pink-100 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Find the Perfect Nail Salon Near You
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Discover top-rated nail salons, read authentic reviews, and book your next pampering session with ease.
            </p>

            <div className="bg-white p-4 rounded-lg shadow-lg">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-grow">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <div className="w-5 h-5 flex items-center justify-center text-gray-400">
                      <i className="ri-search-line"></i>
                    </div>
                  </div>
                  <input
                    type="text"
                    className="w-full pl-10 pr-4 py-3 border-none rounded text-sm"
                    placeholder="Search by salon name or location"
                  />
                </div>
                <button className="bg-primary text-white px-6 py-3 rounded-button hover:bg-opacity-90 transition-colors whitespace-nowrap">
                  Find Salons
                </button>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {["Location", "Services", "Price Range", "Rating"].map((filter, index) => (
                  <div
                    key={index}
                    className="bg-gray-100 px-3 py-1 rounded-full text-sm flex items-center"
                  >
                    <span>{filter}</span>
                    <div className="w-4 h-4 flex items-center justify-center ml-1">
                      <i className="ri-arrow-down-s-line"></i>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      <section class="py-12 bg-white">
        <div class="container mx-auto px-4">
          <div class="flex justify-between items-center mb-8">
            <h2 class="text-2xl font-bold text-gray-900">Featured Salons</h2>
            <a href="#" class="text-primary hover:underline flex items-center">
              View All Featured
              <div class="w-4 h-4 flex items-center justify-center ml-1">
                <i class="ri-arrow-right-line"></i>
              </div>
            </a>
          </div>

          <div className="flex overflow-x-auto pb-4 gap-6 hide-scrollbar">
            {salons.map((salon) => (
              <div key={salon.id} className="flex-shrink-0 w-72">
                <div className="bg-white rounded-lg shadow-md overflow-hidden salon-card transition-all duration-300">
                  <div className="relative">
                    <img src={salon.image} alt={salon.name} className="w-full h-48 object-cover object-top" />
                    {salon.featured && (
                      <div className="absolute top-3 left-3 bg-primary text-white text-xs px-2 py-1 rounded-full">
                        Featured
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-1">{salon.name}</h3>
                    <div className="flex items-center mb-2 text-sm text-gray-600">
                      <i className="ri-map-pin-line w-4 h-4 mr-1 flex items-center justify-center"></i>
                      <span>{salon.location}</span>
                    </div>
                    <div className="flex items-center mb-2 text-sm text-gray-600">
                      <i className="ri-phone-line w-4 h-4 mr-1 flex items-center justify-center"></i>
                      <a href={`tel:${salon.contact}`} className="hover:underline">{salon.contact}</a>
                    </div>
                    <div className="flex items-center mb-3">
                      <div className="flex text-yellow-400">
                        {Array.from({ length: 5 }, (_, i) => {
                          const starValue = i + 1;
                          return (
                            <div key={i} className="w-4 h-4 flex items-center justify-center">
                              <i className={`ri-${salon.rating >= starValue ? 'star-fill' : salon.rating >= starValue - 0.5 ? 'star-half-fill' : 'star-line'}`}></i>
                            </div>
                          );
                        })}
                      </div>
                      <span className="text-xs text-gray-500 ml-1">({salon.reviews})</span>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {salon.tags.map((tag, index) => (
                        <span key={index} className="bg-pink-50 text-primary text-xs px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a href={salon.link} target="_blank" rel="noopener noreferrer">
                      <button className="w-full bg-primary text-black py-2 rounded-button hover:bg-opacity-90 transition-colors whitespace-nowrap">
                        View Details
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  )
}

export default Services





