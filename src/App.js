import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Auth from "./auth/LoginForm";
import HeaderItem from "./home/header/Header";
import ProductList from "./cart/ProductList";
import ProductDetails from "./cart/ProductDetails";
import AboutPage from "./pages/abotPage/AboutPage";
import BuyProduct from "./pages/abotPage/BuyProduct";
import Payment from "./cart/Payment";
import OrderDetails from "./pages/OrderDetails";
import CatalogPage from "./pages/catolog/CatologPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/dashboard" element={<HeaderItem />} />
        <Route path="/all-products" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/buy-details" element={<BuyProduct />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/order" component={<OrderDetails />} />
        <Route path="/catalog" element={<CatalogPage />} />
      </Routes>
    </Router>
  );
}

export default App;
