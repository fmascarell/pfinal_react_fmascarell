import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { mFetch } from "../../helpers/mFetch";
import { ItemList } from "../ItemList/ItemList";
import Titulo from "../Titulo/Titulo";

function ItemListContainer({ greeting = "prueba" }) {
  
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const { cid } = useParams();
  console.log(cid);
  console.log([products]);

  useEffect(() => {
    if (cid) {
      mFetch()
        .then((resultado) =>
          setProducts(resultado.filter((product) => product.category === cid))
        )
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
    <Titulo titulo = {greeting}/>
    <div>
      {loading ? <h2>Por favor espera...</h2> : <ItemList products={products} />}
    </div>
    </>
  );
}

export default ItemListContainer;
