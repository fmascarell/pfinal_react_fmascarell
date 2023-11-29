import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { mFetchUnique } from "../../helpers/mFetch";
import { CartContext } from "../CartContext/CartContext";
import { useCounter } from "../Hooks/UseCounter";
import { ItemCounter } from "../ItemCounter/ItemCounter";
import Titulo from "../Titulo/Titulo";

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
    <div className="container">
      <Titulo titulo={"Detalle del producto"} />
      <div className="row marginT">
        <div
          id="imag"
          className="col marginT"
          style={{ display: "flex", alignItems: "flex-start" }}
        >
          <img
            src={product.image}
            className="img-fluid image-size-item"
            alt="Producto"
            style={{ maxWidth: "50%", height: "auto" }}
          />
        </div>
        <div id="dtl" className="col">
          <p>Sku: {pid}</p>
          <p>Nombre: {product.name} </p>
          <p>Categoría: {product.category} </p>
          <p>Precio: {product.price} </p>
        </div>
        <ItemCounter
          count={count}
          handleResta={handleResta}
          handleSuma={handleSuma}
          onAdd={(quantity) => addToCart({ ...product, quantity })}
        />
      </div>
    </div>
  );
};
