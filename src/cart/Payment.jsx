import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Payment = () => {
  const location = useLocation();
  const { product, quantity, totalPrice } = location.state;

  const [isLoading, setIsLoading] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    card: "",
  });

  const [formValid, setFormValid] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    const { name, email, card } = userDetails;
    setFormValid(name && email && card);
  }, [userDetails]);

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
        <div className="flex justify-center mb-4 md:mb-0">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>

        <div>
          <div className="mb-4">
            <p className="text-lg font-bold mt-2">{product.name}</p>
            <p className="text-lg mt-1">{totalPrice} ₽</p>
            <p className="text-lg mt-1">Количество: {quantity}</p>
          </div>

          <div className="mb-4">
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

            <label className="block mb-2">Card Number</label>
            <input
              type="text"
              name="card"
              value={userDetails.card}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded mb-4"
              placeholder="Enter your card number"
            />
          </div>

          <button
            onClick={handlePlaceOrder}
            className={`w-full bg-blue-500 text-white py-2 rounded-lg mt-4 hover:bg-blue-600 ${
              !formValid ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={!formValid || isLoading}
          >
            {isLoading ? "Loading..." : "Zakaz qilish"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
