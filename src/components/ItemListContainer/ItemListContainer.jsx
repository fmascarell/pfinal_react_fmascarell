import Titulo from "../Titulo/Titulo"

function ItemListContainer({greeting = 'valor default'}){
    

    return (
        <>
            <div className="titulo">{greeting}</div>
            <div>prueba</div>      
        </>
    )
}

export default ItemListContainer