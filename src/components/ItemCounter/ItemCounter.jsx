import { useCounter } from "../Hooks/UseCounter"

export const ItemCounter = ({initial=1, stock=10, onAdd}) => {
    const {count, handleResta, handleSuma} = useCounter(initial, stock)    

    const handleOnAdd = ()=>{
        onAdd(count)
    }
    return (
        <div className="text-center">
            <div>
                <p>{count}</p>
            </div>
            <div>
                <button onClick={handleSuma}> + </button>
                <button onClick={handleResta}> - </button>
                <button onClick={handleOnAdd}>Agregar al carrito</button>
            </div>
        </div>
    )
}