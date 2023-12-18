import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

const ShopCard = ({ title, description, buttonText, className }) => (
  <div className={`h-64 md:mx-4 rounded-md overflow-hidden bg-cover bg-center ${className}`}>
    <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
      <div className="px-10 max-w-xl">
        <h2 className="text-2xl text-white font-semibold">{title}</h2>
        <p className="mt-2 text-gray-400">{description}</p>
        <button className="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
          <span>{buttonText}</span>
          <FiArrowRight className="h-5 w-5 mx-2" />
        </button>
      </div>
    </div>
  </div>
);

export default ShopCard;
