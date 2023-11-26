import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { mFetch, mFetchUnique } from "../../helpers/mFetch"
import { CartContext } from "../CartContext/CartContext"
import { useCounter } from "../Hooks/UseCounter"
import { ItemCounter } from "../ItemCounter/ItemCounter"

export const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})
    const {pid} = useParams()
    const [loading, setLoading] = useState(true)

    const { count, handleResta, handleSuma } = useCounter(0, 10);
    const {addToCart, CartList} = useContext(CartContext)


    useEffect(() => {
            mFetchUnique(pid)
            .then(response => setProduct(response) )
            .catch(error => console.log(error))
            //.finally(() => setLoading(false))  

    },[]
    )
    console.log(product)
    
    const onAdd = cant => {
        const resultado = 'Cantidad a agregar: ' + cant;
        console.log(resultado)
        addToCart(product, cant)
    }

    console.log(CartList)

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

            <ItemCounter count={count} handleResta={handleResta} handleSuma={handleSuma} onAdd={onAdd} />
            </div>
        </div>
    )
}