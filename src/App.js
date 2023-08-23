import { useNavigate, Outlet, redirect } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import {useAuthState} from 'react-firebase-hooks/auth'

export async function loader({ params }) {
  // const products = await getProducts()
  // return { products }
  return null
}

function App() {
  const navigate = useNavigate()
  const handleProducto = (value)=>{
    console.log(value)
    navigate('/item/'+value.id)
  }
  const handleFavorito = (e,value)=>{
    e.stopPropagation()
    console.log(`Guardar a favoritos: ${JSON.stringify(value)}`)
  }

  return (
    <div className="App">
      <Navbar/>
      <Outlet context={[handleProducto,handleFavorito]}/>
    </div>
  );
}

export default App;
