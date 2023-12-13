import { useEffect, useState } from "react";
import { getFirestore, getDocs, query, collection, where } from 'firebase/firestore'
import { useParams } from "react-router-dom";
import { ItemList } from "../ItemList/ItemList";
import Titulo from "../Titulo/Titulo";

function ItemListContainer({ greeting = "prueba" }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { cid } = useParams();

useEffect (()=>{
  const dbFirestore = getFirestore()
  const queryCollection = collection(dbFirestore, 'products')
  
  const queryFilter = cid ? query(queryCollection, where('category', '==', cid)) : queryCollection

  getDocs(queryFilter)
  .then(res => { setProducts(res.docs.map(product => ({ id: product.id, ...product.data() }))) })
  .catch(err => console.log(err))
  .finally(()=> setLoading(false))
}, [cid])

  return (
    <div className="marginP">
      <Titulo titulo={greeting} />
      <div className="d-flex justify-content-center">
        {loading ? <h2 className="justify-content-center">Cargando...</h2> : <ItemList products={products} />}
      </div>
    </div>
  )
}

export default ItemListContainer
