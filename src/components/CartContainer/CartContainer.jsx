import React from "react";
import { Card, Button } from "react-bootstrap";
import { useCart } from "../CartContext/CartContext";

export const CartContainer = () => {
  const { cart } = useCart();
  console.log("cartcontainer ", cart)

  return (
    <div className="cartcontainer">
      <h2>Carrito de Compras</h2>
      {cart.map((item, index) => (
        <div className="row m-2" key={index}>
          <div className="col d-flex flex-column">
            <img style={{ maxWidth: '50px', height: '50px', marginRight: '10px' }} src={item.image} alt={item.name} />
            <div className="d-flex justify-content-between align-items-center">
              <div>{`Producto: ${item.name}`}</div>
              <div>{`Cantidad: ${item.quantity}`}</div>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <div>{`Total: $${item.price * item.quantity}`}</div>
              <Button variant="danger">Eliminar</Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
