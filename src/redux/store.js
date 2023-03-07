import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./products/productsSlice";
import { filtersReducer } from "./products/filtersSlice";
import { cartReducer } from "./cart/cartSlice";
import { authReducer } from './auth/authSlice';

import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, cartReducer);
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
   reducer: {
      products: productsReducer,
      filters: filtersReducer,
     cart: persistedReducer,
     auth: persistReducer(authPersistConfig, authReducer)
    },
    middleware: (getDefaultMiddleware) =>
     getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)

