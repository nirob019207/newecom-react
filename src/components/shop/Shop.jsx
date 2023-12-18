import React from 'react';
import ShopCard from './ShopCard';

const Shop = () => {
  const products = [
    {
      title: 'Sport Shoes',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore facere provident molestias ipsam sint voluptatum pariatur.',
      buttonText: 'Shop Now',
    },
    {
      title: 'Back Pack',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore facere provident molestias ipsam sint voluptatum pariatur.',
      buttonText: 'Shop Now',
    },
    {
      title: 'Games',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore facere provident molestias ipsam sint voluptatum pariatur.',
      buttonText: 'Shop Now',
    },
  ];

  return (
    <div className="container pb-16 flex flex-wrap justify-center gap-8">
      {products.map((product, index) => (
        <ShopCard key={index} {...product} className={index === 0 ? 'w-full' : 'w-1/3'} />
      ))}
    </div>
  );
};

export default Shop;
