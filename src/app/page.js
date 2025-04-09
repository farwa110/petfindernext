import React from "react";
import ServerComponent from "@/app/serversclient/ServerComponent";
import AnimalFilterWrapper from "@/app/serversclient/AnimalFilterWrapper";
// import RemoteImage from "./components/RemoteImage";
import { headers } from "next/headers";

export default function Home() {
  // const data = await fetch("https://api.petfinder.com/v2/animals", {
  //   headers: {
  //     Authorization: `Bearer ${process.env.API_TOKEN}`,
  //   },
  // });

  // const animals = await data.json();
  // console.log(animals);

  return (
    <div>
      {/* <AnimalFilterWrapper /> */}
      <ServerComponent />

      {/* <RemoteImage /> */}
    </div>
  );
}
