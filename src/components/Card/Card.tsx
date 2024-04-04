import { Search } from "../Search/Search.tsx";
import { useState } from "react";
import { KEY, API_URL } from "./constants.ts";
import { Response } from "./interfaces.ts";
import Info from "../Info/Info.tsx";

export function Card() {
  const [weather, setWeather] = useState<Response | null>(null);

  function onSubmit(location: string) {
    const url = `${API_URL}?q=${location}&units=metric&appid=${KEY}`;

    fetch(url)
      .then((response) => response.json())
      .then((data: Response) => {
        setWeather(data);
        console.log(data);
      });
  }

  return (
    <>
      <Search onSubmit={onSubmit} />
      {weather ? <Info {...weather} /> : null}
    </>
  );
}
