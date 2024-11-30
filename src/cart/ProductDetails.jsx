import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Reviews from "../pages/abotPage/SwipperPage";
import ProductList from "./ProductList";
import ProductSpecs from "../pages/productPage/ProductSlice";
import ProductText from "../components/ProductText";

const ProductDetails = () => {
  const location = useLocation();
  const product = location.state;
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);
  const totalPrice = (product.price * quantity).toFixed(2);

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleBuyClick = () => {
    navigate("/payment", { state: { product, quantity, totalPrice } });
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="w-full h-64 bg-gray-200 rounded-lg mb-4 flex items-center justify-center relative">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div>
          <p className="text-lg font-bold">Цена: {totalPrice} ₽</p>
          <p className="mt-2 text-gray-600">Статус: {product.status}</p>
          <p className="mt-2 text-gray-600">Наличие: {product.stock}</p>

          <div className="mt-4 flex items-center gap-4">
            <button
              className="w-8 h-8 bg-gray-200 text-gray-600 rounded-full hover:bg-gray-300"
              onClick={decreaseQuantity}
            >
              -
            </button>
            <span className="text-xl">{quantity}</span>
            <button
              className="w-8 h-8 bg-gray-200 text-gray-600 rounded-full hover:bg-gray-300"
              onClick={increaseQuantity}
            >
              +
            </button>
          </div>

          <button
            className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
            onClick={handleBuyClick}
          >
            Купить
          </button>

          <div className="flex justify-between mt-4"></div>
        </div>
      </div>
      <div>
        <ProductText />
        <ProductSpecs />
        <Reviews />
        <ProductList />
      </div>
    </div>
  );
};

export default ProductDetails;
