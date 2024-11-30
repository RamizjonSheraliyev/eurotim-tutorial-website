import React, { useState } from "react";

const ProductText = () => {
  const [activeTab, setActiveTab] = useState("description");

  const content = {
    description: (
      <div>
        <h3>Описание</h3>
        <p>
          Предлагаем купить Аппарат LPG Keymodule 1 из Франции с пробегом.
          !!!Все аппараты с оригинальным, нескрученным пробегом, обязательно
          показываем пробег на помпах в инженерном меню!
        </p>
        <p>
          LPG KEYMODULE 1 — Это самый первый аппарат линейки Cellu M6, имеющий
          значительно расширенный функционал по сравнению с предыдущими
          разработками. В устройстве реализованы новые технологии липомассажа,
          позволяющие повысить его эффективность на 30%.
        </p>
        <p>
          Уникальная манипула аппарата LPG Keymodule 1 дополнена множеством
          сменных насадок с моторизированными роллерами...
        </p>
      </div>
    ),
    specifications: (
      <div>
        <h3>Характеристики</h3>
        <ul>
          <li>Страна производитель: Франция</li>
          <li>Фирма производитель: LPG System</li>
          <li>Размеры: 600x460x2100 мм</li>
          <li>Вес нетто: 90 кг</li>
          <li>Максимальное разрежение: 69 кПа / 690 мбар</li>
          <li>Охлаждение: Механическая вентиляция встроенным насосом</li>
          <li>Индекс защиты: IP 20</li>
          <li>Класс электрической защиты: 1</li>
          <li>Потребляемая мощность: 920 Вт</li>
        </ul>
      </div>
    ),
    reviews: (
      <div>
        <h3>Отзывы</h3>
        <p>Отзывы о аппарате будут размещены здесь...</p>
      </div>
    ),
    video: (
      <div>
        <h3>Видео</h3>
        <p>Видео о работе аппарата будет размещено здесь...</p>
      </div>
    ),
    documents: (
      <div>
        <h3>Документы</h3>
        <p>Ссылки на документы и инструкции будут размещены здесь...</p>
      </div>
    ),
  };

  return (
    <div className="container mx-auto p-6">
      <div className="tabs">
        <ul className="flex border-b">
          {[
            "description",
            "specifications",
            "reviews",
            "video",
            "documents",
          ].map((tab) => (
            <li
              key={tab}
              className={`mr-4 py-2 px-4 cursor-pointer ${
                activeTab === tab
                  ? "border-b-2 border-blue-600"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === "description" && "Описание"}
              {tab === "specifications" && "Характеристики"}
              {tab === "reviews" && "Отзывы"}
              {tab === "video" && "Видео"}
              {tab === "documents" && "Документы"}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4">{content[activeTab]}</div>
    </div>
  );
};

export default ProductText;
