import React from "react";
import { useNavigate } from "react-router-dom";

import productImage1 from "../images/525dab1e8bc34a8686d7ba9ebb2e4ad3 (1) 1.png";
import productImage2 from "../images/0ec9dba2aaecb34e5fc9c774eef32c1a 1.png";
import productImage3 from "../images/a839b510ad8dd5b1836121d0f7daeb46 1.png";
import productImage4 from "../images/525dab1e8bc34a8686d7ba9ebb2e4ad3 (1) 1 copy.png";
import productImage5 from "../images/525dab1e8bc34a8686d7ba9ebb2e4ad3 (1) 1.png";
import productImage6 from "../images/0ec9dba2aaecb34e5fc9c774eef32c1a 1.png";
import productImage7 from "../images/a839b510ad8dd5b1836121d0f7daeb46 1.png";
import productImage8 from "../images/525dab1e8bc34a8686d7ba9ebb2e4ad3 (1) 1 copy.png";
import productImage9 from "../images/0ec9dba2aaecb34e5fc9c774eef32c1a 1.png";
import productImage10 from "../images/a839b510ad8dd5b1836121d0f7daeb46 1.png";
import productImage11 from "../images/0ec9dba2aaecb34e5fc9c774eef32c1a 1.png";
import productImage12 from "../images/525dab1e8bc34a8686d7ba9ebb2e4ad3 (1) 1 copy.png";

const ProductList = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Cellu M6 Integral LPG",
      price: "15 590 р",
      flag: "🇪🇸",
      status: "Хит",
      stock: "В наличии",
      image: productImage1,
    },
    {
      id: 2,
      name: "Cellu M6 Endermolab LPG",
      price: "11 590 р",
      flag: "🇫🇷",
      status: "Скидка",
      stock: "В наличии",
      image: productImage2,
    },
    {
      id: 3,
      name: "Cellu M6 Alliance",
      price: "15 590 р",
      flag: "🇮🇹",
      status: "Новинка",
      stock: "Нет в наличии",
      image: productImage3,
    },
    {
      id: 4,
      name: "Cellu M6 Integral LPG",
      price: "15 590 р",
      flag: "🇫🇷",
      status: "Хит",
      stock: "Запросить цену",
      image: productImage4,
    },
    {
      id: 5,
      name: "Cellu M6 Endermolab LPG",
      price: "11 590 р",
      flag: "🇮🇹",
      status: "Скидка",
      stock: "В наличии",
      image: productImage5,
    },
    {
      id: 6,
      name: "Cellu M6 Alliance",
      price: "15 590 р",
      flag: "🇪🇸",
      status: "Новинка",
      stock: "В наличии",
      image: productImage6,
    },
    {
      id: 7,
      name: "Cellu M6 Integral LPG",
      price: "15 590 р",
      flag: "🇪🇸",
      status: "Хит",
      stock: "В наличии",
      image: productImage7,
    },
    {
      id: 8,
      name: "Cellu M6 Endermolab LPG",
      price: "11 590 р",
      flag: "🇫🇷",
      status: "Скидка",
      stock: "В наличии",
      image: productImage8,
    },
    {
      id: 9,
      name: "Cellu M6 Alliance",
      price: "15 590 р",
      flag: "🇮🇹",
      status: "Новинка",
      stock: "Нет в наличии",
      image: productImage9,
    },
    {
      id: 10,
      name: "Cellu M6 Integral LPG",
      price: "15 590 р",
      flag: "🇫🇷",
      status: "Хит",
      stock: "Запросить цену",
      image: productImage10,
    },
    {
      id: 11,
      name: "Cellu M6 Endermolab LPG",
      price: "11 590 р",
      flag: "🇮🇹",
      status: "Скидка",
      stock: "В наличии",
      image: productImage11,
    },
    {
      id: 12,
      name: "Cellu M6 Alliance",
      price: "15 590 р",
      flag: "🇪🇸",
      status: "Новинка",
      stock: "В наличии",
      image: productImage12,
    },
  ];

  const handleBuyClick = (product) => {
    navigate(`/product/${product.id}`, { state: product });
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 px-6 py-8">
      <div className="w-full lg:w-1/4 bg-gray-100 rounded-lg p-4">
        <h2 className="text-lg font-bold mb-4">Каталог</h2>
        <div>
          <label className="block mb-2">
            <input type="checkbox" className="mr-2" />
            LPG Франция
          </label>
          <label className="block mb-2">
            <input type="checkbox" className="mr-2" />
            Laser
          </label>
          <label className="block mb-2">
            <input type="checkbox" className="mr-2" />
            Косметология
          </label>
        </div>
        <div className="mt-6">
          <h3 className="font-bold text-sm mb-2">Цена (рублей)</h3>
          <input type="range" min="3000" max="50000" className="w-full" />
          <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
            Применить
          </button>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg bg-white p-4 shadow-md hover:shadow-lg"
          >
            <div className="flex justify-between items-center mb-4">
              <span className="text-2xl">{product.flag}</span>
              {product.status && (
                <span
                  className={`px-2 py-1 text-sm rounded-full ${
                    product.status === "Хит"
                      ? "bg-yellow-400 text-white"
                      : product.status === "Скидка"
                      ? "bg-red-500 text-white"
                      : "bg-green-500 text-white"
                  }`}
                >
                  {product.status}
                </span>
              )}
            </div>

            <div className="w-full h-32 bg-gray-200 rounded-lg mb-4 flex items-center justify-center relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            <h3 className="font-bold text-lg mb-2">{product.name}</h3>
            <p className="text-sm text-gray-500 mb-4">{product.stock}</p>
            <div className="text-red-500 font-bold text-xl mb-4">
              {product.price}
            </div>

            <button
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
              onClick={() => handleBuyClick(product)}
            >
              Купить
            </button>

            <div className="flex justify-around mt-4">
              <button className="flex items-center gap-1 text-gray-500 hover:text-red-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8.5a3.5 3.5 0 011.636-2.973c.85-.63 2.015-.995 3.364-.995 1.224 0 2.515.437 3.5 1.437C13.485 4.968 14.776 4.5 16 4.5c1.349 0 2.514.365 3.364.995A3.5 3.5 0 0121 8.5c0 2.55-2.45 5.435-6.314 8.564a1.2 1.2 0 01-1.372 0C5.45 13.935 3 11.05 3 8.5z"
                  />
                </svg>
              </button>
              <button className="flex items-center gap-1 text-gray-500 hover:text-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l.35 1.6m13.88 8.65H7.83m0 0l-.1.5a2.25 2.25 0 104.43.5h4.74m-9.07-1l.86-3.88m9.07 1.38l-.98 4.38a2.25 2.25 0 11-4.44-.5h-4.74m9.07 1.38H6.35a.75.75 0 01-.75-.61l-.63-3.09m0 0h14.56a.75.75 0 00.74-.9l-1.2-5.4a.75.75 0 00-.74-.6H4.82a.75.75 0 00-.75.61L3 3m3.35 6h10.74"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
