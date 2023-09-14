import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import ContextWrapper from './Context/ContextWrapper'
import ErrorPage from './Routes/Error/Error'
import ItemListContainer, { loader as categoryLoader } from './Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer, { loader as itemLoader } from './Components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyCap7Nab5ThA-GgOgvtP1jQa3AcrXy6aOc",
  authDomain: "storeproject-1cd9a.firebaseapp.com",
  projectId: "storeproject-1cd9a",
  storageBucket: "storeproject-1cd9a.appspot.com",
  messagingSenderId: "1048965355328",
  appId: "1:1048965355328:web:e9fc0160fd0576c2678ca5"
};

const app = initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextWrapper>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App/>}>
          <Route index path="category" element={<ItemListContainer />}/>
          <Route path="category/:categoryId" element={<ItemListContainer />}/>
          <Route path="item/:itemId" element={<ItemDetailContainer/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </ContextWrapper>
);
