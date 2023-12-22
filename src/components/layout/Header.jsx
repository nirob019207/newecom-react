import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { toggleCart } from '../../fetaures/order/orderSlice';
import { useSelector,useDispatch } from 'react-redux';
function Header() {
    const dispatch = useDispatch();
  const navigate = useNavigate();
  const item = useSelector(state => state.order.items);
  const isCartOpen = useSelector(state => state.order.isCartOpen);

  console.log('isCartOpen:', isCartOpen);

  const handleToggleCart = () => {
    dispatch(toggleCart());

    // If the cart is open, navigate to the /cart route
    if (!isCartOpen) {
      navigate('/cart');
    }
    else {
        navigate('/products')
    }
  };
  return (
    <header class="bg-white">
    <div class="container mx-auto px-6 py-3">
        <div class="flex items-center justify-between pt-4">
            <div class="hidden w-full text-gray-600 md:flex md:items-center">
                <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.06298 10.063 6.27212 12.2721 6.27212C14.4813 6.27212 16.2721 8.06298 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16755 11.1676 8.27212 12.2721 8.27212C13.3767 8.27212 14.2721 9.16755 14.2721 10.2721Z" fill="currentColor" /><path fill-rule="evenodd" clip-rule="evenodd" d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.39409 5.48178 3.79417C8.90918 0.194243 14.6059 0.054383 18.2059 3.48178C21.8058 6.90918 21.9457 12.6059 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.97318 6.93028 5.17324C9.59603 2.3733 14.0268 2.26452 16.8268 4.93028C19.6267 7.59603 19.7355 12.0268 17.0698 14.8268Z" fill="currentColor" />
                </svg>
                <span class="mx-1 text-sm">NY</span>
            </div>
            <div class="w-full text-gray-700 md:text-center text-2xl font-semibold">
                Brand
            </div>
            <div class="flex items-center justify-end w-full">
         
           <span className='-top-5 text-lg  bg-red-700 text-center left-[4rem] text-white  h-8 w-8 rounded-full relative'>{item.length}</span>
           <button
          className="top-[4rem] right-2 p-3 rounded-full bg-blue-600 text-white hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
          onClick={handleToggleCart}
        >
          <FaShoppingCart className="h-6 w-6" />
        </button>
                <div class="flex sm:hidden">
                    <button  type="button" class="text-gray-600 hover:text-gray-500 focus:outline-none focus:text-gray-500" aria-label="toggle menu">
                        <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
                            <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        <nav  class="sm:flex sm:justify-center sm:items-center mt-4">
            <div class="flex flex-col sm:flex-row">
            <Link to="/" className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0">Home</Link>
            <Link to="/products" className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0">Products</Link>
            <Link to="/cart" className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0">cart</Link>

            </div>
        </nav>
        <div class="relative mt-6 max-w-lg mx-auto">
            <span class="absolute inset-y-0 left-0 pl-3 flex items-center">
                <svg class="h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="none">
                    <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </span>

            <input class="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" type="text" placeholder="Search"></input>
        </div>
    </div>
</header>
  )
}

export default Header