import { createContext, useContext, useReducer } from "react";
import { reducer, reducerx } from "./CharactersReducer";
import {  CHANGE_STATE,  CHANGE_INFO, CHANGE_PAGE,CHANGE_CHARACTER,CHANGE_NAME,CHANGE_STATUS,CHANGE_GENDER,CLEAR_FILTER,ADD_FAVORITE,DELETE_FAVORITE } from "./CharactersReducer";



export const initialState = {
  
} 


export const charactersContext = createContext(initialState);

const CharacterState = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const changeState = (value) => {
    dispatch({
      type: CHANGE_STATE,
      payload: { value },
    });
  };
  

  
  

  return (
      <charactersContext.Provider
        value={{
          state,
          changeState,
        }}
      >
        {children}
      </charactersContext.Provider>
  );
};

export default CharacterState;
