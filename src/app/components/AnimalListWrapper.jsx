"use client";

import { useState } from "react";
import AnimalFilter from "@/app/components/AnimalFilter";
import AnimalList from "@/app/components/AnimalList";

import all from "@/app/assets/images/all.png";
import cat from "@/app/assets/images/cats.png";
import dog from "@/app/assets/images/dogs.png";
import rabbit from "@/app/assets/images/bunny.png";
import bird from "@/app/assets/images/bird.png";
import horse from "@/app/assets/images/horse.png";

const iconMap = {
  cat,
  dog,
  rabbit,
  bird,
  horse,
};

const AnimalListWrapper = ({ dataAnimals, dataTypes }) => {
  const [filter, setFilter] = useState("All");

  const allTypes = [
    { name: "All", label: "All", icon: all },
    ...dataTypes.map((type) => ({
      name: type.name,
      label: type.name,
      icon: iconMap[type.name.toLowerCase()] || all,
    })),
  ];

  const filteredAnimals =
    filter === "All"
      ? dataAnimals
      : dataAnimals.filter((animal) => animal.type === filter);

  return (
    <>
      <AnimalFilter data={allTypes} active={filter} setFilter={setFilter} />
      <AnimalList data={filteredAnimals} />;
    </>
  );
};

export default AnimalListWrapper;
