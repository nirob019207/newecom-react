import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const ProductCard = ({ title, price, image }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-full max-w-sm mx-auto rounded-md overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`relative ${isHovered ? 'shadow-md' : ''}`}>
        <img className="w-full h-56 object-cover" src={image} alt={title} />
        {isHovered && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <button className="text-white focus:outline-none">
              View Details
            </button>
          </div>
        )}
        <button className="absolute top-2 right-2 p-2 rounded-full bg-blue-600 text-white hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
          <FaShoppingCart className="h-5 w-5" />
        </button>
      </div>
      <div className="px-5 py-5 flex justify-between">
        <div>
          <h3 className="text-gray-700 uppercase">{title}</h3>
          <span className="text-gray-500 mt-2">${price}</span>
        </div>
        <div className='py-3'>
          <button className='bg-blue-600 text-white py-1 rounded px-2'>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
