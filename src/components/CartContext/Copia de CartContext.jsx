import React, { useState, createContext, useContext, useEffect } from "react";

export const CartContext = createContext([]);

export const useCart = () => {
  return useContext(CartContext);
};

export const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addToCart = (product, quantity) => {
    console.log("Adding to cart: ", product, " with quantity: ", quantity);
  
    const existingCartItemIndex = cartList.findIndex(item => item.product.id === product.id);
  
    if (existingCartItemIndex !== -1) {
      setCartList(prevCartList => {
        const updatedCartList = [...prevCartList];
        updatedCartList[existingCartItemIndex].quantity += quantity;
        console.log("producto existe", updatedCartList);
        return updatedCartList;
      });
    } else {
      setCartList(prevCartList => [...prevCartList, { product, quantity }]);
      console.log("producto no existe", setCartList);
    }
  };
   

  useEffect(() => {
    console.log("Carrito actualizado:", cartList);
  }, [cartList]);

  return (
    <CartContext.Provider value={{ cartList, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
