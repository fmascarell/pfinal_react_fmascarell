import React, { useState, createContext, useContext, useEffect } from "react";

export const CartContext = createContext([]);

export const useCart = () => {
  return useContext(CartContext);
};

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingCartItem = cart.find(
      (item) => item.id === product.id
    );

    if (existingCartItem) {
      setCart((prevCart) => {
        const updatedCart = prevCart.map((item) =>
          item.id === product.id
            ? {...item, quantity: product.quantity}
            : item
        );
        return updatedCart;
      });
      //console.log("producto existe");
    } else {
      setCart((prevCart) => [
        ...prevCart,
        { ...product},
      ]);
      //console.log("producto no existe");
    }
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  useEffect(() => {
    if (cart) {
      console.log("Carrito actualizado:", cart);
    }
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
