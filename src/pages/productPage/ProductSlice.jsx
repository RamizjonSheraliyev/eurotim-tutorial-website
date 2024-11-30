import React from "react";

const ProductSpecs = () => {
  return (
    <div className="bg-blue-800 text-white p-8 rounded-lg shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
   
        <div>
          <h2 className="text-2xl font-bold mb-4">Технические характеристики</h2>
          <ul className="space-y-4">
            <li>Страна производитель: <span className="font-semibold">Франция</span></li>
            <li>Фирма производитель: <span className="font-semibold">LPG System</span></li>
            <li>Размеры: <span className="font-semibold">600x460x2100 мм</span></li>
            <li>Вес нетто: <span className="font-semibold">90 кг</span></li>
            <li>Максимальное разрежение: <span className="font-semibold">69 кПа / 690 мбар (относительное)</span></li>
            <li>Охлаждение: <span className="font-semibold">Механическая вентиляция встроенным насосом</span></li>
            <li>Индекс защиты: <span className="font-semibold">IP 20</span></li>
            <li>Класс электрической защиты: <span className="font-semibold">1</span></li>
            <li>Напряжение: <span className="font-semibold">230 В, переменное +/- 10%</span></li>
            <li>Частота: <span className="font-semibold">4.0 А</span></li>
            <li>Потребляемый ток: <span className="font-semibold">IP 20</span></li>
            <li>Потребляемая мощность: <span className="font-semibold">920 Вт</span></li>
            <li>Производительность вакуумного насоса: <span className="font-semibold">18,50 м3/час</span></li>
            <li>Предохранители: <span className="font-semibold">Т8А</span></li>
          </ul>
        </div>

     
        <div className="flex justify-center items-center mt-12 md:mt-16">
          <div className="text-6xl font-bold bg-blue-600 text-white p-12 rounded-full">
            1
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSpecs;
