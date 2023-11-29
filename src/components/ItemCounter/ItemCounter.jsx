import React, { useEffect, useState } from "react";
import { useCounter } from "../Hooks/UseCounter";
import "./ItemCounter.css";

export const ItemCounter = ({ initial = 0, stock = 10, onAdd, showAlert }) => {
  const { count, handleResta, handleSuma, setCount } = useCounter(
    initial,
    stock
  );
  //const [showButtons, setShowButtons] = useState(true);

  useEffect(() => {
    console.log("Current count: " + count);
  }, [count]);


  const handleOnAdd = () => {
    if (count > 0) {
      onAdd(count);
      showAlert("success", "El carrito ha sido actualizado.");
    } else {
      showAlert("danger", "Debes seleccionar al menos una unidad.");
    }
  };

  return (
    <div className="text-center d-flex justify-content-center">
      <div className="border border-1 border-dark rounded mt-4 mb-4">
        <button className="btn" onClick={handleResta}>
          -
        </button>
        <span className="m-2">{count}</span>
        <button className="btn" onClick={handleSuma}>
          +
        </button>
      </div>
      <div className=" border border-1 border-dark rounded rounded mt-4 mb-4">
        <button className="btn color" onClick={handleOnAdd}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};
