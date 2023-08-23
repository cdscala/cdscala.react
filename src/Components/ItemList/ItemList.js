import './ItemList.css';
import NoImage from './NoImage.png'

export default function ItemList(props) {
    
    return (
        <div className="cs-product-card" onClick={props.clickDetail}>
            <div className="cs-product-image">
                <span className="cs-discount-tag">&#9734;{props.producto.rating?.rate? props.producto.rating.rate:0 }</span>
                <img src={props.producto.image?props.producto.image:NoImage} className="cs-product-thumb" alt=""/>
                <button value={props.id?props.id:-1} className="cs-card-btn add-to-wish" onClick={props.clickFavorito}>agregar a deseados</button>
            </div>
            <div className="cs-product-info">
                <h2 className="cs-product-brand">{props.producto.title? props.producto.title:'no title'}</h2>
                <p className="cs-product-short-des">{props.producto.shortDescription?props.producto.shortDescription:'no description'}</p>
                <span className="cs-price">${props.producto.price? props.price:0}</span><span className="cs-actual-price">{props.producto.oldPrice && props.producto.discount? '$'+props.producto.oldPrice:null}</span>
            </div>
        </div>
    );
}