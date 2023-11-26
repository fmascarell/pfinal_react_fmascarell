
export const CartContainer = () => {

//  const { cartList, vaciarCarrito, totalPrice } = useCartContext()
//
//    const handleOrders = () => {
//        const order = {}
//        order.buyer = { name: 'Francia Mascarell', phone: '997410907', email: 'fran.mascarell@hotmail.com' }
//        // order.items = [{id: '', price: '', title: '', cant: ''}]
//        order.items = cartList.map(( { id, price, cant, name } ) => ( { id: id, price: price, name: name, cant: cant} ) )
//        order.total = totalPrice()  
//
//        const db = getFirestore()
//        
//        // crear - insertando nuestra order en firestore
//        const queryCollection = collection(db, 'orders')
//
//        addDoc(queryCollection, order)
//        .then(({ id }) => console.log(id))
//        .catch(err => console.log(err))
//
//
//        // 1- crear un formulario cree productos - dash admin
//        // for - suben muchos productos
//        
//
//        /// update - actulizar 
//        // const queryDoc = doc(db, 'products', 'zcekFHPaKYQP3yQtge3N')
//
//        // updateDoc(queryDoc, {
//        //     stock: 90
//        // })
//        // .then(()=> console.log('procuto actualizado'))
//        // .catch(err => console.log(err))
//
//        // escritura por lotes
//        // const db = getFirestore()
//        // const batch = writeBatch(db)
//
//        // const queryUpdateProduct1 = doc(db, 'products', 'zcekFHPaKYQP3yQtge3N')
//        // const queryUpdateProduct2 = doc(db, 'products', 'Mp3HMRxD68nWlauQkraH')
//
//        // batch.update(queryUpdateProduct1, {
//        //     stock: 50
//        // })
//        // batch.update(queryUpdateProduct2, {
//        //     stock: 90
//        // })
//
//        // batch.commit()       
//        
//
//
//        // console.log('Enviando order: ', order)
//        // console.log(cartList)
//    }
//  
//  // console.log(cartList)
//  return (
//    <div className="w-100">
//        { cartList.map(product => <div>
//                                    <img className="w-25" src={product.imageUrl} alt="image" />
//                                    Producto: {product.name} - Price: {product.price} - Cantidad: {product.cant}
//                                    <button className="btn btn-danger"> X </button>
//
//                                    <hr/>
//                                  </div>) 
//        }
//        Precio Total: { totalPrice() }
//        <br />
//
//        <button 
//          className="btn btn-outline-danger" 
//          onClick={vaciarCarrito}
//        >
//          Vaciar carrito
//        </button>
//        <br />
//        <button onClick={handleOrders}>Terminar compra</button>
//    </div>
//  )
}