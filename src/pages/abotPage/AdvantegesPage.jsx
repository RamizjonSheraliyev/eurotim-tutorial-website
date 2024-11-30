import React from "react";
import Img1 from "../../images/Без-посредников 1.png";
import Img2 from "../../images/сервисное-обслуживание 1.png";
import Img3 from "../../images/Всё официально 1.png";
import Img4 from "../../images/Обучение 1.png";
const Advantages = () => {
  return (
    <section id="company">
      <div className="bg-white py-12 px-6">
        <h2 className="text-2xl font-bold mb-8 text-center">
          Преимущества сотрудничества
        </h2>
        <div className="grid grid-cols-1 gap-12">
          <div className="relative flex flex-col md:flex-row items-center">
            <div className="absolute top-0 left-0 w-32 h-32 bg-blue-200 -z-10"></div>
            <div className="md:w-1/2">
              <img
                src={Img1}
                alt="Без посредников"
                className="rounded-lg w-full"
              />
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0 md:ml-8 text-center md:text-left">
              <h3 className="text-xl font-semibold">Без посредников</h3>
              <p className="text-gray-600 mt-2">
                Наша компания производит поставки оборудования напрямую.
              </p>
            </div>
          </div>

          <div className="relative flex flex-col md:flex-row items-center md:flex-row-reverse">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200 -z-10"></div>
            <div className="md:w-1/2">
              <img
                src={Img2}
                alt="Сервисное обслуживание"
                className="rounded-lg w-full"
              />
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0 md:mr-8 text-center md:text-left">
              <h3 className="text-xl font-semibold">Сервисное обслуживание</h3>
              <p className="text-gray-600 mt-2">
                Гарантийное обслуживание обеспечивает наш сервис центр.
              </p>
            </div>
          </div>

          <div className="relative flex flex-col md:flex-row items-center">
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-200 -z-10"></div>
            <div className="md:w-1/2">
              <img
                src={Img3}
                alt="Всё официально"
                className="rounded-lg w-full"
              />
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0 md:ml-8 text-center md:text-left">
              <h3 className="text-xl font-semibold">Всё официально</h3>
              <p className="text-gray-600 mt-2">
                Работаем с физическими и юридическими лицами. Предоставляем весь
                пакет документов.
              </p>
            </div>
          </div>

          <div className="relative flex flex-col md:flex-row items-center md:flex-row-reverse">
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-200 -z-10"></div>
            <div className="md:w-1/2">
              <img src={Img4} alt="Обучение" className="rounded-lg w-full" />
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0 md:mr-8 text-center md:text-left">
              <h3 className="text-xl font-semibold">Обучение</h3>
              <p className="text-gray-600 mt-2">
                Обучаем работе на оборудовании, предоставляем дополнительные
                материалы.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
