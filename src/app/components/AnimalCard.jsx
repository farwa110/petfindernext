"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

const AnimalCard = ({ data }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(saved.includes(data.id));
  }, [data.id]);

  const toggleFavorite = () => {
    const saved = JSON.parse(localStorage.getItem("favorites")) || [];
    let updated;
    if (saved.includes(data.id)) {
      updated = saved.filter((id) => id !== data.id);
    } else {
      updated = [...saved, data.id];
    }
    localStorage.setItem("favorites", JSON.stringify(updated));
    setIsFavorite(!isFavorite);
  };

  console.log("DATA: ", data.photos);

  return (
    <div className="relative overflow-hidden rounded-lg shadow-md">
      <div className="relative h-64 w-full">
        {/* <Image
          src={data.photos[0]?.medium || "/placeholder.jpg"}
          alt={data.name}
          className="h-full w-full object-cover"
          width={400}
          height={400}
        /> */}
        <img
          src={data.photos[0]?.medium}
          alt={data.name}
          className="h-full w-full object-cover"
        />

        {/* Overlay only when favorited */}
        {isFavorite && (
          <div className="absolute inset-0 z-10 bg-white/40 transition-all duration-300" />
        )}

        {/* Star Icon */}
        <button
          onClick={toggleFavorite}
          className="absolute top-2 right-2 z-20 text-2xl transition-transform duration-200 hover:scale-110"
        >
          {isFavorite ? (
            <FaStar className="text-white drop-shadow" />
          ) : (
            <FaRegStar className="text-white/80 hover:text-white" />
          )}
        </button>
      </div>

      <div className="card-content p-4">
        <h2 className="text-lg font-bold">{data.name}</h2>
        <p>Type: {data.type}</p>
        <p>Breed: {data.breeds.primary}</p>
        <p>Age: {data.age}</p>
        <p>{data.description}</p>
      </div>
    </div>
  );
};

export default AnimalCard;
