import { configureStore } from '@reduxjs/toolkit';

import orderSlice from "../fetaures/order/orderSlice";
const store = configureStore({
  reducer:{
    order:orderSlice,
  }
});

export default store;
