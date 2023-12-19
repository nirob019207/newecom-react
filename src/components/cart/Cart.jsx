// Cart.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearItems, removeItem } from '../../fetaures/order/orderSlice';

const Cart = () => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.order.items);
    const isCartOpen = useSelector(state => state.order.isCartOpen);

    const handleClearCart = () => {
        dispatch(clearItems());
    };

    const handleRemoveItem = (id) => {
        dispatch(removeItem(id));
    };

    const calculateTotal = () => {
        return items.reduce((total, item) => total + item.price, 0);
    };

    return (
        <div className={`py-8 min-h-screen ${isCartOpen ? 'block' : 'hidden'}`}>
            <div className='bg-white shadow-xl p-4 flex justify-between flex-wrap px-16'>
                <div className='text-lg text-gray-700 flex gap-4'>
                    <input type="checkbox" name="exampleCheckbox" />
                    <span className=''>Select All ({items.length} items)</span>
                </div>
                <div className='text-lg text-gray-700 flex gap-4'>
                    <span>Your Total : {calculateTotal()} Tk</span>
                </div>
            </div>

            {items.map(item => (
                <div key={item.id} className='bg-white shadow-2xl p-4 flex justify-between rounded-lg items-center mt-3'>
                    <div className='flex justify-center items-center gap-5'>
                        <label htmlFor="">
                            <input type="checkbox" />
                        </label>
                        <div>
                            <img src={item.image} alt={item.title} className='w-32 h-32' />
                        </div>
                        <div className='w-44'>
                            <span className='text-gray-700'>{item.title}</span> 
                           
                        </div>
                    </div>

                    <div className='bg-white shadow-lg flex divide-x w-48 text-2xl divide-solid justify-center items-center'>
         <button className='p-3 bg-gray-100 w-16'>-</button>
         <span className='p-3 bg-gray-100 w-16 text-center'>0</span>
         <button className='p-3 bg-gray-100 w-16'>+</button>
        </div>

                    <div className='mr-4'>
                        <span className='text-2xl text-gray-800'>{item.price}tk</span>
                    </div>
                    <button className='p-3  w-16' onClick={() => handleRemoveItem(item.id)}>
                            Remove
                        </button>
                </div>
            ))}

           <div className='pt-8 flex justify-center'>
           <button className='p-3 bg-blue-600 text-white rounded-lg' onClick={handleClearCart}>
                Clear Cart
            </button>
           </div>
        </div>
    );
};

export default Cart;
