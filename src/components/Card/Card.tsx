import { Search } from "../Search/Search.tsx";
import { useState } from "react";

export function Card() {
  const [location, setLocation] = useState<string>("");

  function onSubmit(location: string) {
    console.log("card component function ran", location);
    setLocation(location);
    // do api call later
  }

  return (
    <>
      <Search onSubmit={onSubmit} />
      <h1>{location}</h1>
    </>
  );
}
