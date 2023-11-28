import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { mFetch } from "../../helpers/mFetch";
import { ItemList } from "../ItemList/ItemList";
import Titulo from "../Titulo/Titulo";

function ItemListContainer({ greeting = "prueba" }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { cid } = useParams();

  useEffect(() => {
    if (cid) {
      mFetch()
        .then((response) =>
          setProducts(response.filter((product) => product.category === cid))
        )
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
        console.log(cid)
    } else {
      mFetch()
        .then((response) => setProducts(response))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    }
  }, [cid]);

  return (
    <div className="marginP">
      <Titulo titulo={greeting} />
      <div className="d-flex justify-content-center">
        {loading ? <h2>Cargando...</h2> : <ItemList products={products} />}
      </div>
    </div>
  )
}

export default ItemListContainer
