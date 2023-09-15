// Acciones
export const ORDER = "ORDER";
export const WISHLIST = "WISHLIST";
export const DELETE_WISHLIST = "DELETE_WISHLIST"
export const DELETE_ORDER = "DELETE_ORDER"
export const MODIFY_ORDER = "MODIFY_ORDER"
export const CLEAR_ORDERS = "CLEAR_ORDERS"




// Reducer
export const reducer = (state, { type, payload }) => {
  const { value } = payload;
  switch (type) {
    
    case ORDER:
      return {
        ...state,
        orders:[...state.orders,value]
      };
    case MODIFY_ORDER:
        return {
          ...state,
          orders:state.orders.filter(order=>order.producto.id !== value.producto.id)
        };
    case DELETE_ORDER:
        return {
          ...state,
          orders:state.orders.filter(order=>order.producto.id !== value.producto.id)
        };
    case CLEAR_ORDERS:
          return {
            ...state,
            orders:[]
          };
    case WISHLIST:
      return {
        ...state,
        wishlist:[...state.wishlist,value]
      };
      case DELETE_WISHLIST:
        return {
          ...state,
          wishlist:state.wishlist.filter(fav=>fav.producto.id !== value.producto.id)
        };
    
    default:
      return state;
  }
};
