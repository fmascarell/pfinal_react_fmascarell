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
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/home' element={<Home/> } />
        <Route path='/category/:cid' element={<ItemListContainer greeting='Productos' /> } />
        <Route path='/category/detail/:pid' element={<ItemDetailContainer /> } />                
        <Route path='*' element={<Navigate/>} />
      </Routes>
    </Router>
  );
}

export default App;
