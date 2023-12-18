import React, { useState } from 'react';
import ProductCard from './ProductCard';
import {products} from './index'
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../fetaures/order/orderSlice';

const ProductList = () => {
  const dispatch = useDispatch()
   const items = useSelector(state=>state.order.items)
   console.log(items);
  const handleAddToCart = (id) =>{  
    const order = products.find((item)=>item.id === id) 
    dispatch(addItem(order)) 
  }
  
  return (
    <div className="mt-16 " id='products'>
      <h3 className="text-gray-600 text-2xl font-medium">Products</h3>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
        {products.map((product, index) => (
          <ProductCard key={index} {...product}  handleAddToCart={handleAddToCart}/>
        ))}
      </div>
      <div>
      
      </div>
    </div>
  );
};

export default ProductList;
