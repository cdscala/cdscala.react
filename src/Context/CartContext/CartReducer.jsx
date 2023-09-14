// Acciones
export const ORDER = "ORDER";
export const WISHLIST = "WISHLIST";





// Reducer
export const reducer = (state, { type, payload }) => {
  const { value } = payload;
  switch (type) {
    
    case ORDER:
      return {
        ...state,
        orders:[...state.orders,value]
      };
    case WISHLIST:
      return {
        ...state,
        wishlist:[...state.wishlist,value]
      };
    
    default:
      return state;
  }
};
