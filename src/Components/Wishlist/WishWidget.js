import './WishWidget.css';
import WishlistIcon from '../svgs/icon-wishlist.svg'
import { Fragment } from 'react';


export default function WishWidget(props) {
    
    return (
        <Fragment>
            <img src={WishlistIcon} alt=""/>
            <div className={props.cantidad==0?"cs-quantity-bubble hidden":"cs-quantity-bubble"}>{props.cantidad?props.cantidad:0}</div>
        </Fragment>
    );
}