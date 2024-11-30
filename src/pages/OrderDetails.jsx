import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const OrderDetails = () => {
  const location = useLocation();
  const { product, quantity, totalPrice, size, color } = location.state;

  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    card: "",
  });
  const [formValid, setFormValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const { name, email, card } = userDetails;
    setFormValid(name && email && card);
  }, [userDetails]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePlaceOrder = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      alert("Ваш заказ принят!");
    }, 2000);
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">Оформление заказа</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="flex flex-col items-center justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-64 object-cover rounded-lg"
          />
          <p className="text-lg font-bold mt-2">{product.title}</p>
          <p className="text-lg mt-1">{totalPrice} ₽</p>
          <p className="text-lg mt-1">Количество: {quantity}</p>
          <p className="text-lg mt-1">Размер: {size}</p>
          <p className="text-lg mt-1">Цвет: {color}</p>
        </div>

        <div>
          <label className="block mb-2">Full Name</label>
          <input
            type="text"
            name="name"
            value={userDetails.name}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded mb-4"
            placeholder="Enter your full name"
          />

          <label className="block mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={userDetails.email}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded mb-4"
            placeholder="Enter your email"
          />

          <label className="block mb-2">Visa Card</label>
          <input
            type="text"
            name="card"
            value={userDetails.card}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded mb-6"
            placeholder="Enter your Visa Card number"
          />

          <button
            onClick={handlePlaceOrder}
            disabled={!formValid || isLoading}
            className={`w-full p-2 bg-blue-500 text-white rounded-lg ${
              !formValid || isLoading
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-blue-600"
            }`}
          >
            {isLoading ? "Processing..." : "Place Order"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
