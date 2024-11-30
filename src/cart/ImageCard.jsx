import React from "react";

function ImageCard({ title, image }) {
  return (
    <div className="relative bg-gray-200 shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
      <img src={image} alt={title} className="h-40 w-full object-cover" />

      <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <h2 className="text-white text-lg font-semibold">{title}</h2>
      </div>
    </div>
  );
}

export default ImageCard;
