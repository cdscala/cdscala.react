import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App, { loader as productLoader } from './App'
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom"
import ErrorPage from './Routes/Error/Error'
import ItemListContainer, { loader as categoryLoader } from './Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer, { loader as itemLoader } from './Components/ItemDetailContainer/ItemDetailContainer'

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,  
    loader:productLoader,
    children: [
      {
        index: true,
        element: <ItemListContainer />,
        loader: categoryLoader,
      },
      {
        path: "category/:categoryId",
        element: <ItemListContainer />,
        loader: categoryLoader,
      },
      {
        path: "item/:itemId",
        element: <ItemDetailContainer />,
        loader: itemLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
