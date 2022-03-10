import axios from 'axios';

const apikey = '241f40eddcdf47d5b3260442221003';
const cities = JSON.parse(localStorage.getItem('cities') || '[]');

const requestWeather = async (cities: string[]) => {
  const weather: any = [];

  for (const city of cities) {
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=${apikey}&q=${city}&aqi=yes&lang=fr`
      );

      weather.push(response.data);
    } catch (error: any) {
      console.log(error);
      throw new Error(error);
    }
  }

  return weather;
};

const responseWeather = async () => {
  try {
    const weather = await requestWeather(cities);
    return weather;
  } catch (error) {
    console.log(error);
  }
};

export default responseWeather;
