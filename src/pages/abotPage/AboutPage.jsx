import React from "react";
import { useNavigate } from "react-router-dom";
import Img1 from "../../images/Комплектующие 1.png";
import Img2 from "../../images/Костюмы для массажа LPG 1.png";
import Img3 from "../../images/Оборудование 1.png";
import Img4 from "../../images/Расходные материалы 1.png";
import Img5 from "../../images/аренда 1.png";
import Img6 from "../../images/доставка 1.png";

const categories = [
  {
    title: "ОБОРУДОВАНИЕ",
    image: Img1,
    description: "Description for Equipment",
    price: 100,
  },
  {
    title: "КОСТЮМЫ LPG",
    image: Img2,
    description: "Description for LPG Suits",
    price: 200,
  },
  {
    title: "КОМПЛЕКТУЮЩИЕ",
    image: Img3,
    description: "Description for Components",
    price: 150,
  },
  {
    title: "РАСХОДНЫЕ МАТЕРИАЛЫ",
    image: Img4,
    description: "Description for Consumables",
    price: 80,
  },
  {
    title: "АРЕНДА",
    image: Img5,
    description: "Description for Rental",
    price: 50,
  },
  {
    title: "ДОСТАВКА",
    image: Img6,
    description: "Description for Delivery",
    price: 30,
  },
];

function AboutPage() {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate("/buy-details", { state: category });
  };

  return (
    <section id="info" style={{ marginTop: "130px" }}>
      <div className="bg-gray-100 min-h-screen">
        <header className="bg-blue-100 p-6 text-center">
          <h1 className="text-xl md:text-2xl font-bold text-gray-800">
            Eurotim - прямые поставки европейского оборудования и аксессуаров
            для косметологии, массажа и спорта.
          </h1>
        </header>

        <section className="p-6">
          <h2 className="text-xl font-bold mb-4 text-gray-700">Разделы</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="relative bg-gray-200 shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
                onClick={() => handleCategoryClick(category)}
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="h-48 w-full object-cover"
                />

                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h2 className="text-white text-lg md:text-xl font-semibold">
                    {category.title}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}

export default AboutPage;
