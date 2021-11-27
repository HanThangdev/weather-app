import axios from "axios";

const baseUrl = "http://api.openweathermap.org/data/2.5/weather?";
const apiKey = "ca83213f20b810652f7d71e2d2728fd5";
export  const getWeatherData = async (cityName) => {
  try {
      const {data} = await axios.get(baseUrl +`q=${cityName}&appid=${apiKey}`)
      return data;
  } catch (error) {
    throw error;
  }
};
