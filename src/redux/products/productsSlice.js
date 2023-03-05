import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [
  { id: 0, title: "Iphone 6", cart: true, price: 5000,rate: 1 },
  { id: 1, title: "Iphone 7", cart: true, price: 4000,rate: 2 },
  { id: 2, title: "Iphone 8", cart: false, price: 7000,rate: 3 },
  { id: 3, title: "Iphone 11", cart: false, price: 5000,rate: 4 },
  { id: 4, title: "Iphone 14", cart: false, price: 2000,rate: 15 },
],
    isLoading: false,
    error: null,},
  reducers: {
    
    toggleCart(state, action) {
      for (const task of state) {
        if (task.id === action.payload) {
          task.completed = !task.completed;
          break;
        }
      }
    },
  },
});

export const { addTask, deleteTask, toggleCart } = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
