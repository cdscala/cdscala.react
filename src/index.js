import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import ContextWrapper from './Context/ContextWrapper'
import ErrorPage from './Routes/Error/Error'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Components/Login/Login'
import Reset from './Components/Reset/Reset'
import Register from './Components/Register/Register'

ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextWrapper>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App/>}>
          <Route index path="category" element={<ItemListContainer />}/>
          <Route path="category/:categoryId" element={<ItemListContainer />}/>
          <Route path="item/:itemId" element={<ItemDetailContainer/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="reset" element={<Reset/>}/>
          <Route path="register" element={<Register/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </ContextWrapper>
);
