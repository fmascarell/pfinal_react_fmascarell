import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MyAlert } from "../Alert/Alert";
import { doc, getDoc, getFirestore } from "firebase/firestore"
import { CartContext } from "../CartContext/CartContext";
import { useCounter } from "../Hooks/UseCounter";
import { ItemCounter } from "../ItemCounter/ItemCounter";
import Titulo from "../Titulo/Titulo";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [ loading, setLoading ] = useState(true)

  const { pid } = useParams();
  const { addToCart } = useContext(CartContext);

  const { count, handleResta, handleSuma } = useCounter(0, 10);
  const [alert, setAlert] = useState({ variant: "", message: "" });

  useEffect(() =>{
    const dbFirestore = getFirestore()
    const queryDoc = doc(dbFirestore, 'products', pid)
    getDoc(queryDoc)
    .then(res => setProduct( {id: res.id, ...res.data() } ))
    .catch(err => console.log(err))
    .finally(()=> setLoading(false))
}, [pid])

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert({ variant: "", message: "" });
    }, 3000);
  
    return () => clearTimeout(timeout);
  }, [alert]);

  const handleShowAlert = (variant, message) => {
    setAlert({ variant, message });
  };

  return (
    <div>
      <Titulo titulo={"Detalle del producto"} />
      <div className="row border border-3" style={{ margin: "50px" }}>
        <MyAlert variant={alert.variant} message={alert.message} />
        <div
          id="imag"
          className="col marginT"
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-end",
          }}
        >
          <img
            src={product.image}
            className="img-fluid image-size-item m-4"
            alt="Producto"
            style={{ maxWidth: "50%", height: "auto" }}
          />
        </div>
        <div id="dtl" className="col m-4">
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
          showAlert={handleShowAlert}
        />
      </div>
    </div>
  );
};
