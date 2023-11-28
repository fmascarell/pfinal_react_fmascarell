import React, { useState, createContext, useContext, useEffect } from "react";

export const CartContext = createContext([]);

export const useCart = () => {
  return useContext(CartContext);
};

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    console.log("Adding to cart: ", product);
    console.log("cart actual ", cart)
    const existingCartItem = cart.find(
      (item) => item.id === product.id
    );

    if (existingCartItem) {
      console.log("existingCartItem ", existingCartItem)
      setCart((prevCart) => {
        const updatedCart = prevCart.map((item) =>
          item.id === product.id
            ? {...item, quantity: product.quantity}
            : item
        );
        console.log("updatedCart ", updatedCart)
        return updatedCart;
      });
      console.log("producto existe");
    } else {
      setCart((prevCart) => [
        ...prevCart,
        { ...product},
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
