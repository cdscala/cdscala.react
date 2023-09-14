import React, { Fragment } from 'react'

import CartProvider from './CartContext/CartContext'


const ContextWrapper = ({ children }) => {
  return (
    <Fragment>
        <CartProvider>
          {children}
        </CartProvider>
    </Fragment>
  );
};

export default ContextWrapper;
