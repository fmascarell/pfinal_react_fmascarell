import React, { useEffect, useState } from "react";
import { useCounter } from "../Hooks/UseCounter";

export const ItemCounter = ({ initial = 0, stock = 10, onAdd }) => {
  const { count, handleResta, handleSuma, setCount } = useCounter(initial, stock);
  const [showButtons, setShowButtons] = useState(true);

  useEffect(() => {
    console.log("Current count: " + count);
  }, [count]);

  const handleOnAdd = () => {
    console.log("Adding to cart with count: " + count);
    onAdd(count);
    setShowButtons(false);
    setCount(1)
  };

  //const handleSumaAndAdd = () => {
  //  console.log("Suma clicked");
  //  handleSuma();
  //};
//
  //const handleRestaAndAdd = () => {
  //  console.log("Resta clicked");
  //  handleResta();
  //};

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
