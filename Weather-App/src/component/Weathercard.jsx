import React, { useEffect } from "react";
import "./Weathercard.css";

const Weathercard = ({ tempInfo }) => {
  const [weatherState, setWeatherState] = React.useState("");
  const { temp, humidity, pressure, weathermood, name, speed, country, sunset } = tempInfo;

  useEffect(() => {
    if (weathermood) {
      switch (weathermood) {
        case "Clouds":
          setWeatherState("wi-day-cloudy");
          break;
        case "Haze":
          setWeatherState("wi-day-haze");
          break;
        case "Clear":
          setWeatherState("wi-day-sunny");
          break;
        case "Fog":
          setWeatherState("wi-fog");
          break;
        case "Mist":
          setWeatherState("wi-dust");
          break;
        case "Smoke":
          setWeatherState("wi-smoke");
          break;
        case "Rain":
          setWeatherState("wi-rain");
          break;

        default:
          setWeatherState("wi-day-sunny");
          break;
      }
    }
  }, [weathermood]);

  let sec = sunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()}:${date.getMinutes()}`;

  return (
    <>
      <article className="widget">
        <div className="weatherIcon">
          <i className={`wi ${weatherState}`}></i>
        </div>

        <div className="weatherInfo">
          <div className="temperature">
            <span>{temp}&deg;</span>
          </div>

          <div className="description">
            <div className="weatherCondition">{weathermood}</div>
            <div className="place">
              {name}, {country}
            </div>
          </div>
        </div>

        <div className="date">{new Date().toLocaleString()}</div>    

        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p className="icon">
                <i className={"wi wi-sunset"}></i>
              </p>
              <p className="extra-info-leftside">
                {timeStr} PM <br />
                Sunset
              </p>

              <p className="icon">
                <i className={"wi wi-humidity"}></i>
              </p>
              <p className="extra-info-leftside">
                {humidity} % <br />
                Humidity
              </p>

              <p className="icon">
                <i className={"wi wi-rain"}></i>
              </p>
              <p className="extra-info-leftside">
                {pressure}hPa <br />
                Pressure
              </p>

              <p className="icon">
                <i className={"wi wi-strong-wind"}></i>
              </p>
              <p className="extra-info-leftside">
                {speed} <br />
                Speed
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Weathercard;
