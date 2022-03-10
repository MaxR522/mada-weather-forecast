import axios from 'axios';

// api key from .env
const apiKey = process.env.REACT_APP_API_KEY || '';

// cities from localStorage
const cities = JSON.parse(localStorage.getItem('cities') || '[]');

/**
 * Make a request to get all city weather and return an array of weather of all city
 * @param cities Array of city names
 * @returns Array of weather of all city
 */
const requestWeather = async (cities: string[]) => {
  // init result variables
  const weather: any = [];

  // loop through all cities
  for (const city of cities) {
    // make a request to get weather of a city
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes&lang=fr`
      );

      // push response to result
      weather.push(response.data);
    } catch (error: any) {
      // if error, throw error
      throw new Error(error);
    }
  }

  // return result
  return weather;
};

/**
 * call requestWeather and return the result
 * @returns {Promise<any>}
 */

const responseWeather = async () => {
  try {
    const weather = await requestWeather(cities);
    return weather;
  } catch (error: any) {
    throw new Error(error);
  }
};

export default responseWeather;
