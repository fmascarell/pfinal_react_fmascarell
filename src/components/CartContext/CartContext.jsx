import React, { useState, createContext, useContext, useEffect } from "react";

export const CartContext = createContext([]);

export const useCart = () => {
  return useContext(CartContext);
};

export const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addToCart = (product, quantity) => {
    // Actualizar el estado del carrito
    setCartList((prevCartList) => [
      ...prevCartList,
      { product, quantity }
    ]);
  };

  // UseEffect para mostrar el contenido del carrito cada vez que cambia
  useEffect(() => {
    console.log("Carrito actualizado:", cartList);
  }, [cartList]);

  return (
    <CartContext.Provider value={{ cartList, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
