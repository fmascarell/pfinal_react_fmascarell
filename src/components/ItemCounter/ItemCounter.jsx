import { useCounter } from "../Hooks/UseCounter";

export const ItemCounter = ({ initial = 1, stock = 10, onAdd }) => {
  const { count, handleResta, handleSuma } = useCounter(initial, stock);

  const handleOnAdd = () => {
    onAdd(count);
  };
  return (
    <div className="text-center">
      <div>
        <p>{count}</p>
      </div>
      <div>
        <button onClick={handleSuma} className= "m-2"> + </button>
        <button onClick={handleResta} className = "m-2"> - </button>
      </div>
      <div className="m-2">
        <button onClick={handleOnAdd}>Agregar al carrito</button>
      </div>
    </div>
  );
};
