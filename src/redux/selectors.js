// import { createSelector } from "@reduxjs/toolkit";


export const getProducts = state => state.products.products;
export const getProductsFilter = state => state.filters.status;
// export const selectIsLoggedIn = state => state.products.products;
// export const selectIsRefreshing = state => state.products.products;
export const selectUser = state => state.auth;
