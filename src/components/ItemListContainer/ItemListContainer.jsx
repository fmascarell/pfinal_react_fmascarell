import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { mFetch } from "../../helpers/mFetch";

function ItemListContainer({ greeting = "prueba" }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { cid } = useParams();

  useEffect(() => {
    if (cid) {
      mFetch()
        .then((resultado) => setProducts(resultado.filter(product => product.category === cid)))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    } else {
        mFetch()
        .then((resultado) => setProducts(resultado))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    }
  }, [cid]);

  return (
    <>
      <center>{greeting}</center>
      {loading ? (
        <h2>Cargando...</h2>
      ) : (
        <div className="row">
          {products.map((product) => (
            <div className="col-sm-6 col-md-4 col-lg-3" key={product.id}>
              <div className="card">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                />
                <div className="card-body">
                  <p>Nombre: {product.name}</p>
                  <p>Category: {product.category}</p>
                  <p>Precio: {product.price}</p>
                </div>
                <div className="card-footer">
                  <button className="btn btn-outline-dark w-100">
                    Detalle
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default ItemListContainer;
