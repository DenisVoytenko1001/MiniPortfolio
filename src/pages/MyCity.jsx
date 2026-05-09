import { useEffect, useState } from "react";
import { getWeather } from "../api/weatherApi";
import "./MyCity.css";

function MyCity() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const data = await getWeather();
        setWeather(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="page">
      <h1>Моє місто — Київ</h1>

      <p>
        Київ — столиця України та одне з найбільших міст Європи.
        Це сучасне місто з багатою історією, красивою архітектурою
        та розвиненою IT-сферою.
      </p>

      {weather && (
        <div className="weather-card">
          <h2>Поточна погода</h2>

          <p>Місто: {weather.location.name}</p>

          <p>Країна: {weather.location.country}</p>

          <p>Температура: {weather.current.temp_c}°C</p>

          <p>Стан: {weather.current.condition.text}</p>

          <p>
            Координати: {weather.location.lat},
            {weather.location.lon}
          </p>

          <img
            src={weather.current.condition.icon}
            alt="weather"
          />
        </div>
      )}
    </div>
  );
}

export default MyCity;