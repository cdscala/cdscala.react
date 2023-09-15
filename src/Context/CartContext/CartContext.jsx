import { createContext, useReducer } from "react";
import { CLEAR_ORDERS, reducer } from "./CartReducer";
import {  ORDER, WISHLIST, DELETE_WISHLIST, DELETE_ORDER, MODIFY_ORDER } from "./CartReducer";



export const initialState = {
  orders:[],
  wishlist:[]
} 


export const cartContext = createContext(initialState);

const CartState = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const order = (value) => {
    dispatch({
      type: ORDER,
      payload: { value },
    });
  };
  const modifyOrder = (value) => {
    dispatch({
      type: MODIFY_ORDER,
      payload: { value },
    });
  };
  const deleteOrder = (value) => {
    dispatch({
      type: DELETE_ORDER,
      payload: { value },
    });
  };
  const clearOrders = (value) => {
    dispatch({
      type: CLEAR_ORDERS,
      payload: { value },
    });
  };
  const wishlist = (value) => {
    dispatch({
      type: WISHLIST,
      payload: { value },
    });
  };
  
  const deleteWishlist = (value) => {
    dispatch({
      type: DELETE_WISHLIST,
      payload: { value },
    });
  };
  
  return (
      <cartContext.Provider
        value={{
          state,
          order,
          modifyOrder,
          deleteOrder,
          clearOrders,
          wishlist,
          deleteWishlist   
        }}
      >
        {children}
      </cartContext.Provider>
  );
};

export default CartState;
