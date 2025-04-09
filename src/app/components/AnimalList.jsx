"use client";

import { useEffect, useState } from "react";
import AnimalCard from "./AnimalCard";

const AnimalsList = ({ data }) => {
  const [favoritesOnly, setFavoritesOnly] = useState(false);
  const [filteredAnimals, setFilteredAnimals] = useState(data);

  useEffect(() => {
    if (favoritesOnly) {
      const saved = JSON.parse(localStorage.getItem("favorites")) || [];
      const favAnimals = data.filter((animal) => saved.includes(animal.id));
      setFilteredAnimals(favAnimals);
    } else {
      setFilteredAnimals(data);
    }
  }, [favoritesOnly, data]);

  const noFavoritesYet = favoritesOnly && filteredAnimals.length === 0;

  return (
    <div className="p-4">
      {/* Toggle Button */}
      <button
        onClick={() => setFavoritesOnly((prev) => !prev)}
        className={`mb-6 rounded px-4 py-2 font-semibold transition ${
          favoritesOnly
            ? "bg-pink-500 text-white hover:bg-pink-600"
            : "bg-blue-500 text-white hover:bg-blue-600"
        }`}
      >
        {favoritesOnly ? "Show All Animals" : "Show Favorites Only"}
      </button>

      {/* No Favorites Message */}

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {noFavoritesYet ? (
          <div className="mt-10 text-center text-gray-600">
            <p className="text-2xl">💔 No favorites yet!</p>
            <p className="mt-2 text-sm">
              Tap the ⭐ on animals you love to save them here.
            </p>
          </div>
        ) : (
          filteredAnimals.map((animal, id) => (
            <AnimalCard key={id} data={animal} />
          ))
        )}
      </div>
    </div>
  );
};

export default AnimalsList;

// "use client";

// import AnimalCard from "./AnimalCard"; // make sure the path is correct

// const AnimalList = ({ animals }) => {
//   return (
//     <div className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 md:grid-cols-3">
//       {animals.map((animal) => (
//         <AnimalCard key={animal.id} animal={animal} />
//       ))}
//     </div>
//   );
// };

// export default AnimalList;
