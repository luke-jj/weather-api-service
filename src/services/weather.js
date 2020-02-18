const axios = require('axios');
const querystring = require('querystring');
const config = require('../../config');

module.exports.getWeather = getWeatherData;

const protocol = 'https://';
const domain = config.API_DOMAIN;
const location = '/data/2.5';
const resource = '/forecast'

function getWeatherData(city) {
  const data = {
    'q': city,
    'units': 'metric',
    'APPID': config.API_KEY
  };
  const queryString = querystring.stringify(data);
  const request = `${protocol}${domain}${location}${resource}?${queryString}`;

  return axios.get(request);
}
