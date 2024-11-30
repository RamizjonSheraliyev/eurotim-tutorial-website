import React, { useState, useEffect } from "react";

const Cart = ({ isOpen, closeMenu }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [
      {
        name: "Product 1",
        price: "1000",
        quantity: 1,
        image: "path_to_product_image.png",
      },
    ];

    setCartItems(storedCart);

    const total = storedCart.reduce(
      (acc, item) => acc + parseFloat(item.price) * item.quantity,
      0
    );
    setTotalPrice(total);
  }, [isOpen]);

  const updateQuantity = (index, operation) => {
    const updatedCart = [...cartItems];
    if (operation === "increase") {
      updatedCart[index].quantity += 1;
    } else if (operation === "decrease" && updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
    }
    setCartItems(updatedCart);

    const total = updatedCart.reduce(
      (acc, item) => acc + parseFloat(item.price) * item.quantity,
      0
    );
    setTotalPrice(total);

    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-20">
          <div className="fixed top-0 right-0 w-96 bg-white p-6 h-screen overflow-y-auto">
            <button
              onClick={closeMenu}
              className="text-xl absolute top-4 right-4"
            >
              X
            </button>
            <h2 className="text-center text-xl font-semibold mb-4">
              Savatchangiz
            </h2>

            {cartItems.length > 0 ? (
              <div>
                {cartItems.map((item, index) => (
                  <div key={index} className="flex justify-between mb-4">
                    <div className="flex items-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-16 w-16 mr-4"
                      />
                      <div>{item.name}</div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(index, "decrease")}
                          className="bg-gray-200 text-xl px-2 py-1 rounded"
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(index, "increase")}
                          className="bg-gray-200 text-xl px-2 py-1 rounded"
                        >
                          +
                        </button>
                      </div>
                      <div>{item.price} ₽</div>
                    </div>
                  </div>
                ))}
                <div className="mt-4 text-xl font-bold">
                  Umumiy: {totalPrice} ₽
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center text-center mt-20">
                <img
                  src="path_to_empty_cart_image.png"
                  alt="Empty Cart"
                  className="h-32 mb-4"
                />
                <p className="text-gray-500">Savatchangiz bo'sh.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
