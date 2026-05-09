import axios from "axios";

const API_KEY = "8cd5e9581f904455818225510260905";

export const getWeather = async () => {
  const response = await axios.get(
    `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=Kyiv`
  );

  return response.data;
};