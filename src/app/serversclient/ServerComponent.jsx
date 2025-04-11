import { getAnimals, getAnimalTypes } from "../lib/api";

import AnimalListWrapper from "@/app/components/AnimalListWrapper";
import AnimalFilter from "../components/AnimalFilter";

const ServerComponent = async () => {
  const animalTypes = await getAnimalTypes();
  const animals = await getAnimals();

  return (
    <>
      {/* <AnimalFilter data={animalTypes} /> */}
      <AnimalListWrapper dataAnimals={animals} dataTypes={animalTypes} />;
    </>
  );
};

export default ServerComponent;
