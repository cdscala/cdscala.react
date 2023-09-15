import { useContext, useEffect, useState } from 'react';
import './ItemList.css';
import NoImage from './NoImage.png'
import { cartContext } from '../../Context/CartContext/CartContext';

export default function ItemList(props) {
    const { state } = useContext(cartContext) 
    const [ison,setIs]= useState(false)
    const isOnWishlist = (value) => {
        return state.wishlist.find(e => e.producto.id === value)
    };
    useEffect(()=>{
        setIs(isOnWishlist(props.producto.id))
      },[state.wishlist])
    return (
        <div className="cs-product-card" onClick={props.clickDetail}>
            <div className="cs-product-image">
                <span className="cs-discount-tag">&#9734;{props.producto.rating? props.producto.rating:0 }</span>
                <img src={props.producto.thumbnail?props.producto.thumbnail:NoImage} className="cs-product-thumb" alt=""/>
                {ison?
                <button value={props.id?props.id:-1} className="cs-card-btn add-to-wish" onClick={props.clickEliminarFavorito}>quitar de deseados</button>
                :
                <button value={props.id?props.id:-1} className="cs-card-btn add-to-wish" onClick={props.clickFavorito}>agregar a deseados</button>
                }
            </div>
            <div className="cs-product-info">
                <p className="cs-product-brand">{props.producto.brand? props.producto.brand:'no brand'}</p>
                <p className="cs-product-short-des">{props.producto.title?props.producto.title:'no title'}</p>
                <span className="cs-price">${props.producto.price? props.producto.price:0}</span><span className="cs-actual-price">{props.producto.oldPrice && props.producto.discount? '$'+props.producto.oldPrice:null}</span>
            </div>
        </div>
    );
}