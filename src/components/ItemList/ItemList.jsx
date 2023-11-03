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
        {filterState === ""
          ? products.map((product) => (
              <div
                className="col-4 mt-4"
                key={product.id}
              >
                <div className="card mb-3">
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">Categoría: {product.category}</p>
                    <p className="card-text">Precio: {product.price}</p>
                  </div>
                  <div>
                    <Link to={`/category/${product.id}`}>
                      <button className="btn w-100 btn-outline-primary">
                        Detalle
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          : products
              .filter((prod) =>
                prod.name.toLowerCase().includes(filterState.toLowerCase())
              )
              .map((product) => (
                <div
                  className="col-4 mt-4"
                  key={product.id}
                >
                  <div className="card mb-3">
                    <img
                      src={product.image}
                      className="card-img-top"
                      alt={product.name}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{product.name}</h5>
                      <p className="card-text">Categoría: {product.category}</p>
                      <p className="card-text">Precio: {product.price}</p>
                    </div>
                    <div>
                      <Link to={`/category/${product.id}`}>
                        <button className="btn w-100 btn-outline-primary">
                          Detalle
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
      </div>
    </>
  );
};

export const ItemList = ({ products }) => {
  return <Filter products={products}>{productFiltered}</Filter>;
};
