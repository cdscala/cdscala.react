import { useNavigate, Outlet, redirect } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';

import firebase from 'firebase/app'
import { cartContext } from './Context/CartContext/CartContext';
import { useContext } from 'react';
import { auth } from "./firebase";
import { useAuthState } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {
  const navigate = useNavigate()
  const { state, wishlist, deleteWishlist } = useContext(cartContext)
  const [user] = useAuthState(auth);
  
  const handleProducto = (value)=>{
    // console.log(value)
    navigate('/item/'+value.id)
  }
  const handleFavorito = (e,value)=>{
    e.stopPropagation()
    if (!user){
      toast.error('Ingresa con tu usuario y contraseña', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
    else{
      const wish={userId:user.uid,producto:value}
      if (state.wishlist.find(w => w.producto.id === value.id)){
          toast.error('El producto ya esta en la lista de deseos', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
      }
      else{
          wishlist(wish)
          toast.success('Tu producto ha sido añadido a la lista de deseos! ', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
      }
    }
    
  }
  const handleEliminarFavorito = (e,value)=>{
    e.stopPropagation()
    const wish={userId:user.uid,producto:value}
    deleteWishlist(wish)
    toast.success('Tu producto ha sido eliminado de la lista de deseos! ', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }

  return (
    <div className="App">
       <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          />
          
        <ToastContainer />
      <Navbar/>
      <Outlet context={[handleProducto,handleFavorito,handleEliminarFavorito]}/>
    </div>
  );
}

export default App;
