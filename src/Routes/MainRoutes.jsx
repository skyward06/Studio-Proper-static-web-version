import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../Pages/About";
import Homepage from "../Pages/Homepage";
import Product from "../Pages/Product";
import Products from "../Pages/Products";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  );
};

export default MainRoutes;
