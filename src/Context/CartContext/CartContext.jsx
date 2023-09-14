import { createContext, useReducer } from "react";
import { reducer } from "./CartReducer";
import {  ORDER, WISHLIST } from "./CartReducer";



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
  const wishlist = (value) => {
    dispatch({
      type: WISHLIST,
      payload: { value },
    });
  };
  
  return (
      <cartContext.Provider
        value={{
          state,
          order,
          wishlist
        }}
      >
        {children}
      </cartContext.Provider>
  );
};

export default CartState;
