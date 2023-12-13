import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Titulo from "../Titulo/Titulo";

export const OrderForm = ({ }) => {

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <form style={{ width: '300px' }}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre:</label>
          <input type="text" className="form-control" id="nombre" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Correo Electrónico:</label>
          <input type="email" className="form-control" id="email" />
        </div>
        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
    </div>
  );
}
