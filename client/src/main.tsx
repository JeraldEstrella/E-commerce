import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Search from './Route/FilterProducts/Search.tsx';
import RootLayout from './Rootlayout/Rootlayout';
import MyCart from './Route/MyCart/MyCart.tsx';
import Product from './Route/ProductDetails/Product.tsx';
import Account from './Route/Account/Account.tsx';
import Addproducts from './storeRoute/uploadProducts/Addproducts.tsx';

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: '/', element: <App /> },
      { path: 'search', element: <Search /> },
      { path: 'my-cart', element: <MyCart /> },
      { path: 'product-details/:id', element: <Product /> },
      { path: 'account', element: <Account /> },
      { path: 'add', element: <Addproducts /> },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
