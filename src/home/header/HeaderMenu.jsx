import React, { useState, useEffect } from "react";
import Img1 from "../../images/logo_2.png";
import { FaCartArrowDown, FaSearch, FaUser } from "react-icons/fa";
import { RiBarChartFill } from "react-icons/ri";
import { MdFavoriteBorder } from "react-icons/md";
import { TfiAlignLeft } from "react-icons/tfi";

const HeaderItem = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

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

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleSave = () => {
    setIsSaved(true);
    setTimeout(() => {
      setIsMenuOpen(false);
    }, 2000);
  };

  return (
    <>
      {/* Header section */}
      <div
        className={`transition-all fixed top-0 left-0 w-full z-10 shadow-md p-4 flex flex-col gap-5 ${
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
            <TfiAlignLeft
              className="h-12 w-12 md:hidden text-black cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
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

          <div className="flex space-x-4 text-2xl sm:text-3xl">
            <FaSearch className="cursor-pointer" />
            <RiBarChartFill className="cursor-pointer" />
            <MdFavoriteBorder className="cursor-pointer" />
            <FaUser className="cursor-pointer" />
          </div>
        </div>

        <div className="text-black pt-4 pb-2 px-4 flex justify-between mt-2">
          <div className="flex justify-center space-x-6 w-full">
            <h3 className="text-lg cursor-pointer hover:text-gray-400">
              Katalog
            </h3>
            <h3 className="text-lg cursor-pointer hover:text-gray-400">
              Ijaraga olish
            </h3>
            <h3 className="text-lg cursor-pointer hover:text-gray-400">
              Brendlar
            </h3>
            <h3 className="text-lg cursor-pointer hover:text-gray-400">
              O'qitish
            </h3>
          </div>

          <div className="flex justify-center ml-5">
            <FaCartArrowDown className="text-black cursor-pointer text-2xl" />
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-gray-800 bg-opacity-50 flex justify-center items-center z-20">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-center text-xl font-semibold mb-4">
              это ваш город?
            </h2>
            <form className="space-y-4">
              <div className="max-h-96 overflow-y-auto">
                <div className="mb-4">
                  <label htmlFor="input1" className="block text-sm">
                    Katalog
                  </label>
                  <input
                    type="text"
                    id="input1"
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="input2" className="block text-sm">
                    Arenda
                  </label>
                  <input
                    type="text"
                    id="input2"
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="input3" className="block text-sm">
                    Brend
                  </label>
                  <input
                    type="text"
                    id="input3"
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="input4" className="block text-sm">
                    Obuchiy
                  </label>
                  <input
                    type="text"
                    id="input4"
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="input5" className="block text-sm">
                    Pomoshch
                  </label>
                  <input
                    type="text"
                    id="input5"
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="input6" className="block text-sm">
                    Informasiya
                  </label>
                  <input
                    type="text"
                    id="input6"
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="input7" className="block text-sm">
                    Otzev
                  </label>
                  <input
                    type="text"
                    id="input7"
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="input8" className="block text-sm">
                    Navosti
                  </label>
                  <input
                    type="text"
                    id="input8"
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="input9" className="block text-sm">
                    O Kompaniya
                  </label>
                  <input
                    type="text"
                    id="input9"
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="input10" className="block text-sm">
                    Kontaktlar
                  </label>
                  <input
                    type="text"
                    id="input10"
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                className="w-full bg-red-500 text-white p-2 rounded-md mb-2"
              >
                X
              </button>
              <button
                type="button"
                onClick={handleSave}
                className="w-full bg-blue-500 text-white p-2 rounded-md"
              >
                Saqlash
              </button>
            </form>
            {isSaved && (
              <div className="mt-4 text-green-500 text-center">
                Muvaffaqiyatli saqlandi!
              </div>
            )}
          </div>
        </div>
      )}

      <section id="help" className="h-screen bg-gray-100 p-10">
        <h2>Yordam</h2>
        <p>Yordam uchun kontent</p>
      </section>
      <section id="info" className="h-screen bg-gray-200 p-10">
        <h2>Ma'lumot</h2>
        <p>Ma'lumot uchun kontent</p>
      </section>
      <section id="reviews" className="h-screen bg-gray-300 p-10">
        <h2>Sharhlar</h2>
        <p>Sharhlar uchun kontent</p>
      </section>
      <section id="company" className="h-screen bg-gray-400 p-10">
        <h2>Kompaniya haqida</h2>
        <p>Kompaniya haqida kontent</p>
      </section>
      <section id="news" className="h-screen bg-gray-500 p-10">
        <h2>Yangiliklar</h2>
        <p>Yangiliklar uchun kontent</p>
      </section>
      <section id="contacts" className="h-screen bg-gray-600 p-10">
        <h2>Kontaktlar</h2>
        <p>Kontaktlar uchun kontent</p>
      </section>
    </>
  );
};

export default HeaderItem;
