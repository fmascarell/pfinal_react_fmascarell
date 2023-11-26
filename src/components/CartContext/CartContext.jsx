import { useState, createContext, useContext } from "react";

export const CartContext = createContext([]);

export const useCart = () => {
  return useContext(CartContext);
};

export const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addToCart = (product) => {
    setCartList((prevCartList) => [...prevCartList, product]);
    console.log(product);
  };

  return (
    <CartContext.Provider value={{ cartList, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
