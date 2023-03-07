import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import { App } from 'components/App';
import './index.css';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react'
import 'modern-normalize';
import './firebase';



ReactDOM.createRoot(document.getElementById('root')).render(
  
  <Provider store={store}>
     
    <BrowserRouter basename="/iphone-store">
       <ChakraProvider>
        <App />
        </ChakraProvider>
      </BrowserRouter>
    </Provider>
);
