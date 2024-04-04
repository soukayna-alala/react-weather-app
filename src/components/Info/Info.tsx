import Styles from "./Info.module.css";
import { Response } from "../Card/interfaces.ts";

function Info({ name, main, wind }: Response) {
  const { temp, humidity } = main;
  const { speed } = wind;
  const { place, temperature, windSpeed, humidityPercent } = Styles;

  return (
    <>
      <div className={place}>Location: {name}</div>
      <div className={temperature}>Temp: {temp}</div>
      <div className={windSpeed}>Wind Speed: {speed}</div>
      <div className={humidityPercent}>Humidity: {humidity}</div>
    </>
  );
}

export default Info;
