// Acciones
export const CHANGE_STATE = "CHANGE_STATE";





// Reducer
export const reducer = (state, { type, payload }) => {
  const { value } = payload;
  switch (type) {
    
    case CHANGE_STATE:
      return {
        ...state,
        add:[...value]
        
      };
    
    default:
      return state;
  }
};
