import React from "react";
import { useCart } from "../CartContext/CartContext";

const CartWidget = () => {
  const { cartList } = useCart();

  const totalItems = cartList.reduce((total, item) => total + item.quantity, 0);
  const totalItemsToShow = isNaN(totalItems) ? 0 : totalItems;
  console.log("cantidad en el carrito " + totalItemsToShow)

  return (
    <div style={{ position: 'relative', display: 'flex', marginRight: '20px' }}>
      <span style={circleStyle}>{totalItemsToShow}</span>
      <img className='cartWidget' src='/img/carrito.png' alt='Carrito' />
    </div>
  );
};

const circleStyle = {
  top: '5px',
  right: '5px',
  width: '25px',
  height: '25px',
  backgroundColor: 'red',
  borderRadius: '50%',
  color: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export default CartWidget;
