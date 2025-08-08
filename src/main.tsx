import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Search from './route/Search/Search';
import RootLayout from './Rootlayout/Rootlayout';
import MyCart from './route/myCart/MyCart';

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: '/', element: <App /> },
      { path: 'search', element: <Search /> },
      { path: 'my-cart', element: <MyCart /> },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
