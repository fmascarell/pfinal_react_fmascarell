import React, { useState } from "react";
import { useCounter } from "../Hooks/UseCounter";

export const ItemCounter = ({ initial = 0, stock = 10, onAdd }) => {
  const { count, handleResta, handleSuma, setCount } = useCounter(initial + 1, stock);
  const [showButtons, setShowButtons] = useState(true);

  const handleOnAdd = () => {
    onAdd(count);
    setShowButtons(false);
    setCount(1);
  };

  return (
    <div className="text-center">
      {showButtons || count === 0 ? (
        <button onClick={handleOnAdd}>Agregar al carrito</button>
      ) : (
        <div>
          <button onClick={handleResta}>-</button>
          <span className="m-4">{count}</span>
          <button onClick={handleSuma}>+</button>
        </div>
      )}
    </div>
  );
};
