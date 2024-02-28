import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [isOpen ,setIsopen] = useState(false);
  return (<CartContext.Provider value={{isOpen , setIsopen }}>
    {children}
    </CartContext.Provider>);
};

export default CartProvider;
