import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [
  { id: 0, title: "Iphone 6", cart: true, price: 5000,rate: 1,state:'new' },
  { id: 1, title: "Iphone 7", cart: true, price: 4000,rate: 2,state:'used' },
  { id: 2, title: "Iphone 8", cart: false, price: 7000,rate: 3,state:'new' },
  { id: 3, title: "Iphone 11", cart: false, price: 5000,rate: 4,state:'used' },
  { id: 4, title: "Iphone 14", cart: false, price: 2000, rate: 15, state: 'new' },
  { id: 5, title: "Iphone 14", cart: false, price: 2000, rate: 15, state: 'new' },
  { id: 6, title: "Iphone 14", cart: false, price: 2000, rate: 15, state: 'new' },
  { id: 7, title: "Iphone 14", cart: false, price: 2000, rate: 15, state: 'new' },
  { id: 8, title: "Iphone 14", cart: false, price: 2000, rate: 15, state: 'new' },
  { id: 9, title: "Iphone 14", cart: false, price: 2000, rate: 15, state: 'new' },
  { id: 10, title: "Iphone 14", cart: false, price: 2000, rate: 15, state: 'new' },
  { id: 11, title: "Iphone 14", cart: false, price: 2000, rate: 15, state: 'new' },
  { id: 12, title: "Iphone 14", cart: false, price: 2000,rate: 15,state:'new' },
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
