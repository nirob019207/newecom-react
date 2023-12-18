import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
};

export const orderSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        // showItem: (state) => state,
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
    },
});

export const { showItem, addItem } = orderSlice.actions;
export default orderSlice.reducer;