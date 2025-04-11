import { getAccessToken } from "../utils/getAccessToken";
// is a browser api.
const token = await getAccessToken();

export const getAnimals = async () => {
  const response = await fetch("https://api.petfinder.com/v2/animals", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch animal data");
    return [];
  }
  const data = await response.json();
  return data.animals || [];
};
export const getAnimalTypes = async () => {
  // const token = await getAccessToken(); // You may need to pass cookies() here if token is stored in cookies

  const res = await fetch("https://api.petfinder.com/v2/types", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store", // Optional: disables caching
  });

  if (!res.ok) {
    console.error("Failed to fetch animal types");
    return [];
  }

  const data = await res.json();
  return data.types || [];
};
export const getSingleAnimal = async (id) => {
  console.log(id, "id");
  const response = await fetch(`https://api.petfinder.com/v2/animals/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch animal data");
    return [];
  }
  const data = await response.json();
  return data.animal;
};

// export const getAnimalTypes = async () => {
//   // const token = await getAccessToken(); // You may need to pass cookies() here if token is stored in cookies

//   const res = await fetch("https://api.petfinder.com/v2/types", {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//     cache: "no-store", // Optional: disables caching
//   });

//   if (!res.ok) {
//     console.error("Failed to fetch animal types");
//     return [];
//   }

//   const data = await res.json();
//   return data.types || [];
// };
