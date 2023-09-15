import { Fragment, useContext, useEffect, useState } from 'react';
import './ItemDetail.css';
import { cartContext } from '../../Context/CartContext/CartContext';
import { auth } from "../../firebase";
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';



export default function ItemDetail(props) {
    const { state, order, wishlist,deleteWishlist } = useContext(cartContext) 
    const [selectedPicture,setPicture] =useState('')
    const [active,setActive] = useState(0)
    const [quantity,setQuantity] = useState(1)
    const [user] = useAuthState(auth);
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
    const handleOrder = () =>{
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
            const orden={userId: user.uid, cantidad:quantity,producto:props.item}
            if (state.orders.find(e => e.producto.id === orden.producto.id)){
                toast.error('El producto ya esta en el carro', {
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
                order(orden)
                toast.success('Tu produco ha sido añadido al carro! ', {
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
    const handleFavoritoAdd = ()=>{
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
            wishlist({userId:user.uid,producto:props.item})
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
    const handleFavoritoDelete = ()=>{
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
            deleteWishlist({userId:user.uid,producto:props.item})
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
    } 

    
    const handleActive = (key,picture) => {
        setActive(key)
        setPicture(`url(${picture})`)
    }
    const [ison,setIs]= useState(false)
    const isOnWishlist = (value) => {
        return state.wishlist.find(e => e.producto.id === value)
    };

    useEffect(()=>{
        setIs(isOnWishlist(props.item.id))
    },[state.wishlist])

    useEffect(()=>{
        setPicture(`url(${props.item.thumbnail?props.item.thumbnail:''})`)
        setActive(0)
    },[props.item.thumbnail])
    return (
        <Fragment>
            <div className="cs-product-details">
                <div className="cs-image-slider" style={{backgroundImage:selectedPicture}}>
                    <div className="cs-product-images">
                        {props.item.pictures?.map((picture,key) => (
                            <img key={key} src={picture} className={key==active?"active":""} alt="" onClick={()=>handleActive(key,picture)}/>
                        ))}
                    </div>
                </div>
                    
                <div className="cs-details">
                    <h2 className="cs-product-brand">{props.item.brand}</h2>
                    <p className="cs-product-short-des">{props.item.title}</p>
                    <span className="cs-product-price">{props.item.price?'$'+props.item.price:null}</span>
                    <span className="cs-product-actual-price">{props.item.price? (props.item.base_price!==props.item.price?'$'+props.item.base_price:null):null}</span>
                    <span className="cs-product-discount">{props.item.price?((props.item.price * 100 / props.item.base_price)<100?(100-(props.item.price * 100 / props.item.base_price)).toFixed(0)+'% off':null):null}</span>
                    <p className="cs-product-sub-heading">select size</p>
                    <input type="radio" name="size" value="s" checked hidden id="s-size" onChange={e => {}}/>
                    <label htmlFor="s-size" className="cs-size-radio-btn check">s</label>
                    <input type="radio" name="size" value="m" hidden id="m-size" onChange={e => {}}/>
                    <label htmlFor="m-size" className="cs-size-radio-btn">m</label>
                    <input type="radio" name="size" value="l" hidden id="l-size" onChange={e => {}}/>
                    <label htmlFor="l-size" className="cs-size-radio-btn">l</label>
                    <input type="radio" name="size" value="xl" hidden id="xl-size" onChange={e => {}}/>
                    <label htmlFor="xl-size" className="cs-size-radio-btn">xl</label>
                    <input type="radio" name="size" value="xxl" hidden id="xxl-size" onChange={e => {}}/>
                    <label htmlFor="xxl-size" className="cs-size-radio-btn">xxl</label>
                    <div className='cs-quantity-selector'>
                        <button className='cs-btn-less' onClick={()=>handleButton('down')}>&#10094;</button>
                        <div className='cs-quantity-selector-number'>{quantity}</div>
                        <button className='cs-btn-more' onClick={()=>handleButton('up')}>&#10095;</button>
                    </div>
                    <button className="cs-btn cs-cart-btn" onClick={handleOrder}>agregar al carro</button>
                    {ison?
                        <button className="cs-btn" onClick={()=>handleFavoritoDelete()}>quitar de deseados</button>
                        :
                        <button className="cs-btn" onClick={()=>handleFavoritoAdd()}>agregar a deseados</button>
                    }
                    
                </div>
            </div>
            <section className="cs-detail-des">
                <h2 className="cs-heading">descripcion</h2>
                <p className="cs-des">{props.item.description}</p>
            </section>
        </Fragment>
        
    );
}