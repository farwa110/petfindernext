// app/serverclient/AnimalFilterWrapper.jsx

// Update the import to a relative path from the current file
import { getAnimalTypes } from "../lib/api"; // Adjust the path to point to the correct location
// Import the API function
import AnimalFilter from "../components/AnimalFilter"; // Going up one level to the app/ folder, then into components/

const AnimalFilterWrapper = async () => {
  // Fetch animal types from the API (this happens server-side)
  const animalTypes = await getAnimalTypes();

  // Pass the fetched animal types as a prop to the client-side AnimalFilter component
  return <AnimalFilter types={animalTypes} />;
};

export default AnimalFilterWrapper;
