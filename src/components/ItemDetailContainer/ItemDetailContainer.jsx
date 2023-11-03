import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { mFetch, mFetchUnique } from "../../helpers/mFetch"
import { ItemCounter } from "../ItemCounter/ItemCounter"

export const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})
    const {pid} = useParams()
    const [loading, setLoading] = useState(true)

    const onAdd = cant => {
        console.log("Cantidad: " + cant)
    }

    useEffect(() => {
            mFetchUnique(pid)
            .then( response => setProduct(response) )
            .catch(error => console.log(error))
            .finally(() => setLoading(false))  

    },[]
    )

    return (
        <div className="row">
            <div className="col-6 mt-5">
                    <img src={product.image} className="img-fluid" />
            </div>
            <div className="col-6 mt-5">
            <p>Sku: {pid}</p>
            <p>Nombre: {product.name} </p>
            <p>Category: {product.category} </p>
            <p>Precio: {product.price} </p>

            <ItemCounter onAdd={onAdd}/>
            </div>
        </div>
    )
}