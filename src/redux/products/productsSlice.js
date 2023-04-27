import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [
  { id: 0, title: "Iphone 6", cart: true, price: 5000,rate: 1,state:'new', photoUrl:'https://i.ibb.co/1XGDfJK/IMG-0498.jpg' },
  { id: 1, title: "Iphone 7", cart: true, price: 4000,rate: 2,state:'used', photoUrl:'https://i.ibb.co/s16Mbx3/IMG-0550.jpg' },
  { id: 2, title: "Iphone 8", cart: false, price: 7000,rate: 3,state:'new', photoUrl:'https://i.ibb.co/s16Mbx3/IMG-0552.jpg' },
  { id: 3, title: "Iphone 11", cart: false, price: 5000,rate: 4,state:'used', photoUrl:'https://i.ibb.co/s16Mbx3/IMG-0553.jpg' },
  { id: 4, title: "Iphone 14", cart: false, price: 2000, rate: 15, state: 'new', photoUrl:'https://i.ibb.co/s16Mbx3/IMG-0558.jpg' },
  { id: 5, title: "Iphone 14", cart: false, price: 2000, rate: 15, state: 'new', photoUrl:'https://i.ibb.co/bBzR1rY/IMG-0567.jpg' },
  { id: 6, title: "Iphone 14", cart: false, price: 2000, rate: 15, state: 'new', photoUrl:'https://i.ibb.co/4VNbh8n/IMG-0598.jpg' },
  { id: 7, title: "Iphone 14", cart: false, price: 2000, rate: 15, state: 'new' , photoUrl:'https://i.ibb.co/qRgrmfs/IMG-0599.jpg'},
  { id: 8, title: "Iphone 14", cart: false, price: 2000, rate: 15, state: 'new' , photoUrl:'https://i.ibb.co/rZ57RNk/IMG-0600.jpg'},
  { id: 9, title: "Iphone 14", cart: false, price: 2000, rate: 15, state: 'new' , photoUrl:'https://i.ibb.co/qF821gp/IMG-0601.jpg'},
  { id: 10, title: "Iphone 14", cart: false, price: 2000, rate: 15, state: 'new', photoUrl:'https://i.ibb.co/P59Q4xH/IMG-0547.jpg' },
  { id: 11, title: "Iphone 14", cart: false, price: 2000, rate: 15, state: 'new', photoUrl:'https://i.ibb.co/vJDZ4xT/IMG-0548.jpg' },
  { id: 12, title: "Iphone 14", cart: false, price: 2000,rate: 15,state:'new', photoUrl:'https://i.ibb.co/s16Mbx3/IMG-0553.jpg' },
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