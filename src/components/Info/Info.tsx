import Styles from "./Info.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWater, faWind } from "@fortawesome/free-solid-svg-icons";
import { WeatherResponse } from "../Card/interfaces.ts";

function Info({ main, wind, weather }: WeatherResponse) {
  const { temp, humidity } = main;
  const { speed } = wind;
  const {
    windIcon,
    waterIcon,
    weatherImg,

    temperature,
    windSpeed,
    humidityPercent,
    status,
    gridContainer,
    statusTemp,
  } = Styles;
  const description = weather[0].main;
  console.log(Response);
  return (
    <>
      {/*<div className={place}> {name}</div>*/}
      <div className={gridContainer}>
        <img
          className={weatherImg}
          src={`src/assets/${description.toLowerCase()}.png`}
        />
        <div className={statusTemp}>
          <div className={status}> {weather[0].main}</div>
          <div className={temperature}>
            {Math.round(temp)}
            <span>°</span>
          </div>
        </div>

        <div className={windSpeed}>
          <FontAwesomeIcon className={windIcon} icon={faWind} size="2x" />
          {Math.round(speed)}km/h <span> Wind </span>
        </div>
        <div className={humidityPercent}>
          <FontAwesomeIcon className={waterIcon} icon={faWater} size="2x" />
          {humidity}%<span> Humidity</span>
        </div>
      </div>
    </>
  );
}

export default Info;
