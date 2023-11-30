import React from "react";
import { Card, Button } from "react-bootstrap";
import { useCart } from "../CartContext/CartContext";
import Titulo from "../Titulo/Titulo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

export const CartContainer = () => {
  const { cart, removeFromCart } = useCart();
  console.log("cartcontainer ", cart);

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  return (
    <div>
      <Titulo titulo={"Carrito de Compras"} />
      {cart.length === 0 ? (
        <p className="text-center">
          El carrito está vacío. Agregue productos a su carro.
        </p>
      ) : (
        cart.map((item, index) => (
          <div className="row" key={index}>
            <div className="col d-flex text-center justify-content-center mt-2">
              <img
                className="mt-2"
                style={{
                  maxWidth: "60px",
                  height: "60px",
                  marginRight: "10px",
                }}
                src={item.image}
                alt={item.name}
              />
              <div className="m-4">{`X ${item.quantity}`}</div>
              <div className="m-4">{`${item.name}`}</div>
              <div className="m-4">{`Total: $${
                item.price * item.quantity
              }`}</div>
              <Button className="m-4" variant="danger" onClick={() => handleRemoveFromCart(item.id)}>
                <FontAwesomeIcon icon={faTrashAlt} />
              </Button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};
