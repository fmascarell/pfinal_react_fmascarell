import React, { useState, createContext, useContext, useEffect } from "react";

export const CartContext = createContext([]);

export const useCart = () => {
  return useContext(CartContext);
};

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    console.log("Adding to cart: ", product, " with quantity: ", quantity);

    const existingCartItem = cart.find(
      (item) => item.product.id === product.id
    );

    if (existingCartItem) {
      setCart((prevCart) => {
        const updatedCart = prevCart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: quantity }
            : item
        );
        return updatedCart;
      });
      console.log("producto existe");
    } else {
      setCart((prevCart) => [
        ...prevCart,
        { product: { ...product, quantity }, quantity },
      ]);
      console.log("producto no existe");
    }
  };

  useEffect(() => {
    if (cart) {
      console.log("Carrito actualizado:", cart);
    }
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
