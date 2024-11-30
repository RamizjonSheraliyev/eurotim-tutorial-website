import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import Reviews from "./SwipperPage";
import ProductSpecs from "../productPage/ProductSlice";
import ProductText from "../../components/ProductText";

const BuyProduct = () => {
  const location = useLocation();
  const product = location.state;

  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("XL");
  const [color, setColor] = useState("Серый");
  const [showAlert, setShowAlert] = useState(false);

  const totalPrice = (product.price * quantity).toFixed(2);
  const navigate = useNavigate();

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  const handleClick = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);

    navigate("/payment", {
      state: { product, quantity, totalPrice, size, color },
    });
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">{product.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center relative">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div>
          <p className="text-lg font-bold">Цена: {totalPrice} ₽</p>
          <p className="mt-2 text-gray-600">Описание: {product.description}</p>

          <div className="mt-4">
            <p className="text-gray-700">Размер:</p>
            <div className="flex gap-4 mt-2">
              {["S", "M", "L", "XL"].map((item) => (
                <button
                  key={item}
                  className={`py-2 px-4 border rounded-full ${
                    size === item ? "bg-blue-500 text-white" : "bg-gray-200"
                  }`}
                  onClick={() => setSize(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <p className="text-gray-700">Цвет:</p>
            <div className="flex gap-4 mt-2">
              {["Серый", "Красный", "Зеленый", "Желтый"].map((item) => (
                <button
                  key={item}
                  className={`w-8 h-8 rounded-full ${
                    color === item ? `bg-${item.toLowerCase()}` : "bg-gray-200"
                  }`}
                  onClick={() => setColor(item)}
                ></button>
              ))}
            </div>
          </div>

          <div className="mt-4 flex items-center gap-4">
            <button
              className="w-8 h-8 bg-gray-200 text-gray-600 rounded-full"
              onClick={decreaseQuantity}
            >
              -
            </button>
            <span className="text-xl">{quantity}</span>
            <button
              className="w-8 h-8 bg-gray-200 text-gray-600 rounded-full"
              onClick={increaseQuantity}
            >
              +
            </button>
          </div>

          <button
            className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
            onClick={handleClick}
          >
            Купить в 1 клик
          </button>

          {showAlert && (
            <div className="mt-4 text-center text-green-500">
              Заказ принят! Мы свяжемся с вами.
            </div>
          )}

          <div className="flex justify-between mt-4">
            <div className="flex items-center gap-2 text-gray-600">
              <FaHeart className="w-6 h-6" />
              <span>Добавить в избранное</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <FaShoppingCart className="w-6 h-6" />
              <span>В корзину</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ProductText />
        <br />
        <ProductSpecs />
        <Reviews />
      </div>
    </div>
  );
};

export default BuyProduct;
