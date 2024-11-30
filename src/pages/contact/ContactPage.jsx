import React from "react";
import Map from "../../images/map_sng 1.png";
import Payment from "../../images/payment 1.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section id="contacts">
      <footer className="bg-blue-100 text-gray-800">
        <div className="max-w-7xl mx-auto py-8 px-4 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <ul className="space-y-2">
              <li className="text-lg font-semibold">Каталог</li>
              <li className="cursor-pointer hover:text-blue-500">Аренда</li>
              <li className="cursor-pointer hover:text-blue-500">Бренды</li>
              <li className="cursor-pointer hover:text-blue-500">Обучение</li>
            </ul>
          </div>

          <div>
            <ul className="space-y-2">
              <li className="text-lg font-semibold">Сервис</li>
              <li className="cursor-pointer hover:text-blue-500">Оплата</li>
              <li className="cursor-pointer hover:text-blue-500">Доставка</li>
              <li className="cursor-pointer hover:text-blue-500">Гарантия</li>
              <li className="cursor-pointer hover:text-blue-500">Сервис</li>
              <li className="cursor-pointer hover:text-blue-500">Возврат</li>
              <li className="cursor-pointer hover:text-blue-500">
                Как сделать заказ
              </li>
            </ul>
          </div>

          <div>
            <ul className="space-y-2">
              <li className="text-lg font-semibold">Компания</li>
              <li className="cursor-pointer hover:text-blue-500">Отзывы</li>
              <li className="cursor-pointer hover:text-blue-500">Новости</li>
              <li className="cursor-pointer hover:text-blue-500">О компании</li>
            </ul>
          </div>

          <div>
            <ul className="space-y-2">
              <li className="text-lg font-semibold">Контакты</li>
              <li className="cursor-pointer hover:text-blue-500">
                <span className="font-medium">Адрес:</span> г. Москва ул, Ленина
                53, офис 104
              </li>
              <li className="cursor-pointer hover:text-blue-500">
                <span className="font-medium">График работы:</span> с 10:00 до
                18:00
              </li>
              <li className="cursor-pointer hover:text-blue-500">
                <span className="font-medium">Email:</span> business@mail.ru
              </li>
              <li className="cursor-pointer hover:text-blue-500">
                <span className="font-medium">Телефон:</span> 8 800 555 35 35
              </li>
              <li className="cursor-pointer hover:text-blue-500">
                +7 999 265 666
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-200 py-6">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-600 space-y-2 md:space-y-0 md:space-x-4">
              <span>© NevaLPG 2010-2020 Все права защищены</span>
              <a
                href="#salom"
                className="cursor-pointer hover:underline hover:text-blue-500"
              >
                Политика конфиденциальности
              </a>
            </div>

            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <img src={Map} alt="Россия" className="h-16" />
              <span className="text-sm">Доставка по России ЕАЭС СНГ</span>
              <img src={Payment} alt="Visa Mastercard" className="h-8" />
            </div>
          </div>
        </div>

        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      </footer>
    </section>
  );
};

export default Footer;
