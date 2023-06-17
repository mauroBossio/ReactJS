import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';


import {  createBrowserRouter,  RouterProvider,} from "react-router-dom";
import ItemListContainer from './Components/ItemListContainer';
import Cart from './Components/cart';
import ItemDitailContainer from './Components/ItemDitailContainer';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoka_PsF-_JO_toSp3deevTu-KyCIR5IM",
  authDomain: "ecommerce-meti.firebaseapp.com",
  projectId: "ecommerce-meti",
  storageBucket: "ecommerce-meti.appspot.com",
  messagingSenderId: "590914552283",
  appId: "1:590914552283:web:227cfe160db9d753dae7fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

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
    path: "/item/:id/cart",
    element: <Cart />
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
