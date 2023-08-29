import React from 'react'

import CharactersProvider from './Pagination/CharactersContext'


const ContextWrapper = ({ children }) => {
  return (
    <>
        <CharactersProvider>
          {children}
        </CharactersProvider>
    </>
    
  );
};

export default ContextWrapper;
