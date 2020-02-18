const axios = require('axios');
const querystring = require('querystring');
const config = require('../../config');

module.exports.getWeather = getWeatherData;

const apiUrl = 'https://api.openweathermap.org/data/2.5/';
const apiResource = 'forecast'

function getWeatherData(city) {
  const data = {
    'q': city,
    'units': 'metric',
    'APPID': config.KEY
  };
  console.log(data);

  const queryString = querystring.stringify(data);
  console.log(queryString);

  const request = `${apiUrl}${apiResource}?${queryString}`;
  console.log(request);

  return axios.get(request);
}
