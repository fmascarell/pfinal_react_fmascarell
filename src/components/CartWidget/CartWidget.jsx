import React from "react";
import { useCart } from "../CartContext/CartContext";

const CartWidget = () => {
  const { cart } = useCart();

  const totalProducts = cart.length > 0 ? cart[0].product.quantity : 0;
  console.log("total product " + totalProducts);

  const cartItems = cart.map((item, index) => (
    <div key={index}>
      <p>{`Producto: ${item.product.name}, Cantidad: ${item.quantity}`}</p>
      <img src={item.product.image} alt={item.product.name} />
    </div>
  ));

  return (
    <div style={{ position: "relative", display: "flex", marginRight: "20px" }}>
      <span style={circleStyle}>{totalProducts}</span>
      <img className="cartWidget" src="/img/carrito.png" alt="Carrito" />
      {/*<div>         
        {cartItems}
      </div>*/}
    </div>
  );
};

const circleStyle = {
  top: "5px",
  right: "5px",
  width: "25px",
  height: "25px",
  backgroundColor: "red",
  borderRadius: "50%",
  color: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export default CartWidget;
