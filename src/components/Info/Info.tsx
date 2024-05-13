import Styles from "./Info.module.css";
import { Response } from "../Card/interfaces.ts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWater, faWind } from "@fortawesome/free-solid-svg-icons";

function Info({ name, main, wind, weather }: Response) {
  const { temp, humidity } = main;
  const { speed } = wind;
  const {
    windIcon,
    waterIcon,
    weatherImg,
    place,
    temperature,
    windSpeed,
    humidityPercent,
  } = Styles;
  const description = weather[0].main;

  return (
    <>
      {/*<div className={place}> {name}</div>*/}
      <img
        className={weatherImg}
        src={`src/assets/${description.toLowerCase()}.png`}
      />
      <div className={temperature}>
        {temp}
        <span> °C</span>
      </div>
      <div> {weather[0].main}</div>
      <div className={windSpeed}>
        <FontAwesomeIcon className={windIcon} icon={faWind} size="2x" />
        Wind Speed {speed} <span> Km/h</span>
      </div>
      <div className={humidityPercent}>
        <FontAwesomeIcon className={waterIcon} icon={faWater} size="2x" />
        Humidity {humidity}
        <span> %</span>
      </div>
    </>
  );
}

export default Info;
