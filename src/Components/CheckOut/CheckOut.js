import './CheckOut.css';
import NoImage from '../ItemList/NoImage.png'
import React, { Fragment, useContext, useEffect, useRef, useState } from 'react';
import TrashIcon from '../svgs/icon-trash.svg'
import { cartContext } from '../../Context/CartContext/CartContext';
import { auth,db } from "../../firebase";
import { useAuthState } from 'react-firebase-hooks/auth';
import { v4 as uuid } from 'uuid';
import { doc, setDoc } from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";




export default function CheckOut(props) {
    const { state,deleteOrder, deleteWishlist, clearOrders } = useContext(cartContext)
    const [user] = useAuthState(auth);
    
    const [quantity,setQuantity] = useState(1)
    const ref = useRef(null);

    const handleButton = (value)=>{
        if (value=='up'){
            setQuantity((prev)=>prev+1)
        }
        else{
            if (quantity>1){
                setQuantity((prev)=>prev-1)
            }
        }
    }
    const handleCheckout = () => {
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
        const newUuid = uuid()
        console.log(state)
        const newOrder = {
          orderId: newUuid,
          user: user.uid,
          orders: state.orders
        }
        setDoc(doc(db,'Orders',newUuid),newOrder)
        clearOrders(newOrder)
        toast.success('Tu Orden ha sido enviada! ', {
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
    
    return (
      <Fragment>
        
        <div className={props.show?"cs-checkout":"cs-checkout hidden"}>
                <div className="cs-header">
                  <h1>{props.options.title}</h1>
                </div>
                <div className="cs-products">

                  {props.options.page=='cart'?
                    state.orders.map(order => (
                      <div className="cs-product">
                        <img className="cs-product-image" src={order.producto.thumbnail} />
                        <p className="cs-product-title">
                          <span>{order.producto.title}</span>
                        </p>
                        <p className="cs-product-price">${order.producto.price * order.cantidad}</p>
                        <div className='cs-quantity-selector'>
                              <button className='cs-btn-less' onClick={()=>handleButton('down')}>&#10094;</button>
                              <div className='cs-quantity-selector-number'>{order.cantidad?order.cantidad:0}</div>
                              <button className='cs-btn-more' onClick={()=>handleButton('up')}>&#10095;</button>
                              <img className='cs-trash-icon' src={TrashIcon} alt="" onClick={()=>deleteOrder({userId:user.uid,producto:order.producto})}/>
                        </div>
                        
                        
                      </div>
                    ))
                      :
                      state.wishlist.map(wish => (
                        <div className="cs-product">
                          <img className="cs-product-image" src={wish.producto.thumbnail?wish.producto.thumbnail:NoImage} />
                          <p className="cs-product-title">
                            <span>{wish.producto.title?wish.producto.title:'no title'}</span>
                          </p>
                          <p className="cs-product-price">${wish.producto.price?wish.producto.price:0}</p>
                          <img className='cs-trash-icon' src={TrashIcon} alt="" onClick={()=>deleteWishlist({userId:user.uid,producto:wish.producto})}/>
                        </div>
                      ))
                  }
                </div>
                {props.options.button?
                  <button className='cs-btn' text="Checkout" onClick={()=>handleCheckout()}>Comprar</button>
                  :
                  null
                }
                
            </div>
      </Fragment>
           
    );
}