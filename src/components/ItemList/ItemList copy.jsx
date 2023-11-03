import { Link } from "react-router-dom";
import { Filter } from "./Filter";

const productFiltered = ({ products, filterState, handleFilterChange }) => {
  return (
    <>
      <div className="col">
        <label>Buscar</label>
        <input
          className="form-control"
          type="text"
          value={filterState}
          onChange={handleFilterChange}
        />
      </div>
      <div className="row">
        {filterState === ''
          ? products.map((product) => (
              <div className="card w-25" key={product.id}>
                <img src={product.image} className="card-img-top" />
                <div className="card-body">
                  <p>Nombre: {product.name}</p>
                  <p>Category: {product.category}</p>
                  <p>Precio: {product.price}</p>
                </div>
                <div className="card-footer">
                  <Link to={`/category/${product.id}`}>
                    <button className="btn btn-outline-dark w-100">
                      detalle
                    </button>
                  </Link>
                </div>
              </div>
            ))
          : products
              .filter(prod =>
                prod.name.toLowerCase().includes(filterState.toLowerCase())
              )
              .map((product) => (
                <div className="card w-25" key={product.id}>
                  <img src={product.image} className="card-img-top" />
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
              ))}
      </div>
    </>
  );
};

export const ItemList = ({products}) => {
  return (
      <Filter products={products} >
          {productFiltered}
      </Filter>
  )
}
