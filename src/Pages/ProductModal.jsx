import React from 'react';

export default function ProductModal({ product, onClose }) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="bg-white rounded-lg p-8 shadow-lg relative z-10 max-w-md mx-auto">
        <button onClick={onClose} className="absolute top-0 right-0 mt-2 mr-2 text-gray-600 hover:text-gray-900">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
        <p className="text-gray-700 mb-4">{product.description2}</p>
        <div className="text-lg text-gray-900 font-semibold mb-4">Rs. {product.price}</div>
        <button onClick={onClose} className="px-4 py-2 bg-purple-700 text-white rounded-md hover:bg-purple-900">
          Close
        </button>
      </div>
    </div>
  );
}
