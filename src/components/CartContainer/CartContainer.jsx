import React from "react";
import { Card, Button } from "react-bootstrap";
import { useCart } from "../CartContext/CartContext";

export const CartContainer = () => {
  const { cart } = useCart();
  console.log("cartcontainer ", cart)

  return (
    <div className="container">
      <h2>Carrito de Compras</h2>
      {cart.map((item, index) => (
        <div className="row m-2" key={index}>
          <div className="col d-flex flex-column">
            <img style={{ maxWidth: '50px', height: '50px', marginRight: '10px' }} src={item.image} alt={item.name} />
            <div className="d-flex justify-content-between align-items-center">
              <p>{`Producto: ${item.name}`}</p>
              <p>{`Cantidad: ${item.quantity}`}</p>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <p>{`Total: $${item.price * item.quantity}`}</p>
              <Button variant="danger">Eliminar</Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
