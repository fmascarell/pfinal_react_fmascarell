import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { mFetchUnique } from "../../helpers/mFetch";
import { CartContext } from "../CartContext/CartContext";
import { useCounter } from "../Hooks/UseCounter";
import { ItemCounter } from "../ItemCounter/ItemCounter";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { pid } = useParams();
  const { addToCart } = useContext(CartContext);

  const { count, handleResta, handleSuma } = useCounter(0, 10);

  useEffect(() => {
    mFetchUnique(pid)
      .then((response) => setProduct(response))
      .catch((error) => console.log(error));
  }, [pid]);

  const onAdd = () => {
    // Agrega el producto al carrito con la cantidad actual del contador
    addToCart(product, count);
  };

  return (
    <div className="row">
      <div className="col-6 mt-5">
        <img src={product.image} className="img-fluid" alt="Producto" />
      </div>
      <div className="col-6 mt-5">
        <p>Sku: {pid}</p>
        <p>Nombre: {product.name} </p>
        <p>Categoría: {product.category} </p>
        <p>Precio: {product.price} </p>

        <ItemCounter
          count={count}
          handleResta={handleResta}
          handleSuma={handleSuma}
          onAdd={onAdd}
        />
      </div>
    </div>
  );
};
