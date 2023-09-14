import './CartWidget.css';
import CarroVacioIcon from '../svgs/icon-empty-cart.svg'
import { Fragment, useContext } from 'react';
import { cartContext } from '../../Context/CartContext/CartContext';


export default function CheckOut(props) {
    const { state,order,wishlist } = useContext(cartContext)
    return (
        <Fragment>
            <img src={CarroVacioIcon} alt=""/>
            <div className="cs-quantity-bubble">{props.cantidad?props.cantidad:0}</div>
        </Fragment>
    );
}