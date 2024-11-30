import React, { useState, useEffect } from "react";
import { FaHeart, FaHeartBroken } from "react-icons/fa";

const FavoriteSection = () => {
  const [favorites, setFavorites] = useState([]);
  const [isHeartFilled, setIsHeartFilled] = useState(false);

  const defaultProduct = {
    id: 1,
    name: "Sample Product",
    price: 100,
    image: "path_to_default_image.jpg",
  };

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (item) => {
    setFavorites((prev) => [...prev, item]);
  };

  const removeFromFavorites = (item) => {
    setFavorites(favorites.filter((fav) => fav.id !== item.id));
  };

  const toggleFavorite = (item) => {
    if (favorites.some((fav) => fav.id === item.id)) {
      removeFromFavorites(item);
    } else {
      addToFavorites(item);
    }
  };

  return (
    <div className="favorite-section p-6">
      <h2 className="text-2xl font-bold text-center mb-4">Sevimlilar</h2>

      {favorites.length === 0 ? (
        <p className="text-center text-xl">Afsuski, hali hech narsa yo'q</p>
      ) : (
        <div>
          {favorites.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center mb-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 mr-4"
              />
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p>{item.price} so'm</p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => toggleFavorite(item)}
                  className={`text-xl ${
                    favorites.some((fav) => fav.id === item.id)
                      ? "text-red-500"
                      : "text-gray-500"
                  }`}
                >
                  {favorites.some((fav) => fav.id === item.id) ? (
                    <FaHeart />
                  ) : (
                    <FaHeartBroken />
                  )}
                </button>
                <button
                  onClick={() => removeFromFavorites(item)}
                  className="text-xl text-gray-500"
                >
                  X
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-6 text-center">
        <button
          onClick={() => addToFavorites(defaultProduct)}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Mahsulotni sevimlilarga qo'shish
        </button>
      </div>
    </div>
  );
};

export default FavoriteSection;
