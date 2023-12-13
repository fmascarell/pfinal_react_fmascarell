import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useCart } from "../CartContext/CartContext";
import Titulo from "../Titulo/Titulo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { OrderForm } from "../OrderForm/OrderForm";

export const CartContainer = () => {
  const { cart, removeFromCart } = useCart();
  const [showOrderForm, setShowOrderForm] = useState(false);

  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const handleToggleOrderForm = () => {
    setShowOrderForm((prevShowOrderForm) => !prevShowOrderForm);
  };

  return (
    <div>
      <Titulo titulo={"Carrito de Compras"} />
      {cart.length === 0 ? (
        <p className="text-center">
          El carrito está vacío. Agregue productos a su carro.
        </p>
      ) : (
        <>
          {cart.map((item, index) => (
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
                <Button
                  className="m-4"
                  variant="danger"
                  onClick={() => handleRemoveFromCart(item.id)}
                >
                  <FontAwesomeIcon icon={faTrashAlt} />
                </Button>
              </div>
            </div>
          ))}
          <div className="text-center justify-content-center mt-2">
            <h2>Total: ${totalAmount.toFixed(2)}</h2>
          </div>
          <div className="d-flex justify-content-center align-items-center vh-100">
            <button
              className="btn btn-danger"
              //onClick={
              //  <OrderForm></OrderForm>}
              >
              Continuar compra
            </button>
          </div>
        </>
      )}
    </div>
  );
};
