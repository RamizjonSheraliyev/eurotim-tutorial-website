import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";

const ProductCard = ({ flag, title, price, tag, buttonText }) => {
  const navigate = useNavigate();

  return (
    <div className="border rounded-lg shadow-lg p-4 text-center w-64 h-[350px] flex flex-col justify-between bg-white">
      <div className="flex justify-between items-center mb-4">
        <span
          className={`text-lg font-bold ${
            tag === "Хит" ? "text-orange-500" : "text-green-500"
          }`}
        >
          {tag}
        </span>
        <img src={flag} alt="Country" className="w-6 h-4" />
      </div>

      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-500 mt-2">В наличии</p>
        <p className="text-red-500 font-bold text-lg mt-2">{price}</p>
      </div>

      <div className="mt-4">
        <button
          onClick={() => navigate("/buy")}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {buttonText}
        </button>

        <div className="flex justify-center mt-4 gap-4 text-gray-500">
          <span className="cursor-pointer hover:text-black">
            <AiOutlineHeart className="w-8 h-8" />
          </span>
          <span className="cursor-pointer hover:text-black">
            <AiOutlineShoppingCart className="w-8 h-8" />
          </span>
        </div>
      </div>
    </div>
  );
};

const PopularProducts = () => {
  const products = [
    {
      flag: "https://flagcdn.com/es.svg",
      title: "Cellu M6 Integral LPG",
      price: "15 590 ₽",
      tag: "Хит",
      buttonText: "Купить",
    },
    {
      flag: "https://flagcdn.com/fr.svg",
      title: "Cellu M6 Endermolab LPG",
      price: "15 590 ₽",
      tag: "Скидка",
      buttonText: "Купить",
    },
    {
      flag: "https://flagcdn.com/it.svg",
      title: "Cellu M6 Alliance",
      price: "15 590 ₽",
      tag: "Новинка",
      buttonText: "Купить",
    },
    {
      flag: "https://flagcdn.com/fr.svg",
      title: "Cellu M6 Integral LPG",
      price: "15 590 ₽",
      tag: "Хит",
      buttonText: "Купить",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isArrowsVisible, setIsArrowsVisible] = useState(true);
  const [scrollingTimeout, setScrollingTimeout] = useState(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + products.length) % products.length
    );
  };

  const handleScroll = () => {
    setIsArrowsVisible(false);

    if (scrollingTimeout) {
      clearTimeout(scrollingTimeout);
    }

    setScrollingTimeout(
      setTimeout(() => {
        setIsArrowsVisible(true);
      }, 5000)
    );
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollingTimeout) clearTimeout(scrollingTimeout);
    };
  }, [scrollingTimeout]);

  return (
    <section id="reviews">
      <div className="p-6 relative">
        <h1 className="text-2xl font-bold mb-4">Популярные товары и новинки</h1>

        <div className="flex space-x-4 mb-6">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">
            Популярные товары
          </button>
          <button className="bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-600 transition-colors duration-300">
            Новинки
          </button>
        </div>

        <div className="relative flex items-center">
          {isArrowsVisible && (
            <button
              onClick={prevSlide}
              className="absolute left-0 z-20 bg-gray-200 p-2 rounded-full hover:bg-gray-300"
            >
              &lt;
            </button>
          )}

          <div className="flex overflow-hidden w-full gap-4 justify-center">
            <div
              className="transition-transform duration-500 ease-in-out flex gap-6"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {products.map((product, index) => (
                <div key={index} className="flex-shrink-0 w-64">
                  <ProductCard
                    flag={product.flag}
                    title={product.title}
                    price={product.price}
                    tag={product.tag}
                    buttonText={product.buttonText}
                  />
                </div>
              ))}
            </div>
          </div>

          {isArrowsVisible && (
            <button
              onClick={nextSlide}
              className="absolute right-0 z-20 bg-gray-200 p-2 rounded-full hover:bg-gray-300"
            >
              &gt;
            </button>
          )}
        </div>

        <Link
          to="/all-products"
          className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Все товары
        </Link>
      </div>
    </section>
  );
};

export default PopularProducts;
