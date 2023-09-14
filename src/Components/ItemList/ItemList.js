import './ItemList.css';
import NoImage from './NoImage.png'
// {
//     "id": "10",
//      "title": "Lentes Tony Stark/ Iron Man",
//      "brand": "Beside",
//      "description": "Lente de policarbonato",
//      "base_price": 7300,
//      "price": 7300,
//      "thumbnail": "https://http2.mlstatic.com/D_NQ_NP_847495-MLA51106838655_082022-O.webp",
//      "pictures": [
//          "https://http2.mlstatic.com/D_NQ_NP_847495-MLA51106838655_082022-O.webp",
//          "https://http2.mlstatic.com/D_NQ_NP_789613-MLA52699697450_122022-O.webp",
//          "https://http2.mlstatic.com/D_NQ_NP_778034-MLA51106837646_082022-O.webp"
//      ],
//      "sizes":[
//          "M"
//      ],
//      "age_group": "adults",
//      "category_group": "accesories",
//      "rating": 5,
//      "available": 36,
//      "sold":1  
// },
export default function ItemList(props) {
    
    return (
        <div className="cs-product-card" onClick={props.clickDetail}>
            <div className="cs-product-image">
                <span className="cs-discount-tag">&#9734;{props.producto.rating? props.producto.rating:0 }</span>
                <img src={props.producto.thumbnail?props.producto.thumbnail:NoImage} className="cs-product-thumb" alt=""/>
                <button value={props.id?props.id:-1} className="cs-card-btn add-to-wish" onClick={props.clickFavorito}>agregar a deseados</button>
            </div>
            <div className="cs-product-info">
                <p className="cs-product-brand">{props.producto.brand? props.producto.brand:'no brand'}</p>
                <p className="cs-product-short-des">{props.producto.title?props.producto.title:'no title'}</p>
                <span className="cs-price">${props.producto.price? props.producto.price:0}</span><span className="cs-actual-price">{props.producto.oldPrice && props.producto.discount? '$'+props.producto.oldPrice:null}</span>
            </div>
        </div>
    );
}