import React from "react";
import Footer from "../contact/ContactPage";
import Img1 from "../../images/2166924 1.png";
import Imh2 from "../../images/legolaser_logo2019_form 1.png";
import Img3 from "../../images/A21259C4-B105-4AF6-12A3FAB1EA9B3D91 1.png";
import Img4 from "../../images/0_10246800_1518178537_img 1.png";
import Img5 from "../../images/0_97412200_1504460575_img 1.png";
import Img6 from "../../images/unnamed 1.png";
const CatalogPage = () => {
  const categories = [
    { title: "LPG (ФРАНЦИЯ)", image: Img1 },
    { title: "LEGOLASER (ИСПАНИЯ)", image: Imh2 },
    { title: "ICOONE (ИТАЛИЯ)", image: Img3 },
    { title: "Костюмы LPG", image: Img4 },
    { title: "Расходные материалы", image: Img5 },
    { title: "Косметика", image: Img6 },
  ];

  return (
    <div className="min-h-screen py-20 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-10">Каталог</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative group cursor-pointer transform transition-transform hover:scale-105"
          >
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-40 object-contain p-4"
              />
              <div className="p-4 text-center">
                <h2 className="text-lg font-semibold">{category.title}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
          Все товары
        </button>
      </div>
      <div>
        <br />
        <Footer />
      </div>
    </div>
  );
};

export default CatalogPage;
