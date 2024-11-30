import React, { useState, useEffect } from "react";
import Img1 from "../../images/logo_2.png";
import { FaCartArrowDown, FaSearch, FaUser } from "react-icons/fa";
import { RiBarChartFill } from "react-icons/ri";
import { MdFavoriteBorder } from "react-icons/md";
import { TfiAlignLeft } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";

import MainPage from "../../pages/bodyImages/Mainpage";
import AboutPage from "../../pages/abotPage/AboutPage";
import PopularProducts from "../../pages/productPage/ProductPage";
import Advantages from "../../pages/abotPage/AdvantegesPage";
import Reviews from "../../pages/abotPage/SwipperPage";
import Footer from "../../pages/contact/ContactPage";
import ProductSpecs from "../../pages/productPage/ProductSlice";

const HeaderItem = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isFavoriteOpen, setIsFavoriteOpen] = useState(false);

  const navigate = useNavigate();

  const handleScroll = () => {
    const scrollPosition = window.scrollY + 100;
    if (scrollPosition > 50) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setActiveLink(id);
  };

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveLink(entry.target.id);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    });

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    window.addEventListener("scroll", handleScroll);

    const storedCart = JSON.parse(localStorage.getItem("cart")) || [
      {
        name: "Sample Product",
        price: 100,
        quantity: 1,
        image: "path_to_product_image.png",
      },
    ];

    setCartItems(storedCart);
    const total = storedCart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotalPrice(total);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, [isCartOpen]);

  const handleSave = () => {
    setIsSaved(true);
    setTimeout(() => {
      setIsMenuOpen(false);
    }, 2000);
  };

  const toggleCartMenu = () => {
    setIsCartOpen(!isCartOpen);
  };

  const toggleFavoriteMenu = () => {
    setIsFavoriteOpen(!isFavoriteOpen);
  };

  const updateQuantity = (index, operation) => {
    const updatedCart = [...cartItems];
    if (operation === "increase") {
      updatedCart[index].quantity += 1;
    } else if (operation === "decrease" && updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
    }

    setCartItems(updatedCart);

    const total = updatedCart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotalPrice(total);

    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleUserClick = () => {
    navigate("/");
  };

  const goToCatalog = () => {
    navigate("/catalog");
  };

  return (
    <>
      <div
        className={`transition-all fixed top-0 left-0 w-full z-30 shadow-md p-4 flex flex-col gap-5 ${
          isSticky
            ? "bg-white text-black shadow-lg py-2"
            : "bg-white text-black py-4"
        } transition-all duration-300`}
      >
        <div className="flex flex-wrap sm:flex-nowrap justify-between items-center">
          <div className="flex items-center space-x-4">
            <img
              src={Img1}
              alt="Logo"
              className="h-12 sm:h-16 md:h-20 hidden md:block"
            />

            <TfiAlignLeft className="h-12 w-12 md:hidden text-black" />
          </div>

          <div
            className="hidden md:flex flex-col items-center cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <h1 className="font-semibold text-sm md:text-base">Москва</h1>
            <p className="text-xs md:text-sm">это ваш город?</p>
          </div>

          <div className="hidden lg:block text-right">
            <h1 className="text-sm md:text-base">8 800 555 35 35</h1>
            <h2 className="text-xs md:text-sm">+ 7 926 700 25 25</h2>
            <button className="bg-white text-black border border-blue-500 py-1 px-4 rounded-md mt-3 hover:bg-blue-500 hover:text-white transition-colors duration-300">
              Заказать звонок
            </button>
          </div>

          <div className="hidden md:flex space-x-6 text-sm md:text-base">
            <a
              href="#help"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("help");
              }}
              className={`hover:text-gray-400 ${
                activeLink === "help" ? "text-blue-500" : ""
              }`}
            >
              Помощь
            </a>
            <a
              href="#info"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("info");
              }}
              className={`hover:text-gray-400 ${
                activeLink === "info" ? "text-blue-500" : ""
              }`}
            >
              Информация
            </a>
            <a
              href="#reviews"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("reviews");
              }}
              className={`hover:text-gray-400 ${
                activeLink === "reviews" ? "text-blue-500" : ""
              }`}
            >
              Отзывы
            </a>
            <a
              href="#company"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("company");
              }}
              className={`hover:text-gray-400 ${
                activeLink === "company" ? "text-blue-500" : ""
              }`}
            >
              О компании
            </a>
            <a
              href="#news"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("news");
              }}
              className={`hover:text-gray-400 ${
                activeLink === "news" ? "text-blue-500" : ""
              }`}
            >
              Новости
            </a>
            <a
              href="#contacts"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contacts");
              }}
              className={`hover:text-gray-400 ${
                activeLink === "contacts" ? "text-blue-500" : ""
              }`}
            >
              Контакты
            </a>
          </div>

          <div className="flex space-x-4 text-2xl sm:text-3xl">
            <FaSearch className="cursor-pointer" />
            <RiBarChartFill className="cursor-pointer" />

            <MdFavoriteBorder
              className="cursor-pointer"
              onClick={toggleFavoriteMenu}
            />

            <FaUser className="cursor-pointer" onClick={handleUserClick} />
          </div>
        </div>

        <div className="text-black pt-4 pb-2 px-4 flex justify-between mt-2">
          <div className="flex justify-center space-x-6 w-full">
            <h3
              className="text-lg cursor-pointer hover:text-gray-400"
              onClick={goToCatalog}
            >
              Каталог
            </h3>
            <h3 className="text-lg cursor-pointer hover:text-gray-400">
              Аренда
            </h3>
            <h3 className="text-lg cursor-pointer hover:text-gray-400">
              Бренды
            </h3>
            <h3 className="text-lg cursor-pointer hover:text-gray-400">
              Обучение
            </h3>
          </div>

          <div className="flex justify-center ml-5">
            <FaCartArrowDown
              className="text-black cursor-pointer text-2xl"
              onClick={toggleCartMenu}
            />
          </div>
        </div>
      </div>

      {isCartOpen && (
        <div className="fixed top-0 right-0 w-96 bg-white p-6 h-screen overflow-y-auto z-30">
          <button
            onClick={() => setIsCartOpen(false)}
            className="text-xl absolute top-4 right-4"
          >
            X
          </button>
          <h2 className="text-center text-xl font-semibold mb-4">Your Cart</h2>

          {cartItems.map((item, index) => (
            <div key={index} className="flex justify-between items-center mb-4">
              <img src={item.image} alt={item.name} className="w-16 h-16" />
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p>
                  {item.price} x {item.quantity}
                </p>
              </div>
              <div className="flex space-x-2">
                <button onClick={() => updateQuantity(index, "decrease")}>
                  -
                </button>
                <button onClick={() => updateQuantity(index, "increase")}>
                  +
                </button>
              </div>
            </div>
          ))}

          <div className="flex justify-between mt-4">
            <h3>Total: {totalPrice}</h3>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}

      {isFavoriteOpen && (
        <div className="fixed top-0 right-0 w-96 bg-white p-6 h-screen overflow-y-auto z-30">
          <button
            onClick={() => setIsFavoriteOpen(false)}
            className="text-xl absolute top-4 right-4"
          >
            X
          </button>
          <h2 className="text-center text-xl font-semibold mb-4">
            Your Favorites
          </h2>

          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold">Sample Favorite Item</h3>
            <button>Remove</button>
          </div>
        </div>
      )}

      <MainPage />
      <AboutPage />
      <PopularProducts />
      <Advantages />
      <Reviews />
      <ProductSpecs />
      <Footer />
    </>
  );
};

export default HeaderItem;
