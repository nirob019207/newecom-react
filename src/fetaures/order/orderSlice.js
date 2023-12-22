// orderSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    isCartOpen: false,
};

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        clearItems: (state) => {
            state.items = [];
        },
        toggleCart: (state) => {
            state.isCartOpen = !state.isCartOpen;
        },
        increment: (state, action) => {
            const itemId = action.payload; // Assuming payload contains the item ID
            
            // Find the item in the items array
            const itemToUpdate = state.items.find(item => item.id === itemId);

            if (itemToUpdate.order<itemToUpdate.total) {
                // Increment the 'order' property
                itemToUpdate.order += 1;
            }
        },
        decrement: (state, action) => {
            const itemId = action.payload; // Assuming payload contains the item ID
            
            // Find the item in the items array
            const itemToUpdate = state.items.find(item => item.id === itemId);

            if (itemToUpdate.order>1) {
                // Increment the 'order' property
                itemToUpdate.order -= 1;
            }
          
        }
    },
});

export const { addItem, removeItem, clearItems, toggleCart,increment,decrement } = orderSlice.actions;
export default orderSlice.reducer;
