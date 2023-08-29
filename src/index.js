import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import ContextWrapper from './Context/ContextWrapper'
import ErrorPage from './Routes/Error/Error'
import ItemListContainer, { loader as categoryLoader } from './Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer, { loader as itemLoader } from './Components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'



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
