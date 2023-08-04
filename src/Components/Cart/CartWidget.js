import './CartWidget.css';
import CarroVacioIcon from '../svgs/icon-empty-cart.svg'


export default function CartWidget(props) {
    
    return (
        <>
            <img src={CarroVacioIcon} alt=""/>
            <div className="cs-quantity-bubble">{props.cantidad?props.cantidad:0}</div>
        </>
    );
}