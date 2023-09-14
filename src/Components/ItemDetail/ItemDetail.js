import { Fragment, useEffect, useState } from 'react';
import './ItemDetail.css';


export default function ItemDetail(props) {
    const [selectedPicture,setPicture] =useState('')
    const [active,setActive] = useState(0)
    const handleActive = (key,picture) => {
        setActive(key)
        setPicture(`url(${picture})`)
    }
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
            
                    <button className="cs-btn cs-cart-btn">agregar al carro</button>
                    <button className="cs-btn">agregar a deseados</button>
                </div>
            </div>
            <section className="cs-detail-des">
                <h2 className="cs-heading">descripcion</h2>
                <p className="cs-des">{props.item.description}</p>
            </section>
        </Fragment>
        
    );
}