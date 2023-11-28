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

  //const onAdd = () => {
  //  addToCart(product, count);
  //  console.log("Adding to cart with quantity: " + count)
  //};

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
          onAdd={(quantity) => addToCart({...product, quantity})} 
        />
      </div>
    </div>
  );
};
