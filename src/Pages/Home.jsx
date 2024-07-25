import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../assets/product';
import ProductModal from './ProductModal';

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleSeeMoreClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  // Carousel images from products
  const carouselImages = products.map((product) => product.image);

  // Function to rotate images automatically
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 3000); // Rotate every 3 seconds

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1));
  };

  return (
    <div className="flex items-center bg-custom-blue min-h-screen" style={{ fontFamily: "'Muli', sans-serif" }}>
      <div className="container ml-auto mr-auto flex flex-wrap items-start">
        {/* Welcome Message */}
        <div className="w-full pl-5 lg:pl-2 mb-4 mt-4 text-center">
          <h1 className="text-3xl lg:text-4xl text-gray-700 font-extrabold">
            Welcome to Our Store
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Discover our best sellers and find your perfect match.
          </p>
        </div>

        {/* Image Carousel */}
        <div className="w-full relative mb-8">
          <div className="overflow-hidden rounded-lg shadow-lg mb-4 max-w-3xl mx-auto">
            <img src={carouselImages[currentImageIndex]} alt="Carousel" className="w-full h-auto" style={{ maxHeight: '600px' }} />
          </div>
          <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-4 py-2 max-w-3xl mx-auto">
            <button onClick={prevImage} className="text-white rounded-full bg-gray-900 p-2 focus:outline-none">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M14.354 19.354a2 2 0 0 1-2.828 0l-8-8a2 2 0 1 1 2.828-2.828L7 13.172V4a2 2 0 1 1 4 0v9.172l2.172-2.172a2 2 0 1 1 2.828 2.828l-8 8z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button onClick={nextImage} className="text-white rounded-full bg-gray-900 p-2 focus:outline-none">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M9.646 19.354a2 2 0 0 0 2.828 0l8-8a2 2 0 0 0-2.828-2.828L17 13.172V4a2 2 0 0 0-4 0v9.172l-2.172-2.172a2 2 0 1 0-2.828 2.828l8 8z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="w-full pl-5 lg:pl-2 mb-4 mt-4">
          <h1 className="text-3xl lg:text-4xl text-gray-700 font-extrabold">
            Best Sellers
          </h1>
        </div>
        {products.map((product) => (
          <div key={product.id} className="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
            <div className="rounded-lg p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300 bg-custom-darkBlue">
              <figure className="mb-2">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  style={{ width: '400px', height: '300px' }}
                  className="h-64 ml-auto mr-auto rounded-t-lg"
                />
              </figure>
              <div className="rounded-lg p-4 bg-custom-pink flex flex-col">
                <div>
                  <h5 className="text-black text-2xl font-bold leading-none">
                    {product.name}
                  </h5>
                  <span className="text-xs text-gray-400 leading-none">{product.description}</span>
                </div>
                <div className="flex items-center mt-4">
                  <button onClick={() => handleSeeMoreClick(product)} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-white hover:text-purple-900 hover:shadow-xl focus:outline-none transition duration-300">
                    See More
                    <svg className="w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        <ProductModal product={selectedProduct} onClose={handleCloseModal} />
      </div>
    </div>
  );
}
