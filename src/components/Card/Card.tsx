import { Search } from "../Search/Search.tsx";
import { useState } from "react";
import {
  KEY,
  API_URL,
  LOCATION_NOT_FOUND_ERROR,
  EMPTY_SEARCH_ERROR,
} from "./constants.ts";
import { Response } from "./interfaces.ts";
import Info from "../Info/Info.tsx";

export function Card() {
  const [weather, setWeather] = useState<Response | null>(null);
  const [error, setError] = useState<string | null>(null);

  function onSubmit(location: string) {
    if (location.length === 0) {
      setError(EMPTY_SEARCH_ERROR);
      setWeather(null);
    } else {
      fetchWeather(location);
    }
  }

  function fetchWeather(location: string) {
    const url = `${API_URL}?q=${location}&units=metric&appid=${KEY}`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          setWeather(null);
          setError(LOCATION_NOT_FOUND_ERROR);
          throw new Error(LOCATION_NOT_FOUND_ERROR);
        }
        return response.json();
      })
      .then((data: Response) => {
        console.log(data);
        setError(null);
        setWeather(data);
      });
  }

  return (
    <>
      <Search onSubmit={onSubmit} />
      {weather ? <Info {...weather} /> : null}
      {error ? <p>error : {error}</p> : null}
    </>
  );
}
