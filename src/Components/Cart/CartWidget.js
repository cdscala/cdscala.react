import './CartWidget.css';
import CarroVacioIcon from '../svgs/icon-empty-cart.svg'
import { Fragment } from 'react';


export default function CartWidget(props) {
    
    return (
        <Fragment>
            <img src={CarroVacioIcon} alt=""/>
            <div className={props.cantidad==0?"cs-quantity-bubble hidden":"cs-quantity-bubble"}>{props.cantidad?props.cantidad:0}</div>
        </Fragment>
    );
}