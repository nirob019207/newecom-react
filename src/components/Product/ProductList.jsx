import React from 'react';
import ProductCard from './ProductCard';
import image1 from '../assets/1.jpg'
import image2 from '../assets/2.jpg'
import image3 from '../assets/3.jpg'
import image4 from '../assets/4.jpg'
import image5 from '../assets/5.jpg'
import image6 from '../assets/6.jpg'


const ProductList = () => {
  const products = [
    { title: 'Chanel', price: 12, image: image1 },
    { title: 'Man Mix', price: 62, image: image2 },
    { title: 'Classic watch', price: 12, image: image3 },
    { title: 'Woman Mix', price: 12, image: image4 },
    { title: 'man Mix', price: 42, image: image5 },
    { title: 'Woman headphone', price: 72, image: image6 },
    { title: 'Man Mix', price: 62, image: image2 },
    { title: 'Classic watch', price: 12, image: image3 },
    { title: 'Woman Mix', price: 12, image: image4 },
    { title: 'Man Mix', price: 62, image: image2 },
    { title: 'Classic watch', price: 12, image: image3 },
    { title: 'Woman Mix', price: 12, image: image4 },
    { title: 'man Mix', price: 42, image: image5 },
    { title: 'Woman headphone', price: 72, image: image6 },
    { title: 'Chanel', price: 12, image: image1 },
    { title: 'Man Mix', price: 62, image: image2 },
  ];

  return (
    <div className="mt-16 " id='products'>
      <h3 className="text-gray-600 text-2xl font-medium">Products</h3>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
     
    </div>
  );
};

export default ProductList;
