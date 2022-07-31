import "./App.css";
import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import Success from "./pages/Success";
import ProductList from "./pages/ProductList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Login" element={<Login />} />
        <Route path="Register" element={<Register />} />
        <Route path="Cart" element={<Cart />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="Product/:id" element={<Product />} />
        <Route path="Success" element={<Success />} />
      </Routes>
    </div>
  );
}

export default App;
