import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import "./App.css";

import NavBar from "./components/NavBar/NavBar.jsx";
import "./components/Logo/Logo.css";
import "./components/NavBar/NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/CartWidget/CartWidget.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/category" element={<ItemListContainer greeting="Bienvenidos"/>}/>
        <Route path='*' element={<Navigate to='/' />} />                  
      </Routes>
    </Router>
  );
}

export default App;
