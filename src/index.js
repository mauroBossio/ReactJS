import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ItemListContainer from './Components/ItemListContainer';
import Cart from './Components/cart';
import ItemDitailContainer from './Components/ItemDitailContainer';

const router = createBrowserRouter([
  {
    path: "/",
    element: <ItemListContainer />
  },
  {
    path: "/category/:id",
    element: <ItemListContainer />
  },
  {
    path: "/item/:id",
    element: <ItemDitailContainer />
  },
  {
    path: "/cart",
    element: <Cart />
  },  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
