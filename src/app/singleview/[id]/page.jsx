// import { getAnimals, getSingleAnimal } from "../../lib/api";
import { getAnimals, getSingleAnimal } from "../../lib/api";
import { HiOutlineStar } from "react-icons/hi";

export default async function Page({ params }) {
  const { id } = await params;
  const animalData = await getSingleAnimal(id);

  console.log("data: ", animalData);

  return (
    <div className="mx-auto max-w-md rounded-3xl bg-white">
      <div className="relative overflow-hidden rounded-3xl bg-[#F2968F] p-2">
        <img
          src={animalData.photos?.[0]?.medium}
          alt={animalData.name}
          className="mt-10 mb-6 h-100 w-full rounded-3xl object-cover"
        />
        <button className="absolute top-4 right-4 rounded-full bg-white/50 p-2 shadow">
          <HiOutlineStar className="h-5 w-5 text-white" />
        </button>
      </div>
      <div className="mx-auto max-w-md px-6 py-6">
        <h1 className="mb-4 text-2xl font-bold">{animalData.name}</h1>
        <p className="mb-4 text-sm leading-relaxed text-gray-700">
          {animalData.description}
        </p>
        {/* <div className="">
          <p className="line-height-6 mb-4 flex flex-row justify-evenly gap-2">
            {animalData.tags}
          </p>
        </div> */}

        <div className="mb-4 flex flex-wrap gap-2">
          {animalData.tags?.map((tag, index) => (
            <span
              key={index}
              className="rounded-full bg-pink-100 px-3 py-1 text-sm font-medium text-yellow-600 transition hover:bg-yellow-200"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="text-xs text-gray-400">Opdateret den 13. juli.</p>
        <div>
          <button
            style={{ backgroundColor: "#F2968F" }}
            className="w-full cursor-pointer rounded-full px-6 py-3 font-semibold text-white"
          >
            Adopt Me
          </button>
        </div>
      </div>
      {/* <img src={animalData.photos?.[0]?.medium} alt={animalData.name} /> */}
    </div>
  );
}
// export async function generateStaticParams() {
//   const data = await fetch("https://.../posts").then((res) => res.json());
//   const data = await getAnimals();

//   return data.map((animal) => ({
//     id: animal.id,
//   }));
// }
