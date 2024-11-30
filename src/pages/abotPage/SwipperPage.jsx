import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Img1 from "../../images/4ay4d1g3aDw 1.png";

export default function Reviews() {
  const reviews = [
    {
      name: "Андрей",
      role: "Директор Салона Красоты",
      date: "02.12.2020",
      text: "Заказал оборудование Cellu M6 Integral LPG, доставка пришла вовремя, оборудование в идеальном состоянии, новое. Данный магазин посоветовала партнер. В отличии от других магазинов, с вами проходит официальная сделка с ООО, ещё очень важно, что вы предоставляете гарантийное обслуживание, и обучение сотрудников. Так же радует что никаких переплат, покупка напрямую от производителя. Буду рекомендовать, спасибо!",
      image: Img1,
    },
  ];

  return (
    <section id="news">
      <div className="bg-white py-10 px-4 z-10">
        <h2 className="text-2xl font-semibold text-center mb-6">Отзывы</h2>
        <div className="max-w-4xl mx-auto relative">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            loop
            navigation
            modules={[Navigation]}
            className="relative"
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center text-center">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="rounded-full w-20 h-20 mb-4 border-2 border-gray-300"
                  />
                  <h3 className="text-lg font-semibold text-gray-800">
                    {review.name}
                  </h3>
                  <p className="text-sm text-gray-500">{review.role}</p>
                  <p className="text-gray-700 max-w-2xl mt-6 leading-relaxed">
                    {review.text}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="swiper-button-prev absolute top-1/2 left-0 transform -translate-y-1/2 text-gray-800 text-3xl cursor-pointer">
            &#8249;
          </div>
          <div className="swiper-button-next absolute top-1/2 right-0 transform -translate-y-1/2 text-gray-800 text-3xl cursor-pointer">
            &#8250;
          </div>
        </div>
      </div>
    </section>
  );
}
