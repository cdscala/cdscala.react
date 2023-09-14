import './WishWidget.css';
import WishlistIcon from '../svgs/icon-wishlist.svg'
import { Fragment } from 'react';


export default function WishWidget(props) {
    
    return (
        <Fragment>
            <img src={WishlistIcon} alt=""/>
            <div className="cs-quantity-bubble">{props.cantidad?props.cantidad:0}</div>
        </Fragment>
    );
}