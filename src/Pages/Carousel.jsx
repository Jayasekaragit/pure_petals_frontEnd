import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-lg shadow-lg mb-4">
        <img src={images[currentImageIndex]} alt="Carousel" className="w-full h-auto" />
      </div>
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-4 py-2">
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
  );
};

export default Carousel;
