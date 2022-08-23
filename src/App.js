import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import CategoryManagement from "./components/CategoryManagement";
import ProductManagement from "./components/ProductManagement";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import Header from "./components/Header";
import Login from "./components/Login";
import Error404 from "./components/Error404";

import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/*" element={<Main />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="categoryManagement" element={<CategoryManagement />} />
          <Route path="productManagement" element={<ProductManagement />} />
          <Route path="products" element={<Products />} />
          <Route path="shoppingCart" element={<ShoppingCart />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
