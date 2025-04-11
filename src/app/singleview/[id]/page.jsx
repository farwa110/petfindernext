// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.

// We'll prerender only the params from `generateStaticParams` at build time.
// If a request comes in for a path that hasn't been generated,
// Next.js will server-render the page on-demand.

// import { getAnimals, getSingleAnimal } from "../../lib/api";
import { getAnimals, getSingleAnimal } from "../../lib/api";

// export async function generateStaticParams() {
//   const data = await fetch("https://.../posts").then((res) => res.json());
//   const data = await getAnimals();

//   return data.map((animal) => ({
//     id: animal.id,
//   }));
// }

export default async function Page({ params }) {
  const { id } = await params;
  const animalData = await getSingleAnimal(id);

  console.log("data: ", animalData);

  return (
    <div>
      <h1>{animalData.name}</h1>
      <p>{animalData.description}</p>
      <ul>{animalData.tags}</ul>
      <img src={animalData.photos?.[0]?.medium} alt={animalData.name} />
    </div>
  );
}

// export async function Test({ params }) {
//   const id = params.id;

//   const animal = await getSingleAnimal(id, token);
// }

// export const dynamicParams = true; // or false, to 404 on unknown paths
// export const revalidate = false;
// // false | 0 | number

// export async function generateStaticParams() {
//   const posts = await fetch(`https://api.petfinder.com/v2/animals/${id}`).then(
//     (res) => res.json(),
//   );
//   // Make sure to access `posts.data` since it's an object containing the list of animals
//   return posts.data.map((post) => ({
//     id: String(post.id),
//   }));
// }
// // console.log(posts);
// // export default async function Page({ params }) {
// //   const { id } = params;
// //   const post = await fetch(`https://api.petfinder.com/v2/animals/${id}`).then(
// //     (res) => res.json(),
// //   );
// return (
//   <main>
//     <img
//       src={post.photos[0]?.medium} // Make sure you're using `post` here instead of `data`
//       alt={post.name} // Again, use `post` instead of `data`
//       className="h-full w-full object-cover"
//     />
//     <h1>{post.name}</h1>
//     <p>{post.description}</p>
//     <p>{post.tags}</p>
//   </main>
// );
